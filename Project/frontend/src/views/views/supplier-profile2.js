import React from 'react'

import { Helmet } from 'react-helmet'
import sCard from "./sCard"

import './supplier-profile2.css'
import { getSupplier, logoutSupplier } from '../services/supplierService'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOGIN, selectName } from '../redux/features/auth/supplySlice'
import { Link, useHistory } from 'react-router-dom'
import { SET_USER } from '../redux/features/auth/supplySlice'
import { SET_NAME } from '../redux/features/auth/supplySlice'
import { useState } from 'react'
import { useEffect } from 'react'


const SupplierProfile2 = ()  => {

   const dispatch = useDispatch();
   const history = useHistory();
   const name = useSelector(selectName)

     const logout = async () => {
           await logoutSupplier();
           await dispatch(SET_LOGIN(false));
           history.push("/supplier-login");
      }

//Getting profile

 const [profile, setProfile] = useState(null)
 const [isLoading, setIsLoading] = useState(false)


 useEffect(() => {
  console.log("Getting use");
  setIsLoading(true)

  async function getSupplierData() {
    const data = await getSupplier()
    console.log(data);

     setProfile(data)
     setIsLoading(false)
     await dispatch(SET_USER(data))
     await dispatch(SET_NAME(data.name))
  }
    getSupplierData();

 }, [dispatch]);



  return (
    <div className="supplier-profile2-container">
      <Helmet>
        <title>Shantha Motors®- Supplier Profile</title>
      </Helmet>
      <div className="supplier-profile2-supplier-profile2">
        
       {/* <img
          src="/playground_assets_profile2/sparekade1svg2063-z46-900h.png"
          alt="sparekade1svg2063"
          className="supplier-profile2-sparekade1svg" 
        />  */}
        <img
          src="/playground_assets_profile2/pnglogoimage1svg2064-0dg3-200h.png"
          alt="PNGLogoimage1svg2064"
          className="supplier-profile2-pn-logoimage1svg"
        />
        <img
          src="/playground_assets_profile2/rectangle27svg2064-yoq.svg"
          alt="Rectangle27svg2064"
          className="supplier-profile2-rectangle27svg"
        />
        <span className="supplier-profile2-text">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
   {/*    <img
          src="/playground_assets_profile2/rectangle49thqexcludesvg2064-5qo-700w.png"
          alt="Rectangle49thqExcludesvg2064"
          className="supplier-profile2-rectangle49thq-excludesvg" 
        /> */} 
 

 <sCard cardClass={"card --flex-dir-column"}>

 <span className="profile-data">
            <div></div>  <p>
                <b>Company Name : </b> {profile?.company_name}
              </p>
              <p>
                <b>Full Name : </b> {profile?.first_name} {profile?.last_name}
              </p>
              <p>
                <b>Email : </b> {profile?.email}
              </p>
              <p>
                <b>Phone Number : </b> {profile?.mobile}
              </p>
              <p>
                <b>Company Address : </b> {profile?.company_address}
              </p>
              

             
            </span>
          </sCard>  

{/* 

        <div className="supplier-profile2-group48">
          <img
      //      src="/playground_assets_profile2/rectangle38input2065-xddh-200h.png"
      //      alt="Rectangle38input2065"
      //      className="supplier-profile2-rectangle38input"
          />
          <span>{profile?.company_name}</span>

          <img
            src="/playground_assets_profile2/rectangle40input2065-azfs-200h.png"
            alt="Rectangle40input2065"
            className="supplier-profile2-rectangle40input"
          />
         <span>{profile?.mobile}</span>


          <img
           src="/playground_assets_profile2/rectangle48input2065-4epf-200h.png"
           alt="Rectangle48input2065"
           className="supplier-profile2-rectangle48input"
          /> 
          <span>{profile?.company_address}</span>


          <img
            src="/playground_assets_profile2/rectangle41input2065-pdhr-200h.png"
            alt="Rectangle41input2065"
            className="supplier-profile2-rectangle41input"
          />
          <img
            src="/playground_assets_profile2/rectangle44input2065-l86m-200h.png"
            alt="Rectangle44input2065"
            className="supplier-profile2-rectangle44input"
          />
          <span>{profile?.first_name} {profile?.last_name}</span>
        

          <img
            src="/playground_assets_profile2/rectangle45input2065-pjdc-200h.png"
            alt="Rectangle45input2065"
            className="supplier-profile2-rectangle45input"
          />
          <span>{profile?.email}</span>


          <img
            src="/playground_assets_profile2/rectangle50input2065-uxll-200h.png"
            alt="Rectangle50input2065"
            className="supplier-profile2-rectangle50input"
          />
        </div>
        <span className="supplier-profile2-text02">
          <span>Supplier Profile</span>
        </span>
        <div className="supplier-profile2-group49">
          <span className="supplier-profile2-text04">
            <span>
              Company Address
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="supplier-profile2-text06">
            <span>Supplying Items</span>
          </span>
          <span className="supplier-profile2-text08">
            <span>
              Full Name
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="supplier-profile2-text10">
            <span>
              Email
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="supplier-profile2-text12">
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
          <span className="supplier-profile2-text14">
            <span>Supplier</span>
          </span>
          <span className="supplier-profile2-text16">
            <span>
              Phone Number
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
          <div className="supplier-profile2-group51">
          <span className="supplier-profile2-text18">:</span>
          <span className="supplier-profile2-text19">:</span>
          <span className="supplier-profile2-text20">:</span>
          <span className="supplier-profile2-text21">:</span>
          <span className="supplier-profile2-text22">:</span>
          <span className="supplier-profile2-text23">:</span>
          <span className="supplier-profile2-text24">:</span>
        </div>
        <div className="supplier-profile2-group10">
          <span className="supplier-profile2-text25">
            <span>Item Unit Prices</span>
          </span>
        </div>



      */}



       
        <img
          src="/playground_assets_profile2/rectangle14button2132-xj9a-200h.png"
          alt="Rectangle14button2132"
          className="supplier-profile2-rectangle14button"
        />
        <span className="supplier-profile2-text29">
        <span><button onClick={logout} style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>     
        </span>
        <img
          src="/playground_assets_profile2/vectorbutton2134-6bu.svg"
          alt="Vectorbutton2134"
          className="supplier-profile2-vectorbutton"
        />
      </div>
    </div>
  )
}

export default SupplierProfile2
