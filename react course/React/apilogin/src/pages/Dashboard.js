import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { createAdminUser, postCall } from '../services/apiService'


//read api
export default function Dashboard() {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecords, setTotalRecords] = useState(0)
  const [visible, setVisible] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const [userBeingAddedOrEdited, setUserBeingAddedOrEdited] = useState({})

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
    const decision =  ('Do you want to delete user?');
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
    <div>
    <div>Admin Dashboard</div>
    <h5>Email</h5>
    {users.map((user, index) => {
      return (
                      <div key={user.id}>
                        {/* <p className="align-middle">{user.firstName}</p>
                        <p className="align-middle">{user.lastName}</p> */}
                        <table>
                       
                        <tr>
                          <td>
                          {user.id}
                          </td>
                        </tr>

                        <tr>
                          <td>
                          {user.firstName}
                          </td>
                        </tr>

                        <tr>
                          <td>
                          {user.lastName}
                          </td>
                        </tr>                    

                        <tr>
                          <td>
                          {user.email}
                          </td>
                        </tr>

                        <tr>
                          <td>active 
                          {user.active}
                          </td>
                        </tr>

                        <tr>
                          <td>status
                          {user.suspended}
                          </td>
                        </tr>

                        <button
                            className={`badge ${user.suspended === 1 ? 'bg-dark' : 'bg-success'}`}
                          >
                            {user.suspended === 1 ? 'Suspended' : 'Active'}
                          </button>

                          <button
                            onClick={(e) => suspendOrRestoreUser(e, user.id)}
                            color={`${user.suspended === 1 ? 'success' : 'danger'}`}
                            variant="outline"
                            size="sm"
                            className="ms-2"
                          >
                            {user.suspended === 1 ? 'Restore' : 'Suspend'}
                          </button>
                        </table>                                                            
                      </div>
                            )
                  })}

{/* select option */}
<select
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
</select>
<div
        visible={visible}
        onClose={() => {
          setVisible(false)
          setEditMode(false)
        }}
      >
        <div onClose={() => setVisible(false)}>
          <title>{isEditMode ? 'Edit' : 'Add New'} Super Admin</title>
        </div>
      
          <form
            className="row needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <div xs className="position-relative">
                <div>
                  <inout
                    id="firstName"
                    name="firstName"
                    required
                    onChange={changeHandler}
                    placeholder="First Name"
                    aria-label="First name"
                    value={userBeingAddedOrEdited['firstName'] ?? ''}
                    tooltipFeedback
                  />
                  <label htmlFor="firstName">First name</label>
                  <div invalid>Please provide a valid First Name</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div xs>
                <div>
                  <input
                    name="lastName"
                    id="lastName"
                    onChange={changeHandler}
                    placeholder="Last Name"
                    required
                    aria-label="Last name"
                    value={userBeingAddedOrEdited['lastName'] ?? ''}
                  />
                  <label htmlFor="lastName">Last name</label>
                  <div invalid>Please provide a valid Last Name</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div xs>
                <div>
                  <input
                    name="email"
                    id="email"
                    required
                    type="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    aria-label="Email"
                    value={userBeingAddedOrEdited['email'] ?? ''}
                  />
                  <label htmlFor="email">Email</label>
                  <div invalid>Please provide a valid Email</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div xs className="input-group has-validation">
                <div>
                  <input
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
                  <label htmlFor="password">Password</label>
                  <div invalid> {passwordError ? passwordError : 'Please provide a valid Password'}</div>
                  <span
                    className="password-show"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                   
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div xs className="input-group has-validation">
                <div>
                  <input
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
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <span
                    className="password-show"
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  >
                  
                    
                  </span>
                  <div id="validationServerUsernameFeedback" invalid>Please provide same confirm password</div>
                </div>
              </div>
            </div>
            <button
              ref={submitButton}
              color="primary"
              type="submit"
              onClick={addUpdateUser}
              className="d-none"
            >
              Hidden Button
            </button>
          </form>
 
        <div>
          {!isEditMode && (
            <button type="submit" color="primary" onClick={addUpdateUser}>
              Add
            </button>
          )}
          {isEditMode && (
            <div className="d-grid gap-2 col-12 mx-auto">
              <button color="primary" onClick={addUpdateUser}>
                Update
              </button>
              <button color="danger" onClick={(e) => deleteUser(e, userBeingAddedOrEdited['id'])}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
}  

  

          

