import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './employee-updatecopy1.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/features/auth/authSlice'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateEmployee } from '../services/authService'

const EmployeeUpdatecopy1 = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const user = useSelector(selectUser)
 
  const initialState = {
    first_name: user?.first_name,
    last_name:user?.last_name,
    address:user?.address,
    mobile:user?.mobile,
    designation:user?.designation,
    email:user?.email,
    profile_pic:user?.profile_pic,
  }

  
  const [profile, setProfile] = useState(initialState)
  const [profileImage, setProfileImage] = useState("")


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProfile({...profile, [name]: value});
  };

  //handling image change
  const handleImgaeChange = (e) => {
       setProfileImage(e.target.files[0])
  };

  const saveProfile = async (e) => {
    e.preventDefault()
    
     setIsLoading(true)
     try {
      //handle image upload
      let imageURL;
      if(
        profileImage && 
        (
          profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png"
        )
      ){
        const image = new FormData()
        image.append("file", profileImage)
        image.append("cloud_name", "dxhbaz7jl")
        image.append("upload_preset", "u4ostmj4")

        //save image to cloudinary
        const response = await fetch("https://api.cloudinary.com/v1_1/dxhbaz7jl/image/upload",
                                       {method:"post" , body : image} ); 
       
        const imgData = await response.json()
        imageURL = imgData.url.toString()
      }
        //save profile
        const formdata = {
               first_name:profile.first_name,
               last_name:profile.last_name,
               address:profile.address,
               mobile:profile.mobile,
               designation:profile.designation,
               email:profile.email,
               profile_pic: profileImage ? imageURL : profile.profile_pic
        }
      
       const data = await updateEmployee(formdata)
       console.log(data)
       toast.success("User Updated")
       history.push("/employee-dashboardcopy1")

       setIsLoading(false)
      
      
     } catch (error) {
        console.log(error)
         setIsLoading(false)
         toast.error(error.message)
     }

  };

  console.log(profile)

  return (
    <div className="employee-updatecopy1-container">
      <Helmet>
        <title>Shantha Motors - Update Employee </title>
      </Helmet>
      <div className="employee-updatecopy1-employee-updatecopy1">
        <img
          src="/playground_assets/blurredbackground21856-rq78-1600w.png"
          alt="blurredBackground21856"
          className="employee-updatecopy1-blurred-background2"
        />
        <img
          src="/playground_assets/rectangle511851-ne0x-200h.png"
          alt="Rectangle511851"
          className="employee-updatecopy1-rectangle51"
        />
        <div className="employee-updatecopy1-biqrcode"></div>
        <div className="employee-updatecopy1-materialsymbolslocationon"></div>
        <img
          src="/playground_assets/rectangle21859-s7hf-200h.png"
          alt="Rectangle21859"
          className="employee-updatecopy1-rectangle2"
        />
        <img
          src="/playground_assets/rectangle31851-a5fs-1100h.png"
          alt="Rectangle31851"
          className="employee-updatecopy1-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage11851-kpq-200h.png"
          alt="PNGLogoimage11851"
          className="employee-updatecopy1-pn-logoimage1"
        />
        <span className="employee-updatecopy1-text">
          <span>EDIT PROFILE</span>
        </span>
       
       
        <img
          src="/playground_assets/rectangle71851-zoy-200h.png"
          alt="Rectangle71851"
          className="employee-updatecopy1-rectangle7"
        />
        <span className="employee-updatecopy1-text07">
          <span><Link to="/change-paaswordcopy">Change Password</Link></span>
        </span>
        <img
          src="/playground_assets/rectangle101852-95ne-200h.png"
          alt="Rectangle101852"
          className="employee-updatecopy1-rectangle10"
        />
        <img
          src="/playground_assets/rectangle151852-0v3-200h.png"
          alt="Rectangle151852"
          className="employee-updatecopy1-rectangle15"
        />
        <img
          src="/playground_assets/rectangle161852-ps9-200h.png"
          alt="Rectangle161852"
          className="employee-updatecopy1-rectangle16"
        />
        <img
          src="/playground_assets/rectangle171852-uiho-200h.png"
          alt="Rectangle171852"
          className="employee-updatecopy1-rectangle17"
        />
        <img
          src="/playground_assets/rectangle181852-7nk-200h.png"
          alt="Rectangle181852"
          className="employee-updatecopy1-rectangle18"
        />
        <img
          src="/playground_assets/rectangle191852-7p1-200h.png"
          alt="Rectangle191852"
          className="employee-updatecopy1-rectangle19"
        />
        <img
          src="/playground_assets/rectangle201852-vjhe-200h.png"
          alt="Rectangle201852"
          className="employee-updatecopy1-rectangle20"
        />
        <img
          src="/playground_assets/rectangle211852-ox7t-200h.png"
          alt="Rectangle211852"
          className="employee-updatecopy1-rectangle21"
        />
        <span className="employee-updatecopy1-text09">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
        </span>
        <span className="employee-updatecopy1-text11">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
        </span>
        <span className="employee-updatecopy1-text13">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Supplier</button></span>
        </span>
        <span className="employee-updatecopy1-text15">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Rentals</button></span>
        </span>
        <span className="employee-updatecopy1-text17">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Spare Parts</button></span>
        </span>
        <span className="employee-updatecopy1-text19">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
        </span>
        <span className="employee-updatecopy1-text21">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payemnt</button></span>
        </span>
        <span className="employee-updatecopy1-text23">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
        </span>
        <img
          src="/playground_assets/rectangle141853-xp1k-200h.png"
          alt="Rectangle141853"
          className="employee-updatecopy1-rectangle14"
        />
        <span className="employee-updatecopy1-text25">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>
        </span>
        <button>
        <img
          src="/playground_assets/mdiaccount1853-rn3r.svg"
          alt="mdiaccount1853"
          className="employee-updatecopy1-mdiaccount"
        />
        </button>
        <div className="employee-updatecopy1-mdiaccount1">
          <div className="employee-updatecopy1-materialsymbolspersonplay"></div>
        </div>
        <img
          src="/playground_assets/rectangle521851-e11-600h.png"
          alt="Rectangle521851"
          className="employee-updatecopy1-rectangle52"
        />
        {/** "/playground_assets/ellipse11854-uokg-200h.png"*/}
        <img
          src={user?.profile_pic}
          alt="profille_pic"
          className="employee-updatecopy1-ellipse1"
        />
      <img
          src="/playground_assets/materialsymbolsphotocameraoutline1855-ks6j.svg"
          alt="materialsymbolsphotocameraoutline1855"
          className="employee-updatecopy1-materialsymbolsphotocameraoutline"
        />
        <img
          src="/playground_assets/rectangle381854-x8i-200h.png"
          alt="Rectangle381854"
          className="employee-updatecopy1-rectangle38"
        />
        <img
          src="/playground_assets/rectangle391854-tql9-200h.png"
          alt="Rectangle391854"
          className="employee-updatecopy1-rectangle39"
        />
        <img
          src="/playground_assets/rectangle401854-c8j-200h.png"
          alt="Rectangle401854"
          className="employee-updatecopy1-rectangle40"
        />
        <img
          src="/playground_assets/rectangle411854-vqbn-200h.png"
          alt="Rectangle411854"
          className="employee-updatecopy1-rectangle41"
        />
        <img
          src="/playground_assets/rectangle421854-xx4o-200h.png"
          alt="Rectangle421854"
          className="employee-updatecopy1-rectangle42"
        />
        <form onSubmit={saveProfile}>
        <input type="file" className='employee-updatecopy1-materialsymbolsphotocameraoutlinefile'
                name="profile_pic" 
                onChange={handleImgaeChange} 
                style={{textAlign:'center'}}/>
        <span className="employee-updatecopy1-text37">
          <span>First Name</span>
        </span>
        <input className='employee-updatecopy1-rectangle36input' type="text" 
                  name="first_name"
                  placeholder="First Name"
                  value={profile.first_name}
                  onChange={handleInputChange}
                 style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="employee-updatecopy1-text39">
          <span>Last Name</span>
        </span>
        <input className='employee-updatecopy1-rectangle33input' type="text" 
                name="last_name" value={profile.last_name} 
                onChange={handleInputChange}
                style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="employee-updatecopy1-text41">
          <span>Email</span>
        </span>
        <input className='employee-updatecopy1-rectangle35input'  type="text"
               name="email" value={profile.email} disabled
               style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="employee-updatecopy1-text43">
          <span>Mobile</span>
        </span>
        <input className='employee-updatecopy1-rectangle37input' type="text" 
               name="mobile" value={profile.mobile}  
               onChange={handleInputChange} 
               style={{textAlign:'center', fontWeight:'bold'}}/>
        <span className="employee-updatecopy1-text45">
          <span>Address</span>
        </span>
        <input className='employee-updatecopy1-rectangle34input' type="text" 
               name="address" value={profile.address}
               onChange={handleInputChange}
               style={{textAlign:'center', fontWeight:'bold'}}/>
        <img
          src="/playground_assets/rectangle321851-m0sc-200h.png"
          alt="Rectangle321851"
          className="employee-updatecopy1-rectangle32"
        />
        <span className="employee-updatecopy1-text47">
          <span><button  style={{ color:'white' , fontWeight : 'bold'}}>Update</button></span>
        </span>
        </form>
      </div>
    </div>
  )
}

export default EmployeeUpdatecopy1
