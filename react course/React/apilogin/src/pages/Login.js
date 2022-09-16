import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast, Toaster } from 'react-hot-toast'


//login function
const Login = () => {
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({})
    const navigate = useNavigate() 

//login with password and email id    
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
    

      //login value collect kare rha ha.
      const changeHandler = (e) => {
        const { name, value } = e.target
        const _loginForm = { ...loginForm }
        _loginForm[name] = value
        setLoginForm(_loginForm)
      }

      return (
        <>
        <h1>Login</h1>
        <Toaster />
        <input
            name="email"
            type="email"
            value={loginForm['email'] ?? ''}
            placeholder="Username"
            onChange={changeHandler}
            autoComplete="username"
          />

        <input
            name="password"
            onChange={changeHandler}
            type='password'
            value={loginForm['password'] ?? ''}
            placeholder="Password"
            autoComplete="current-password"
        />
          <button color="primary" className="px-4" onClick={attemptLogin}>
             Login
           </button>
    </>
      )
}

export default Login