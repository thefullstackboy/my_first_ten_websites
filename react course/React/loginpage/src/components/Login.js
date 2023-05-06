import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast, Toaster } from 'react-hot-toast'

function Login() {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log("name", name)
    console.log("passwor",password)

    const handleChange =(e)=>{
        setName(e.target.value);
    }
    
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    } 
  
    const attemptLogin = () => {
      axios
        .post(process.env.REACT_APP_ADMIN_API_BASEPATH + `/api/v1/login-super-admin + ${name} + ${password}  `, null)
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
  return (
    <div>
<h1>Login page</h1>
<Toaster />
  <div className="container">
    <form>
      <div className="form-group">
        <label>Email:</label>
          <input type="text" className="form-control" value={name} onChange={(e)=> {handleChange(e)}}/>
      </div>
    <div className="form-group">
      <label>Pasasword:</label>
    <input type="password" className="form-control" value={password} onChange={(e)=> {handlePasswordChange(e)}}/>
      </div>
          <button type="submit" className="btn btn-primary" onSubmit={(e) => {attemptLogin(e)}} >Submit</button>
  </form>
</div>
    </div>
  )
}

export default Login