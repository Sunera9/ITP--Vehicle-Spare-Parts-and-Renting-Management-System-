import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './supplierregistration.css'
import { toast } from 'react-toastify'
import { registerSupplier, validateEmail } from '../services/supplierService'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/supplySlice'

const initialState = { 
  company_name : "",
  first_name : "",
  last_name : "",
  email : "",
  mobile : "", 
  company_address : "",
  password : "",                     
  
}  

const Supplierregistration = (props) => { 
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)



  //destructuring form data
  const {company_name, first_name, last_name, email, mobile, company_address, password } = formData 

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
  };

  const register = async (e) => {
    e.preventDefault()
  
    if(!company_name || !email || !password){
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
      company_name, first_name, last_name, email, mobile, company_address, password 
    }

    setIsLoading(true)
    try {
      const data = await registerSupplier(userData)
      console.log(data)
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.company_name));
      history.push("/supplier-profile2");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
};
  


  return (
    <div className="supplierregistration-container">
      <Helmet>
        <title>Shantha Motors®- Sign Up</title>
      </Helmet>
      <div className="supplierregistration-supplierregistration">
        <img
          src="/playground_assets_register/rectangle49thqexcludesvg6767-ncmb-700w.png"
          alt="Rectangle49thqExcludesvg6767"
          className="supplierregistration-rectangle49thq-excludesvg"
        />
        <img
          src="/playground_assets_register/pnglogoimage1thqexcludesvg531-0wcc-200h.png"
          alt="PNGLogoimage1thqExcludesvg531"
          className="supplierregistration-pn-logoimage1thq-excludesvg"
        />
        <div className="supplierregistration-group5">
          <img
            src="/playground_assets_register/rectangle27thqexcludesvg529-c7s8.svg"
            alt="Rectangle27thqExcludesvg529"
            className="supplierregistration-rectangle27thq-excludesvg"
          />
          <span className="supplierregistration-text">
            Copyright ©2023 Shantha Motors®. All rights reserved.
          </span>
        </div>

        {/*Sign up form */}
        <form onSubmit={register}>
          <span className="supplierregistration-text88">
          </span>

          <div className="supplierregistration-group4">
            <img
              src="/playground_assets_register/rectangle38input6744-sm4g-200h.png"
              alt="Rectangle38input6744"
              className="supplierregistration-rectangle38input"
            />
            <img
              src="/playground_assets_register/rectangle40input6746-s5ms-200h.png"
              alt="Rectangle40input6746"
              className="supplierregistration-rectangle40input"
            />
            <img
              src="/playground_assets_register/rectangle48input6768-rq4-200h.png"
              alt="Rectangle48input6768"
              className="supplierregistration-rectangle48input"
            />
            <img
              src="/playground_assets_register/rectangle41input6747-41gk-200h.png"
              alt="Rectangle41input6747"
              className="supplierregistration-rectangle41input"
            />
            <img
              src="/playground_assets_register/rectangle44input6750-h55-200h.png"
              alt="Rectangle44input6750"
              className="supplierregistration-rectangle44input"
            />
            

            <img
              src="/playground_assets_register/rectangle45input6751-4asm-200h.png"
              alt="Rectangle45input6751"
              className="supplierregistration-rectangle45input"
            />
            <img
              src="/playground_assets_register/rectangle46input6752-h0z-200h.png"
              alt="Rectangle46input6752"
              className="supplierregistration-rectangle46input"
            />
      


              <input className='supplierregistration-rectangle38input' placeholder='Company name' type="text" name="company_name" value={company_name}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} /> 
            <input className='supplierregistration-rectangle44input' placeholder='Supplier First name' type="text" name="first_name" value= {first_name}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} /> 
            <input className='supplierregistration-rectangle45input' placeholder='Supplier Last name' type="text" name="last_name"  value= {last_name}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} />
            <input className='supplierregistration-rectangle40input' placeholder='Email' type="email" name="email" value= {email}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} />
            <input className='supplierregistration-rectangle48input' placeholder='Contact number' type="number" name="mobile" value= {mobile}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} /> 
            <input className='supplierregistration-rectangle41input' placeholder='Company Address' type="text" name="company_address" value= {company_address}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} />
            <input className='supplierregistration-rectangle46input' placeholder='Enter a password' type="password" name="password" value= {password}  onChange={handleInputChange}
              style={{ textAlign: 'center' }} />
        


          </div>
          <span className="supplierregistration-text01">
            <span>Sign Up</span>
          </span>
          <div className="supplierregistration-group2">
            <span className="supplierregistration-text03">
              <span>
                Password
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
           
            <span className="supplierregistration-text07">
              <span>
                Phone Number
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="supplierregistration-text09">
              <span>Company Address</span>
            </span>
            <span className="supplierregistration-text11">
              <span>
                First Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="supplierregistration-text13">
              <span>
                Last Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="supplierregistration-text15">
              <span>
                Supplier Company Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="supplierregistration-text17">
              <span>Supplier</span>
            </span>
            <span className="supplierregistration-text19">
              <span>
                Email
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="supplierregistration-group3">
            <img
              src="/playground_assets_register/rectangle47button6765-crkc-200h.png"
              alt="Rectangle47button6765"
              className="supplierregistration-rectangle47button"
            />
            <span className="supplierregistration-text21">
              <span><button type="submit" style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Sign Up </button></span>
            </span>
          </div>
          <div className="supplierregistration-group1">
            <span className="supplierregistration-text23">:</span>
            <span className="supplierregistration-text24">:</span>
            <span className="supplierregistration-text26">:</span>
            <span className="supplierregistration-text27">:</span>
            <span className="supplierregistration-text28">:</span>
            <span className="supplierregistration-text29">:</span>
            <span className="supplierregistration-text30">:</span>
          </div>

          <div className="supplierregistration-group47">
            <img
              src="/playground_assets_register/rectangle14button1941-mufh-200h.png"
              alt="Rectangle14button1941"
              className="supplierregistration-rectangle14button"
            />
            <span className="supplierregistration-text31">
               <span><Link to="/supplier-login">Log In</Link></span>
            </span>
          </div>
          <img
            src="/playground_assets_register/mdiaccount1941-87m.svg"
            alt="mdiaccount1941"
            className="supplierregistration-mdiaccount"
          />
        </form>
      </div>
    </div>
  )
}

export default Supplierregistration
