import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './change-paaswordcopy.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ChangeEmployeePwd } from '../services/authService'

const initialState = {
  oldPassword:"",
  password:"",
  password2:"",
}


const ChangePaaswordcopy = (props) => {

  const [formData, setformData] = useState(initialState)

  //destructuring form data
  const {oldPassword,password,password2} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
 };

 const changePass = async (e) => {
   e.preventDefault()

   if(password !== password2){
    return toast.error("New password does not match")
   }

   const formData = {
    oldPassword,
    password
   }

   const data = await ChangeEmployeePwd(formData)
   toast.success(data)
   
 }

  return (
    <div className="change-paaswordcopy-container">
      <Helmet>
        <title>Shantha Motors - Change Password</title>
      </Helmet>
      <div className="change-paaswordcopy-change-paaswordcopy">
        <img
          src="/playground_assets/blurredbackground11851-mfxm-1600w.png"
          alt="blurredBackground11851"
          className="change-paaswordcopy-blurred-background1"
        />
        <div className="change-paaswordcopy-biqrcode"></div>
        <div className="change-paaswordcopy-materialsymbolslocationon"></div>
        <img
          src="/playground_assets/rectangle21857-gge-200h.png"
          alt="Rectangle21857"
          className="change-paaswordcopy-rectangle2"
        />
        <img
          src="/playground_assets/rectangle31857-mstf-1100h.png"
          alt="Rectangle31857"
          className="change-paaswordcopy-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage11857-p6zn-200h.png"
          alt="PNGLogoimage11857"
          className="change-paaswordcopy-pn-logoimage1"
        />
        <span className="change-paaswordcopy-text">
          <span>Edit Profile</span>
        </span>
      
      
        <img
          src="/playground_assets/rectangle71858-eja-200h.png"
          alt="Rectangle71858"
          className="change-paaswordcopy-rectangle7"
        />
        <span className="change-paaswordcopy-text07">
          <span><Link to="/employee-dashboardcopy1" style={{ color:'white' , fontWeight : 'bold'}}>My Profile</Link></span>
        </span>
        <img
          src="/playground_assets/rectangle101858-2chs-200h.png"
          alt="Rectangle101858"
          className="change-paaswordcopy-rectangle10"
        />
        <img
          src="/playground_assets/rectangle151858-5kcn-200h.png"
          alt="Rectangle151858"
          className="change-paaswordcopy-rectangle15"
        />
        <img
          src="/playground_assets/rectangle161858-gc8t-200h.png"
          alt="Rectangle161858"
          className="change-paaswordcopy-rectangle16"
        />
        <img
          src="/playground_assets/rectangle171858-rem-200h.png"
          alt="Rectangle171858"
          className="change-paaswordcopy-rectangle17"
        />
        <img
          src="/playground_assets/rectangle181859-qwkn-200h.png"
          alt="Rectangle181859"
          className="change-paaswordcopy-rectangle18"
        />
        <img
          src="/playground_assets/rectangle191859-adzt-200h.png"
          alt="Rectangle191859"
          className="change-paaswordcopy-rectangle19"
        />
        <img
          src="/playground_assets/rectangle201859-3mj-200h.png"
          alt="Rectangle201859"
          className="change-paaswordcopy-rectangle20"
        />
        <img
          src="/playground_assets/rectangle211859-h7qe-200h.png"
          alt="Rectangle211859"
          className="change-paaswordcopy-rectangle21"
        />
        <span className="change-paaswordcopy-text09">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
        </span>
        <span className="change-paaswordcopy-text11">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
        </span>
        <span className="change-paaswordcopy-text13">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Supplier</button></span>
        </span>
        <span className="change-paaswordcopy-text15">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Rentals</button></span>
        </span>
        <span className="change-paaswordcopy-text17">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Spare Parts</button></span>
        </span>
        <span className="change-paaswordcopy-text19">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
        </span>
        <span className="change-paaswordcopy-text21">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payemnt</button></span>
        </span>
        <span className="change-paaswordcopy-text23">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
        </span>
        <img
          src="/playground_assets/rectangle141851-7lle-200h.png"
          alt="Rectangle141851"
          className="change-paaswordcopy-rectangle14"
        />
        <span className="change-paaswordcopy-text25">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount1851-823o.svg"
          alt="mdiaccount1851"
          className="change-paaswordcopy-mdiaccount"
        />
        <div className="change-paaswordcopy-mdiaccount1">
          <div className="change-paaswordcopy-materialsymbolspersonplay"></div>
        </div>
        <img
          src="/playground_assets/rectangle531881-zcnw-600w.png"
          alt="Rectangle531881"
          className="change-paaswordcopy-rectangle53"
        />
        <form onSubmit={changePass}>
        <span className="change-paaswordcopy-text27">
          <span>Enter Old Password</span>
        </span>
        <input className='change-paaswordcopy-rectangle36buttoninput'  type="password" 
               name="oldPassword" value={oldPassword}  onChange={handleInputChange}
               style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="change-paaswordcopy-text29">
          <span>Enter New Password</span>
        </span>
        <input className='change-paaswordcopy-rectangle33input'  type="password" 
                name="password"  value={password} onChange={handleInputChange}
                style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="change-paaswordcopy-text31">
          <span>Confirm New Password</span>
        </span>
        <input className='change-paaswordcopy-rectangle34input'  type="password" 
              name="password2" value={password2} onChange={handleInputChange} 
              style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="change-paaswordcopy-text33">
          <span>Change Password</span>
        </span>
        <img
          src="/playground_assets/rectangle321858-72p-200h.png"
          alt="Rectangle321858"
          className="change-paaswordcopy-rectangle32"
        />
        <span className="change-paaswordcopy-text35">
          <span><button type="submit" style={{ color:'white' , fontWeight : 'bold'}}>Save Changes</button></span>
        </span>
        </form>
      </div>
    </div>
  )
}

export default ChangePaaswordcopy
