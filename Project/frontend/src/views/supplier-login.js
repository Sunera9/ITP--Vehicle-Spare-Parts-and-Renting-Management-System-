import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginSupplier, validateEmail} from '../services/supplierService'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/supplySlice'

import { Helmet } from 'react-helmet'

import './supplier-login.css'

const initialState= {
  email:"",
  password:"",
}

const SupplierLogin = (props) => {
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
    const data = await loginSupplier(userData)
    console.log(data)
    await dispatch(SET_LOGIN(true));
    await dispatch(SET_NAME(data.company_name));
    history.push("/supplier-profile2");
    setIsLoading(false);
  } catch (error) {
        setIsLoading(false);
  }
}



  return (
    <div className="supplier-login-container">
      <Helmet>
        <title>Shantha Motors®- Login</title>
      </Helmet>
      <div className="supplier-login-supplier-login">
        <img
          src="/playground_assets_login/sparekade1svg24-cer-700h.png"
          alt="sparekade1svg24"
          className="supplier-login-sparekade1svg"
        />
        <img
          src="/playground_assets_login/pnglogoimage1svg27-dqf-200h.png"
          alt="PNGLogoimage1svg27"
          className="supplier-login-pn-logoimage1svg"
        />
        <img
          src="/playground_assets_login/rectangle28svg1233-n9xw-500w.png"
          alt="Rectangle28svg1233"
          className="supplier-login-rectangle28svg"
        />
        <img
          src="/playground_assets_login/rectangle28svg1941-mz5b-500w.png"
          alt="Rectangle28svg1941"
          className="supplier-login-rectangle28svg1"
        />

        {/*Supplier login form */}
        <form onSubmit={login}>
          <span className="addnew-supply-text88">
          </span>

          <div className="supplier-login-group7">
            <img
              src="/playground_assets_login/rectangle23input29-lksj-200h.png"
              alt="Rectangle23input29"
              className="supplier-login-rectangle23input"
            />
            <input className='supplier-login-rectangle23input' placeholder='Enter Email' type="email" name="email" value={email} onChange={handleInputChange}
             required 
             style={{ textAlign: 'center' }} />


            <span className="supplier-login-text">
              <span>Email Address:</span>
              <span> <button type=""></button></span>
            </span>
          </div>

          <div className="supplier-login-group8">
            <img
              src="/playground_assets_login/rectangle26input321-hrh-200h.png"
              alt="Rectangle26input321" 
              className="supplier-login-rectangle26input"
            />
            <input className='supplier-login-rectangle26input' placeholder='Enter password' type="password" name="password" value= {password}  onChange={handleInputChange}
            required
            style={{ textAlign: 'center' }} />



            <span className="supplier-login-text02">
              <span>Password:</span>
            </span>
          </div>
          <div className="supplier-login-group6">
            <img
              src="/playground_assets_login/rectangle25button211-ui6-200h.png"
              alt="Rectangle25button211"
              className="supplier-login-rectangle25button"
            />
            <span className="supplier-login-text04">
            <span><button type="submit" style={{ color: 'white',fontWeight: 'bold',textAlign:'center' }}> Log in </button></span>
              <span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <img
            src="/playground_assets_login/vectorsvg216-tws.svg"
            alt="Vectorsvg216"
            className="supplier-login-vectorsvg"
          />
          <span className="supplier-login-text09">
            <span>Supplier Login</span>
          </span>
          <img
            src="/playground_assets_login/rectangle27thqexcludesvg1941-lnt.svg"
            alt="Rectangle27thqExcludesvg1941"
            className="supplier-login-rectangle27thq-excludesvg"
          />
          <span className="supplier-login-text11">
            <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
          </span>
          <img
            src="/playground_assets_login/mdiaccount1941-s0q9.svg"
            alt="mdiaccount1941"
            className="supplier-login-mdiaccount"
          />
          <div className="supplier-login-group48">
            <img
              src="/playground_assets_login/rectangle14button2068-27er-200h.png"
              alt="Rectangle14button2068"
              className="supplier-login-rectangle14button"
            />
            <span className="supplier-login-text13">
            <span><Link to="/supplierregistration">Sign Up</Link></span>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SupplierLogin
