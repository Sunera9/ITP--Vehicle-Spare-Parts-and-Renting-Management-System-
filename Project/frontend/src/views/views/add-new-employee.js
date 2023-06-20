import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './add-new-employee.css'
import { toast } from 'react-toastify'
import {registerEmployee, validateEmail} from '../services/authService'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice'


const initialState = {
  first_name : "",
  last_name: "",
  address:"",
  mobile:"",
  designation:"",
  email:"",
  joined_date:"",
  password:"",
 profile_pic:"",
}


const AddNewEmployee = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)

  //destructuring form data
  const {first_name, last_name, address, mobile, designation,email,joined_date,password,profile_pic} = formData

  const handleInputChange = (e) => {
      const {name, value} = e.target;
      setformData({...formData, [name]: value});
  };

  const register =async (e) => {
      e.preventDefault()

      if(!first_name  || !email || !password || !last_name || !designation){
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
        first_name, last_name,address,email,mobile,designation,password,profile_pic
      }

      setIsLoading(true)
      try {
        const data = await registerEmployee(userData)
        //console.log(data)
        await dispatch(SET_LOGIN(true));
        await dispatch(SET_NAME(data.first_name));
        history.push("/admin-dashboard");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
  };

  return (
    <div className="add-new-employee-container">
      <Helmet>
        <title>Shantha Motors - Add New Employee</title>
      </Helmet>
      <div className="add-new-employee-add-new-employee">
        <img
          src="/playground_assets/blurredbackground21881-40k9-1600w.png"
          alt="blurredBackground21881"
          className="add-new-employee-blurred-background2"
        />
        <div className="add-new-employee-biqrcode"></div>
        <img
          src="/playground_assets/rectangle317530-i4g-1000w.png"
          alt="Rectangle317530"
          className="add-new-employee-rectangle31"
        />
        <div className="add-new-employee-materialsymbolslocationon"></div>
        <img
          src="/playground_assets/rectangle27532-pu3q-200h.png"
          alt="Rectangle27532"
          className="add-new-employee-rectangle2"
        />
        <img
          src="/playground_assets/rectangle37533-f9xl-1100h.png"
          alt="Rectangle37533"
          className="add-new-employee-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage17534-6mbu-200h.png"
          alt="PNGLogoimage17534"
          className="add-new-employee-pn-logoimage1"
        />

 
       <img
          src="/playground_assets/rectangle327540-5zyn-200h.png"
          alt="Rectangle327540"
          className="add-new-employee-rectangle32"
        />
        <img
          src="/playground_assets/rectangle107545-ae09-200h.png"
          alt="Rectangle107545"
          className="add-new-employee-rectangle10"
        />
        <img
          src="/playground_assets/rectangle157546-8mgd-200h.png"
          alt="Rectangle157546"
          className="add-new-employee-rectangle15"
        />
        <img
          src="/playground_assets/rectangle167547-e84y-200h.png"
          alt="Rectangle167547"
          className="add-new-employee-rectangle16"
        />
        <img
          src="/playground_assets/rectangle177548-vjjh-200h.png"
          alt="Rectangle177548"
          className="add-new-employee-rectangle17"
        />
        <img
          src="/playground_assets/rectangle187549-87h-200h.png"
          alt="Rectangle187549"
          className="add-new-employee-rectangle18"
        />
        <img
          src="/playground_assets/rectangle197550-glgl-200h.png"
          alt="Rectangle197550"
          className="add-new-employee-rectangle19"
        />
        <img
          src="/playground_assets/rectangle207551-rebo-200h.png"
          alt="Rectangle207551"
          className="add-new-employee-rectangle20"
        />
        <img
          src="/playground_assets/rectangle217552-k91c-200h.png"
          alt="Rectangle217552"
          className="add-new-employee-rectangle21"
        />
        <span className="add-new-employee-text11">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
        </span>
        <span className="add-new-employee-text13">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
        </span>
        <span className="add-new-employee-text15">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Supplier</button></span>
        </span>
        <span className="add-new-employee-text17">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Rentals</button></span>
        </span>
        <span className="add-new-employee-text19">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Spare Parts</button></span>
        </span>
        <span className="add-new-employee-text21">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
        </span>
        <span className="add-new-employee-text23">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Payemnt</button></span>
        </span>
        <span className="add-new-employee-text25">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
        </span>
        <img
          src="/playground_assets/rectangle147561-5akn-200h.png"
          alt="Rectangle147561"
          className="add-new-employee-rectangle14"
        />
        <span className="add-new-employee-text27">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>
        </span>
        <button>
        <img
          src="/playground_assets/mdiaccount7563-h95.svg"
          alt="mdiaccount7563"
          className="add-new-employee-mdiaccount"
        />
        </button>
        <div className="add-new-employee-mdiaccount1">
          <div className="add-new-employee-materialsymbolspersonplay"></div>
        </div>
        <img
          src="/playground_assets/ellipse17571-6y6-300h.png"
          alt="Ellipse17571"
          className="add-new-employee-ellipse1"
        />

        <img
          src="/playground_assets/rectangle437598-5189-200h.png"
          alt="Rectangle437598"
          className="add-new-employee-rectangle43"
        />

        {/**Employee Adding Form */}
        <form  onSubmit={register}>
        <span className="add-new-employee-text">
          <span>Add New Employee</span>
        </span>
       
       <input className='add-new-employee-rectangle48input' placeholder='First Name' type="text"
               name="first_name" value={first_name} onChange={handleInputChange}
               style={{textAlign:'center', fontWeight:'bold'}}/>
       <input className='add-new-employee-rectangle47input' placeholder='Last Name' type="text" 
               name="last_name" value={last_name} onChange={handleInputChange}
               style={{textAlign:'center',fontWeight:'bold'}}/>
       <input className='add-new-employee-rectangle34input' placeholder='Permanent Address' type="text" 
               name="address" value={address} onChange={handleInputChange}
               style={{textAlign:'center',fontWeight:'bold'}}/>
       <input className='add-new-employee-rectangle46input' placeholder='Email' type="email" 
               name="email" value={email} onChange={handleInputChange}
                style={{textAlign:'center',fontWeight:'bold'}}/>
       <input className='add-new-employee-rectangle35input' placeholder='Mobile Number' type="text" 
                name="mobile" value={mobile} onChange={handleInputChange}
                style={{textAlign:'center',fontWeight:'bold'}}/>
       <input className='add-new-employee-rectangle36input' placeholder='Designation' type="text" 
               name="designation" value={designation} onChange={handleInputChange}
                style={{textAlign:'center',fontWeight:'bold'}}/>
        <input className='add-new-employee-rectangle49input' placeholder='Date' type="date"
               name="joined_date" value={joined_date} onChange={handleInputChange}
               style={{textAlign:'center',fontWeight:'bold'}}/> 
       <input className='add-new-employee-rectangle50input' placeholder='Password' type="password"
               name="password" value={password} onChange={handleInputChange}
              style={{textAlign:'center',fontWeight:'bold'}}/>
       <span className="add-new-employee-text09">
          <span>Add Photo</span>
        </span>
        <input type="file" className='add-new-employee-rectangle44' 
                name="profile_pic" value={profile_pic} onChange={handleInputChange}
                style={{textAlign:'center'}}/> 
       <span className="add-new-employee-text07">
          <span><button type="submit" style={{ color:'white' , fontWeight : 'bold'}}>Add Employee</button></span>
        </span>
        </form>
        
        <span className="add-new-employee-text29">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
      </div>
    </div>
  )
}

export default AddNewEmployee
