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
  CFormSelect,
} from '@coreui/react-pro'
import { toast } from 'react-hot-toast'
import { createAdminUser, postCall } from '../../../services/apiService'

const Tables2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecords, setTotalRecords] = useState(0)
  const [visible, setVisible] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const [userBeingAddedOrEdited, setUserBeingAddedOrEdited] = useState({})
  const [users, setUsers] = useState([])
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [samePasswordError, setSamePasswordError] = useState(false)

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
    setCurrentPage(pageNumber)
    await listUsers(pageNumber)
  }

  const editRecord = (e, userId) => {
    setEditMode(true)
    setVisible(true)
    const user = users.find((user) => user.id === userId)
    setUserBeingAddedOrEdited(user)
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    const _user = { ...userBeingAddedOrEdited }
    _user[name] = value
    setUserBeingAddedOrEdited(_user)
    console.log(_user)
  }

  const deleteUser = async (e, userId) => {
    const decision = window.confirm('Do you want to delete user?')
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
    if (form.checkValidity()) {
      if (userBeingAddedOrEdited.hasOwnProperty('id')) {
        const { email, firstName, lastName, id } = userBeingAddedOrEdited
        const response = await createAdminUser('/api/v1/update-other-super-admin', {
          userBeingAddedOrEdited: { email, firstName, lastName, adminId: id },
        })
        if (response.success) {
          toast.success(response.message)
          setVisible(false)
          setCurrentPage(1)
          await listUsers()
        } else {
          toast.error(response.message ?? response.message[0])
        }
      } else {
        // add user
        const response = await createAdminUser('/api/v1/create-super-admin', {
          userBeingAddedOrEdited,
        })
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
          <CModalTitle>{isEditMode ? 'Edit' : 'Add New'} Super Admin</CModalTitle>
        </CModalHeader>
        <CModalBody className="px-5">
          <CForm onSubmit={handleSubmit}>
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
                </CFormFloating>
              </CCol>
            </CRow>
            {!isEditMode && (
              <>
                <CRow className="mb-3">
                  <CCol xs>
                    <CFormFloating>
                      <CFormInput
                        name="password"
                        id="password"
                        required
                        type={`${passwordVisible ? 'text' : 'password'}`}
                        placeholder="Password"
                        aria-label="Password"
                        onChange={changeHandler}
                      />
                      <CFormLabel htmlFor="password">Password</CFormLabel>
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
                  <CCol xs>
                    <CFormFloating>
                      <CFormInput
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        type={`${confirmPasswordVisible ? 'text' : 'password'}`}
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        onChange={changeHandler}
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
                    </CFormFloating>
                  </CCol>
                </CRow>
              </>
            )}
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
                    <CTableHeaderCell scope="col">Sr.</CTableHeaderCell>
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

export default Tables2
