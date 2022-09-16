import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import show from '../../../../src/assets/images/show.png'
import hide from '../../../../src/assets/images/hide.png'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast, Toaster } from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState({})
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false)

  const attemptLogin = () => {
    axios
      .post(process.env.REACT_APP_ADMIN_API_BASEPATH + '/api/v1/login-super-admin', loginForm, null)
      .then((response) => {
        if (response.data.success) {
          window.localStorage.setItem('token', response.data.authToken)
          dispatch({ type: 'login', isLoggedIn: true })
          navigate('/dashboard')
        } else {
          if (typeof response.data.message === 'string') {
            toast.error(response.data.message)
          } else {
            toast.error(response.data.message.join('\n'))
          }
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    const _loginForm = { ...loginForm }
    _loginForm[name] = value
    setLoginForm(_loginForm)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div>
        <Toaster />
      </div>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 className="text-center">Login</h1>
                    <p className="text-medium-emphasis text-center">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="email"
                        type="email"
                        value={loginForm['email'] ?? ''}
                        placeholder="Username"
                        onChange={changeHandler}
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        onChange={changeHandler}
                        type={`${passwordVisible ? 'text' : 'password'}`}
                        value={loginForm['password'] ?? ''}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
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
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton color="primary" className="px-4" onClick={attemptLogin}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
