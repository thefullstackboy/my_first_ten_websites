import React, { useEffect, useRef, useState } from 'react'

//show image import ki gayi ha.
import show from '../../../../src/assets/images/show.png'

//hide image import ki gayi ha.
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
  CFormSelect,
  CFormFeedback,
} from '@coreui/react-pro'

//toast error show karne ke liye use kiya jata jise ki error ke message ko show kare sakte ha.
import { toast } from 'react-hot-toast'

//api ke token ko call kiya gya ha jise ki token lee prapte kare sakte ha aur pest kare sakte ha.
import { createAdminUser, postCall } from '../../../services/apiService'
import { confirm } from 'react-bootstrap-confirmation';

const Tables = () => {
  const [currentPage, setCurrentPage] = useState(1)
  //list all records
  const [totalRecords, setTotalRecords] = useState(0)
  const [visible, setVisible] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const [userBeingAddedOrEdited, setUserBeingAddedOrEdited] = useState({})
  const [users, setUsers] = useState([])
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [samePasswordError, setSamePasswordError] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [isFormValidated, setIsFormValidated] = useState(false)

  const submitButton = useRef()

  const listUsers = async (pageNumber = 1) => {
    const postParams = {
      active: 1,
      page: pageNumber,
      limit: parseInt(rowsPerPage),
    }
    const response = await postCall(
      process.env.REACT_APP_ADMIN_API_BASEPATH + '/api/v1/list-all-admins',
      { postParams },
    )
    if (response.success) {
      setUsers(response.data.rows)

      //list all records
      setTotalRecords(response.data.count)
    } else {
      toast.error(response.message ?? response.message[0])
    }
  }

  useEffect(() => {
    listUsers()
  }, [rowsPerPage])

  const onChangePage = async (pageNumber) => {
    if (pageNumber === 0) pageNumber = 1
    // page change hone per es ka use kiya jata ha.
    setCurrentPage(pageNumber)
    await listUsers(pageNumber)
  }

  const editRecord = (e, userId) => {
    setEditMode(true)

    //set visible ko check karne ke liye use kiya jata ha.
    setVisible(true)
    setValidated(false)
    setSamePasswordError(false)
    const user = users.find((user) => user.id === userId)
    user.password = ''
    user.confirmPassword = ''
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

  const deleteUser = async (e, userId) => {
    const decision = await confirm('Do you want to delete user?');
    if (decision) {
      const postParams = {
        adminId: userId,
      }
      const response = await postCall(
        process.env.REACT_APP_ADMIN_API_BASEPATH + '/api/v1/delete-super-admin',
        { postParams },
      )
      if (response.success) {
        toast.success(response.message)
        // page ko show karne ke liye use kiya jata ha.
        setCurrentPage(1)
        setVisible(false)
        await listUsers()
      } else {
        toast.error(response.message ?? response.message[0])
      }
    }
  }

  const suspendOrRestoreUser = async (e, userId) => {
    const user = users.find((user) => user.id === userId)
    const endpoint =
      user.suspended === 1 ? '/api/v1/restore-super-admin' : '/api/v1/suspend-super-admin'
    const message =
      user.suspended === 1 ? 'Do you want to restore user?' : 'Do you want to suspend user?'
    const decision = window.confirm(message)
    if (decision) {
      const postParams = {
        adminId: userId,
      }
      const response = await postCall(process.env.REACT_APP_ADMIN_API_BASEPATH + endpoint, {
        postParams,
      })
      if (response.success) {
        toast.success(response.message)
        // susepend karne ke liye use kiya gya ha.
        setCurrentPage(1)
        await listUsers()
      } else {
        toast.error(response.message ?? response.message[0])
      }
    }
  }

  const addUser = () => {
    setValidated(false)
    setVisible(true)
    setSamePasswordError(false)
    setUserBeingAddedOrEdited({})
  }

  const addUpdateUser = async () => {
    submitButton.current.click()
  }

  const [validated, setValidated] = useState(false)
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
        const { email, firstName, lastName, id, password, confirmPassword } = userBeingAddedOrEdited
        let userObject = { email, firstName, lastName, adminId: id }
        if (password !== '' && confirmPassword !== '') {
          userObject = { ...userObject, password, confirmPassword }
        }
        const response = await createAdminUser('/api/v1/update-other-super-admin', {
          userBeingAddedOrEdited: userObject,
        })
        if (response.success) {
          toast.success(response.message)
          setVisible(false)
          //usther admin update kare ne ke liye kiya gya.
          setCurrentPage(1)
          await listUsers()
        } else {
          if (typeof response.message === 'string') {
            toast.error(response.message)
          } else {
            toast.error(response.message.join('\n\n'))
          }
        }
      } else {
        // add user
        const response = await createAdminUser('/api/v1/create-super-admin', {
          userBeingAddedOrEdited,
        })
        if (response.success) {
          toast.success(response.message)
          setVisible(false)
          //set current page 
          setCurrentPage(1)
          await listUsers()
        } else {
          if (typeof response.message === 'string') {
            toast.error(response.message)
          } else {
            toast.error(response.message.join('\n\n'))
          }
        }
      }
    }
  }

  return (
    <>
      <CModal
      //visibale check karne ke liye ha
        visible={visible}
        onClose={() => {
          setVisible(false)
          setEditMode(false)
        }}
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{isEditMode ? 'Edit' : 'Add New'} Super Admin</CModalTitle>
        </CModalHeader>
        <CModalBody className="px-5">
          <CForm
            className="row needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="mb-3">
              <CCol xs className="position-relative">
                <CFormFloating>
                  <CFormInput
                    id="firstName"
                    name="firstName"
                    required
                    onChange={changeHandler}
                    placeholder="First Name"
                    aria-label="First name"
                    value={userBeingAddedOrEdited['firstName'] ?? ''}
                    tooltipFeedback
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
                    name="lastName"
                    id="lastName"
                    onChange={changeHandler}
                    placeholder="Last Name"
                    required
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
                    name="email"
                    id="email"
                    required
                    type="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    aria-label="Email"
                    value={userBeingAddedOrEdited['email'] ?? ''}
                  />
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormFeedback invalid>Please provide a valid Email</CFormFeedback>
                </CFormFloating>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol xs className="input-group has-validation">
                <CFormFloating>
                  <CFormInput
                    name="password"
                    id="password"
                    required={!isEditMode}
                    value={userBeingAddedOrEdited['password'] ?? ''}
                    type={`${passwordVisible ? 'text' : 'password'}`}
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
                    name="confirmPassword"
                    id="confirmPassword"
                    required={!isEditMode}
                    type={`${confirmPasswordVisible ? 'text' : 'password'}`}
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    onChange={changeHandler}
                    value={userBeingAddedOrEdited['confirmPassword'] ?? ''}
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
            <CButton
              ref={submitButton}
              color="primary"
              type="submit"
              onClick={addUpdateUser}
              className="d-none"
            >
              Hidden Button
            </CButton>
          </CForm>
        </CModalBody>
        <CModalFooter>
          {!isEditMode && (
            <CButton type="submit" color="primary" onClick={addUpdateUser}>
              Add
            </CButton>
          )}
          {isEditMode && (
            <div className="d-grid gap-2 col-12 mx-auto">
              <CButton color="primary" onClick={addUpdateUser}>
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
              <strong>Admin List</strong>
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
                <CButton className="ms-2" size="sm" onClick={addUser}>
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
                        <CTableHeaderCell scope="row" className="align-middle">
                          {/* ye current page ko show karta ha. */}
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

              // jo current value ha vo li gayi ha.
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

export default Tables
