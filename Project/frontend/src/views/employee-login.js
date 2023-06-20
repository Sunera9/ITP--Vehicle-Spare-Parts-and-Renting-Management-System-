import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import './employee-login.css'
import { toast } from 'react-toastify'
import { loginEmployee, validateEmail} from '../services/authService'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice'


const initialState = {
  email:"",
  password:"",
}

const EmployeeLogin = (props) => {
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
     history.push("/employee-dashboardcopy1");
    setIsLoading(false);
  } catch (error) {
        setIsLoading(false);
  }
}





  return (
    <div className="employee-login-container">
      <Helmet>
        <title>Shantha Motors - Employee Login</title>
      </Helmet>
      <div className="employee-login-employee-login">
        
        {/*login form */}
        <form onSubmit={login}>
        <img
          src="/playground_assets/signinbackground21891-h6nq-800h.png"
          alt="signinbackground21891"
          className="employee-login-signinbackground2"
        />
        <img
          src="/playground_assets/rectangle3113-nvbo-200h.png"
          alt="Rectangle3113"
          className="employee-login-rectangle3"
        />
        <img
          src="/playground_assets/rectangle2114-1cpn.svg"
          alt="Rectangle2114"
          className="employee-login-rectangle2"
        />
        <img
          src="/playground_assets/pnglogoimage1115-k1vh-200h.png"
          alt="PNGLogoimage1115"
          className="employee-login-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle22117-wm98-600h.png"
          alt="Rectangle22117"
          className="employee-login-rectangle22"
        />
      
        <img
          src="/playground_assets/rectangle251110-pt2-200h.png"
          alt="Rectangle251110"
          className="employee-login-rectangle25"
        />
        <span className="employee-login-text">
          <span>Email</span>
        </span>
        <input className='employee-login-rectangle23' type="email" 
               name="email"  value={email} onChange={handleInputChange}
               style={{textAlign:'center'}}/>
        <span className="employee-login-text02">
          <span>Password</span>
        </span>
        <input className='employee-login-rectangle26' type="password" 
               name="password"  value={password} onChange={handleInputChange}
               style={{textAlign:'center'}}/>
        <span className="employee-login-text04">
          <span>forgot password? click here</span>
        </span>
        <span className="employee-login-text06">
          <span><button type='submit' style={{ color:'white' , fontWeight : 'bold'}}>Sign In</button></span>
        </span>
        <img
          src="/playground_assets/vector1115-02zf.svg"
          alt="Vector1115"
          className="employee-login-vector"
        />
         </form>
        <span className="employee-login-text08">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        <span className="employee-login-text10">
          <span>Employee Login</span>
        </span>
       
      </div>
    </div>
  )
}

export default EmployeeLogin
