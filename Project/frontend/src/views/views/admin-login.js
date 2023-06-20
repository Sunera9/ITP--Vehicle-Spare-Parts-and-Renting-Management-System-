import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginEmployee, validateEmail} from '../services/authService'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice'

import { Helmet } from 'react-helmet'

import './admin-login.css'


const initialState = {
  email:"",
  password:"",
}

const AdminLogin = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)

   //destructuring form data
   const {email,password} = formData

   const handleInputChange = (e) => {
     const {name, value} = e.target;
     setformData({...formData, [name]: value});
 };

 const login = async (e) => {
  e.preventDefault()
  
  
  if( !email || !password ){
    return toast.error("All fields are  required")
  }

  if(password.length < 6) {
    return toast.error("Password must be upto 6 characters")
  }
  
  //validating the email
  if(!validateEmail(email)) {
    return toast.error("Please enter a valid email")
  }

  const userData = {
    email,password
  };
  setIsLoading(true)

  try {
    const data = await loginEmployee(userData)
    console.log(data)
    await dispatch(SET_LOGIN(true));
    await dispatch(SET_NAME(data.first_name));
     history.push("/admin-dashboard");
    setIsLoading(false);
  } catch (error) {
        setIsLoading(false);
  }
}






  return (
    <div className="admin-login-container">
      <Helmet>
        <title>Shantha Motors - Admin login</title>
      </Helmet>
      <div className="admin-login-admin-login">
        <form onSubmit={login}>
        <img
          src="/playground_assets/signinbackground11891-mxo-800h.png"
          alt="signinbackground11891"
          className="admin-login-signinbackground1"
        />
        <img
          src="/playground_assets/rectangle3168-hj4l-200h.png"
          alt="Rectangle3168"
          className="admin-login-rectangle3"
        />
        <img
          src="/playground_assets/rectangle2167-hyqh.svg"
          alt="Rectangle2167"
          className="admin-login-rectangle2"
        />
        <img
          src="/playground_assets/pnglogoimage1172-g9v-200h.png"
          alt="PNGLogoimage1172"
          className="admin-login-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle223166-rlu7-600h.png"
          alt="Rectangle223166"
          className="admin-login-rectangle22"
        />
        
        <img
          src="/playground_assets/rectangle25button3169-ojgw-200h.png"
          alt="Rectangle25button3169"
          className="admin-login-rectangle25button"
        />
        <span className="admin-login-text">
          <span>Email </span>
       </span>
        <input className='admin-login-rectangle23input' type="email"
                name="email" value={email} onChange={handleInputChange}
                 required 
                style={{textAlign:'center'}}/>
        <span className="admin-login-text02">
          <span>Password</span>
        </span>
        <input className='admin-login-rectangle26input' type="password" 
                name="password" value={password} onChange={handleInputChange}
                required 
                style={{textAlign:'center'}}/>
        <span className="admin-login-text04">
          <span>forgot password? click here</span>
        </span>
        <span className="admin-login-text06">
          <span><button type='submit' style={{ color:'white' , fontWeight : 'bold'}}>Sign In</button></span>
        </span>
        <img
          src="/playground_assets/vector3175-2o1d.svg"
          alt="Vector3175"
          className="admin-login-vector"
        />
        <span className="admin-login-text08">
          Copyright ©2023 Shantha Motors®. All rights reserved.
        </span>
        <span className="admin-login-text09">
          <span>Admin Login</span>
        </span>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
