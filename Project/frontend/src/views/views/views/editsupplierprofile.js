import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './editsupplierprofile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/features/auth/supplySlice'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateSupplier } from '../services/supplierService'


const Editsupplierprofile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const user = useSelector(selectUser)

  const initialState = {
    company_name: user?.company_name,
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    mobile: user?.mobile,
    company_address: user?.company_address,
  }

  const [profile, setProfile] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try{ {
       // Save Profile
       const formdata = {
        company_name:profile.company_name,
        first_name:profile.first_name,
        last_name:profile.last_name,
        email:profile.email,
        mobile:profile.mobile,
        company_address:profile.company_address,
      };

      const data = await updateUser(formData);
      console.log(data);
      toast.success("User updated");
      navigate("/profile");
      setIsLoading(false);
    }

    }catch(error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }

  };

  
  return (
    <div className="editsupplierprofile-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="editsupplierprofile-editsupplierprofile">
        <img
          src="/playground_assets_editSupplier/sparekade1svg2063-9zs-900h.png"
          alt="sparekade1svg2063"
          className="editsupplierprofile-sparekade1svg"
        />
        <img
          src="/playground_assets_editSupplier/pnglogoimage1svg2064-61pi-200h.png"
          alt="PNGLogoimage1svg2064"
          className="editsupplierprofile-pn-logoimage1svg"
        />
        <img
          src="/playground_assets_editSupplier/rectangle27svg2064-qeej.svg"
          alt="Rectangle27svg2064"
          className="editsupplierprofile-rectangle27svg"
        />
        <span className="editsupplierprofile-text">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        <img
          src="/playground_assets_editSupplier/rectangle49thqexcludesvg2064-v1cre-700w.png"
          alt="Rectangle49thqExcludesvg2064"
          className="editsupplierprofile-rectangle49thq-excludesvg"
        />

        <form onSubmit={saveProfile}>
          <div className="editsupplierprofile-group48">
            <img
              src="/playground_assets_editSupplier/rectangle38input2065-ivrh-200h.png"
              alt="Rectangle38input2065"
              className="editsupplierprofile-rectangle38input"
            />
            <input className='editsupplierprofile-rectangle38input' type="text"
              name="first_name"
              placeholder="First Name"
              value={profile.first_name}
              onChange={handleInputChange}
              style={{ textAlign: 'center', fontWeight: 'bold' }} />


            <img
              src="/playground_assets_editSupplier/rectangle40input2065-shj-200h.png"
              alt="Rectangle40input2065"
              className="editsupplierprofile-rectangle40input"
            />
            <input className='"editsupplierprofile-rectangle40input' type="text" 
               name="mobile"  placeholder="Mobile no" value={profile.mobile}  
               onChange={handleInputChange} 
               style={{textAlign:'center', fontWeight:'bold'}}/>


            <img
              src="/playground_assets_editSupplier/rectangle48input2065-8sbt-200h.png"
              alt="Rectangle48input2065"
              className="editsupplierprofile-rectangle48input"
            />
            <input className='editsupplierprofile-rectangle48input' type="text" 
               name="company_address" value={profile.company_address}  
               onChange={handleInputChange} 
               style={{textAlign:'center', fontWeight:'bold'}}/>


            <img
              src="/playground_assets_editSupplier/rectangle41input2065-vjgk-200h.png"
              alt="Rectangle41input2065"
              className="editsupplierprofile-rectangle41input"
            />
           


            <img
              src="/playground_assets_editSupplier/rectangle44input2065-zbqn-200h.png"
              alt="Rectangle44input2065"
              className="editsupplierprofile-rectangle44input"
            />
            <input className='editsupplierprofile-rectangle44input' type="text"
              name="last_name" value={profile.last_name}
              onChange={handleInputChange}
              style={{ textAlign: 'center', fontWeight: 'bold' }} />


            <img
              src="/playground_assets_editSupplier/rectangle45input2065-x9z-200h.png"
              alt="Rectangle45input2065"
              className="editsupplierprofile-rectangle45input"
            />
            <input className='editsupplierprofile-rectangle45input' type="text"
              name="email" value={profile.email} disabled
              style={{ textAlign: 'center', fontWeight: 'bold' }} />


            <img
              src="/playground_assets_editSupplier/rectangle50input2065-vz4r-200h.png"
              alt="Rectangle50input2065"
              className="editsupplierprofile-rectangle50input"
            />
            


          </div>
          <span className="editsupplierprofile-text02">
            <span>Edit Profile</span>
          </span>
          <div className="editsupplierprofile-group49">
            <span className="editsupplierprofile-text04">
              <span>
                Company Address
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="editsupplierprofile-text06">
              <span>Supplying items</span>
            </span>
            <span className="editsupplierprofile-text08">
              <span>
                Full Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="editsupplierprofile-text10">
              <span>
                Email
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="editsupplierprofile-text12">
              <span>
                {' '}
                Company Name
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="editsupplierprofile-text14">
              <span>Supplier</span>
            </span>
            <span className="editsupplierprofile-text16">
              <span>
                Phone number
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="editsupplierprofile-group51">
            <span className="editsupplierprofile-text18">:</span>
            <span className="editsupplierprofile-text19">:</span>
            <span className="editsupplierprofile-text20">:</span>
            <span className="editsupplierprofile-text21">:</span>
            <span className="editsupplierprofile-text22">:</span>
            <span className="editsupplierprofile-text23">:</span>
            <span className="editsupplierprofile-text24">:</span>
          </div>
          <div className="editsupplierprofile-group10">
            <span className="editsupplierprofile-text25">
              <span>Item Unit Prices</span>
            </span>
          </div>
          <div className="editsupplierprofile-group12">
            <img
              src="/playground_assets_editSupplier/rectangle25button2064-9j0k-200h.png"
              alt="Rectangle25button2064"
              className="editsupplierprofile-rectangle25button"
            />
            <span className="editsupplierprofile-text27">
            <span><button  style={{ color:'white' , fontWeight : 'bold'}}>Update</button></span>
            </span>
          </div>
   
          <img
            src="/playground_assets_editSupplier/vectorbutton2134-6z1p.svg"
            alt="Vectorbutton2134"
            className="editsupplierprofile-vectorbutton"
          />
        </form>
      </div>
    </div>
  )
}

export default Editsupplierprofile
