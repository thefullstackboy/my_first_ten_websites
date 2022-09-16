import React, { useEffect, useRef, useState } from 'react'
import show from '../../../../src/assets/images/show.png'
import hide from '../../../../src/assets/images/hide.png'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CButton,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSmartPagination,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormFloating,
  CFormLabel,
  CForm,
  CFormSelect, CFormFeedback,
} from '@coreui/react-pro'
import { postCall } from '../../../services/apiService'
import { toast } from 'react-hot-toast'
import { confirm } from 'react-bootstrap-confirmation';

const ReferrerTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [visible, setVisible] = useState(false)
  const [totalRecords, setTotalRecords] = useState(0)
  const [isEditMode, setEditMode] = useState(false)
  const [userBeingAddedOrEdited, setUserBeingAddedOrEdited] = useState({})
  const [users, setUsers] = useState([])
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [validated, setValidated] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [samePasswordError, setSamePasswordError] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [isFormValidated, setIsFormValidated] = useState(false)

  const listUsers = async (pageNumber = 1) => {
    const postParams = {
      active: 1,
      page: pageNumber,
      limit: parseInt(rowsPerPage),
    }
    const response = await postCall(
      process.env.REACT_APP_REFERRER_API_BASEPATH + '/api/v1/admin/list-all-referrer',
      { postParams },
    )
    if (response.success) {
      setUsers(response.data.rows)
      setTotalRecords(response.data.count)
    } else {
      toast.error(response.message ?? response.message[0])
    }
  }

  const addUser = () => {
    setValidated(false)
    setVisible(true)
    setSamePasswordError(false)
    setUserBeingAddedOrEdited({})
  }

  useEffect(() => {
    listUsers()
  }, [rowsPerPage])

  const onChangePage = async (pageNumber) => {
    if (pageNumber === 0) pageNumber = 1
    setCurrentPage(pageNumber)
    await listUsers(pageNumber)
  }

  const editRecord = (e, userId) => {
    setEditMode(true)
    setVisible(true)
    setSamePasswordError(false)
    const user = users.find((user) => user.id === userId)
    setUserBeingAddedOrEdited(user)
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    const _user = { ...userBeingAddedOrEdited }
    _user[name] = value
    setUserBeingAddedOrEdited(_user);
    checkValidity(_user, name);
  }

  const checkValidity = (_user, name) => {
    const regXforUpperCase = /^(?=.*[A-Z])/;
    const regXforlowerCase = /^(?=.*[a-z])/;
    const regXforNumber = /^(?=.*[0-9])/;
    const regXforSpecialChar = /^(?=.*[!@#$%^&])/;
    // checking if user has already clicked on add button
    let err = 'Atleast ';
    if (name === 'password') {
      let pass = _user['password'] ?? '';
      console.log('aaa1');
      if (!regXforUpperCase.test(pass)) {
        err += '1 uppercase, ';
      }
      if (!regXforlowerCase.test(pass)) {
        err += '1 lowercase, ';
      }
      if (!regXforNumber.test(pass)) {
        err += '1 number, ';
      }
      if (!regXforSpecialChar.test(pass)) {
        err += '1 special character, ';
      }
      if (pass.length >= 8 && pass.length < 200);
      else err += 'min 8 characters';

      if (err === 'Atleast ') {
        setPasswordError('');
        setIsFormValidated(true);
      } else {
        setPasswordError(err);
        setIsFormValidated(false);
      }
    }

    if (name === 'confirmPassword' && _user['password'] !== _user['confirmPassword']) {
      setSamePasswordError(true);
      setIsFormValidated(false);
    } else {
      setSamePasswordError(false);
      setIsFormValidated(true);
    }

  }

  const submitButton = useRef()

  const addUpdateReferer = () => {
    submitButton.current.click()
  }

  const suspendOrRestoreUser = async (e, userId) => {
    const user = users.find((user) => user.id === userId)
    const endpoint =
      user.suspended === 1 ? '/api/v1/admin/restore-referrer' : '/api/v1/admin/suspend-referrer'
    const message =
      user.suspended === 1 ? 'Do you want to restore user?' : 'Do you want to suspend user?'
    const decision = window.confirm(message)
    if (decision) {
      const postParams = {
        referrerId: userId,
      }
      const response = await postCall(process.env.REACT_APP_REFERRER_API_BASEPATH + endpoint, {
        postParams,
      })
      if (response.success) {
        toast.success(response.message)
        setCurrentPage(1)
        await listUsers()
      } else {
        toast.error(response.message ?? response.message[0])
      }
    }
  }

  const deleteUser = async (e, userId) => {
    const decision = await confirm('Do you want to delete user?');
    if (decision) {
      const postParams = {
        referrerId: userId,
      }
      const response = await postCall(
        process.env.REACT_APP_REFERRER_API_BASEPATH + '/api/v1/admin/delete-referrer',
        { postParams },
      )
      if (response.success) {
        toast.success(response.message)
        setCurrentPage(1)
        setVisible(false)
        await listUsers()
      } else {
        toast.error(response.message ?? response.message[0])
      }
    }
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    setValidated(true)
    if (userBeingAddedOrEdited['password'] !== userBeingAddedOrEdited['confirmPassword']) {
      setSamePasswordError(true)
      return;
    } else {
      setSamePasswordError(false)
    }
    if (form.checkValidity() && isFormValidated) {
      if (userBeingAddedOrEdited.hasOwnProperty('id')) {
        const { email, firstName, lastName, id, mobile, companyName, companyNumber } =
          userBeingAddedOrEdited
        const response = await postCall(
          process.env.REACT_APP_REFERRER_API_BASEPATH + '/api/v1/admin/update-referrer',
          {
            postParams: {
              email,
              firstName,
              mobile,
              companyName,
              companyNumber,
              lastName,
              referrerId: id,
            },
          },
        )
        if (response.success) {
          toast.success(response.message)
          setVisible(false)
          setCurrentPage(1)
          await listUsers()
        } else {
          toast.error(response.message ?? response.message[0])
        }
      } else {
        // add referer
        const response = await postCall(
          process.env.REACT_APP_REFERRER_API_BASEPATH + '/api/v1/admin/create-referrer',
          {
            postParams: userBeingAddedOrEdited,
          },
        )
        if (response.success) {
          toast.success(response.message)
          setVisible(false)
          setCurrentPage(1)
          await listUsers()
        } else {
          toast.error(response.message ?? response.message[0])
        }
      }
    }
  }

  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          setVisible(false)
          setEditMode(false)
        }}
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{isEditMode ? 'Edit' : 'Add New'} Referrer</CModalTitle>
        </CModalHeader>
        <CModalBody className="px-5">
          <CForm
            className="row needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    id="firstName"
                    name="firstName"
                    required
                    onChange={changeHandler}
                    placeholder="First Name"
                    aria-label="First name"
                    value={userBeingAddedOrEdited['firstName'] ?? ''}
                  />
                  <CFormLabel htmlFor="firstName">First name</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid First Name</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    required
                    name="lastName"
                    id="lastName"
                    onChange={changeHandler}
                    placeholder="Last Name"
                    aria-label="Last name"
                    value={userBeingAddedOrEdited['lastName'] ?? ''}
                  />
                  <CFormLabel htmlFor="lastName">Last name</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid Last Name</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    required
                    name="email"
                    id="email"
                    type="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    aria-label="Email"
                    value={userBeingAddedOrEdited['email'] ?? ''}
                  />
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid email</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    required
                    onChange={changeHandler}
                    value={userBeingAddedOrEdited['mobile'] ?? ''}
                    name="mobile"
                    placeholder="Mobile"
                    aria-label="Mobile"
                  />
                  <CFormLabel htmlFor="mobile">Mobile</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid mobile number</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    required
                    onChange={changeHandler}
                    value={userBeingAddedOrEdited['companyName'] ?? ''}
                    name="companyName"
                    id="companyName"
                    placeholder="Company Name"
                    aria-label="Company Name"
                  />
                  <CFormLabel htmlFor="companyName">Company Name</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid Company Name</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs>
                <CFormFloating>
                  <CFormInput
                    required
                    onChange={changeHandler}
                    value={userBeingAddedOrEdited['companyNumber'] ?? ''}
                    name="companyNumber"
                    id="companyNumber"
                    placeholder="Company Number"
                    aria-label="Company Number"
                  />
                  <CFormLabel htmlFor="companyNumber">Company Number</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid Company Number</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            {!isEditMode && (
              <>
                <CRow className="mb-3">
                  <CCol xs className="input-group has-validation">
                    <CFormFloating>
                      <CFormInput
                        name="password"
                        id="password"
                        required
                        type={`${passwordVisible ? 'text' : 'password'}`}
                        value={userBeingAddedOrEdited['password'] ?? ''}
                        placeholder="Password"
                        aria-label="Password"
                        onChange={changeHandler}
                        className={`${passwordError ? 'is-invalid' : ''}`}
                      />
                      <CFormLabel htmlFor="password">Password</CFormLabel>
                      <CFormFeedback invalid> {passwordError ? passwordError : 'Please provide a valid Password'}</CFormFeedback>
                      <span
                        className="password-show"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {!passwordVisible && (
                          <img src={show} style={{ width: '20px' }} alt="show password" />
                        )}
                        {passwordVisible && (
                          <img src={hide} style={{ width: '20px' }} alt="hide password" />
                        )}
                      </span>
                    </CFormFloating>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol xs className="input-group has-validation">
                    <CFormFloating>
                      <CFormInput
                        value={userBeingAddedOrEdited['confirmPassword'] ?? ''}
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        type={`${confirmPasswordVisible ? 'text' : 'password'}`}
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        onChange={changeHandler}
                        className={`${samePasswordError ? 'is-invalid' : ''}`}
                        aria-describedby="validationServerUsernameFeedback"
                      />
                      <CFormLabel htmlFor="confirmPassword">Confirm password</CFormLabel>
                      <span
                        className="password-show"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      >
                        {!confirmPasswordVisible && (
                          <img src={show} style={{ width: '20px' }} alt="show password" />
                        )}
                        {confirmPasswordVisible && (
                          <img src={hide} style={{ width: '20px' }} alt="hide password" />
                        )}
                      </span>
                      <CFormFeedback id="validationServerUsernameFeedback" invalid>Please provide same confirm password</CFormFeedback>
                    </CFormFloating>
                  </CCol>
                </CRow>
              </>
            )}
            <CButton
              ref={submitButton}
              color="primary"
              type="submit"
              onClick={addUpdateReferer}
              className="d-none"
            >
              Hidden Button
            </CButton>
          </CForm>
        </CModalBody>
        <CModalFooter>
          {!isEditMode && (
            <CButton onClick={addUpdateReferer} color="primary">
              Add
            </CButton>
          )}
          {isEditMode && (
            <div className="d-grid gap-2 col-12 mx-auto">
              <CButton onClick={addUpdateReferer} color="primary">
                Update
              </CButton>
              <CButton color="danger" onClick={(e) => deleteUser(e, userBeingAddedOrEdited['id'])}>
                Delete
              </CButton>
            </div>
          )}
        </CModalFooter>
      </CModal>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <strong>Referrers List</strong>
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <CFormSelect
                  name="rowsPerPage"
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                  size="sm"
                  aria-label="Default select example"
                  style={{ width: '150px' }}
                >
                  <option value="5">Select Rows</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </CFormSelect>
                <CButton size="sm" className="ms-2" onClick={addUser}>
                  Add New
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Surname</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((user, index) => {
                    return (
                      <CTableRow key={user.id}>
                        <CTableHeaderCell className="align-middle" scope="row">
                          {(currentPage - 1) * rowsPerPage + index + 1}
                        </CTableHeaderCell>
                        <CTableDataCell className="align-middle">{user.firstName}</CTableDataCell>
                        <CTableDataCell className="align-middle">{user.lastName}</CTableDataCell>
                        <CTableDataCell className="align-middle">{user.email}</CTableDataCell>
                        <CTableDataCell className="align-middle">
                          <span
                            className={`badge ${user.suspended === 1 ? 'bg-dark' : 'bg-success'}`}
                          >
                            {user.suspended === 1 ? 'Suspended' : 'Active'}
                          </span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="secondary"
                            size="sm"
                            onClick={(e) => editRecord(e, user.id)}
                          >
                            Edit
                          </CButton>
                          <CButton
                            onClick={(e) => suspendOrRestoreUser(e, user.id)}
                            color={`${user.suspended === 1 ? 'success' : 'danger'}`}
                            variant="outline"
                            size="sm"
                            className="ms-2"
                          >
                            {user.suspended === 1 ? 'Restore' : 'Suspend'}
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
              <CSmartPagination
                activePage={currentPage}
                pages={Math.ceil(totalRecords / rowsPerPage)}
                onActivePageChange={onChangePage}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ReferrerTable
