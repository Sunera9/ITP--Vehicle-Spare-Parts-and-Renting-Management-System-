import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './new-supplier-applicationform.css'
import { toast } from 'react-toastify'
import { newSuppierForm } from '../services/supplierService'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import {  SET_LOGIN, SET_NAME } from '../redux/features/auth/supplySlice'

const initialState = {
  full_name : "",
  availableItemList : "",
  unit_prices : "",
  Quality_description : "",
}


const NewSupplierApplicationform = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setformData] = useState(initialState)

    //destructuring form data
  const {full_name, availableItemList, unit_prices, Quality_description } = formData 

   const handleInputChange = (e) => {
     const {name, value} = e.target; 
     setformData({...formData, [name]: value});
   };

   const application = async (e) => {
     e.preventDefault()

    // if(!full_name  || !unit_prices || !Quality_description){
     //   return toast.error("All feilds are required")
    // }

     const userData = {
      full_name, availableItemList, unit_prices, Quality_description
     }
      
     setIsLoading(true)
     try {
      const data = await newSuppierForm(userData)
      console.log(data)
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.full_name));
      history.push("/supplier-profile2");
      setIsLoading(false);
     
    }catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
   };


  return (
    <div className="new-supplier-applicationform-container">
      <Helmet>
        <title>Shantha Motors®-new Supplier applicationform</title>
      </Helmet>
      <div className="new-supplier-applicationform-new-supplier-applicationform">
        <img
          src="/playground_assets_newform/pnglogoimage1svg3063-hzer-200h.png"
          alt="PNGLogoimage1svg3063"
          className="new-supplier-applicationform-pn-logoimage1svg"
        />

        {/*new supplier application form */}
        <form onSubmit={application}>
          <span className="new-supplier-applicationform-text88">
          </span>

        <img
          src="/playground_assets_newform/rectangle27svg3063-u7mh.svg"
          alt="Rectangle27svg3063"
          className="new-supplier-applicationform-rectangle27svg"
        />
        <span className="new-supplier-applicationform-text">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        <img
          src="/playground_assets_newform/rectangle29svg3064-8udc-600w.png"
          alt="Rectangle29svg3064"
          className="new-supplier-applicationform-rectangle29svg"
        />
    
        
        <input className='new-supplier-applicationform-rectangle23input' 
        placeholder='Available items in supplier store according to the Email'  
        type="text" name="availableItemList" value= {availableItemList}  
        onChange={handleInputChange}
        style={{ textAlign: 'center' }} />

        <div className="new-supplier-applicationform-group17">
          <img
            src="/playground_assets_newform/rectangle23input3064-2zj-200h.png"
            alt="Rectangle23input3064"
            className="new-supplier-applicationform-rectangle23input1"
          />
       
          <img
            src="/playground_assets_newform/rectangle33input3064-a40n-200h.png"
            alt="Rectangle33input3064"
            className="new-supplier-applicationform-rectangle33input"
          />
          <img
            src="/playground_assets_newform/rectangle46input3268-uou-200h.png"
            alt="Rectangle46input3268"
            className="new-supplier-applicationform-rectangle46input"
          />

           <input className='new-supplier-applicationform-rectangle23input1' placeholder='Supplier Full Name' type="text"
             name="full_name" value= {full_name}  onChange={handleInputChange}
            style={{ textAlign: 'center' }} />
    
             <input className='new-supplier-applicationform-rectangle33input' placeholder='Unit prices of above' type='number' 
             name="unit_prices" value= {unit_prices}  onChange={handleInputChange}
            style={{ textAlign: 'center' }} />
             <input className='new-supplier-applicationform-rectangle46input' placeholder='Description in short' type="text" 
             name="Quality_description" value= {Quality_description}  onChange={handleInputChange}
            style={{ textAlign: 'center' }} />

        </div>
        <div className="new-supplier-applicationform-group16">
          <span className="new-supplier-applicationform-text02">
            <span>List of Items Avaialable:</span>
          </span>
          <span className="new-supplier-applicationform-text04">
            <span>Supplier Full Name:</span>
          </span>
          <span className="new-supplier-applicationform-text06">
            <span>Quality description of the aforementioned items :</span>
          </span>
          <span className="new-supplier-applicationform-text08">
            <span>Unit Prices of the aforementioned available items :</span>
          </span>
        </div>
        <span className="new-supplier-applicationform-text10">
          <span>New Supplier Application form</span>
        </span>

        <div className="new-supplier-applicationform-group15">
          <img
            src="/playground_assets_newform/rectangle29button3066-pulj-200h.png"
            alt="Rectangle29button3066"
            className="new-supplier-applicationform-rectangle29button"
          />
          <span className="new-supplier-applicationform-text12">
            <span><button type="submit" style={{ color: 'white',fontWeight: 'bold',textAlign:'center' }}> Submit </button></span>
          </span>
        </div>
        <div className="new-supplier-applicationform-group46">
          <img
            src="/playground_assets_newform/rectangle14button1941-gxm3-200h.png"
            alt="Rectangle14button1941"
            className="new-supplier-applicationform-rectangle14button"
          />
          <span className="new-supplier-applicationform-text14">
            <span>Log Out</span>
          </span>
        </div>
        <img
          src="/playground_assets_newform/mdiaccount1941-ltbn.svg"
          alt="mdiaccount1941"
          className="new-supplier-applicationform-mdiaccount"
        />



        </form>
      </div>
    </div>
  )
}

export default NewSupplierApplicationform
