import React from "react";
import styles from "../components/ShippingUpdate.module.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'

function ShippingAddForm(props){
  const navigate = useHistory()
  const loadNext = ()=>navigate.push("/Shipping")
  return(
    <form method="post" onSubmit={(e)=>handleSubmit(e,loadNext)}>
      <div className={styles.component12}>
        <div className={styles.relativeWrapperOne}>
          
          <p className={styles.accountPaymentOptions}>
            Account &gt; Shipping Addresses
          </p>
          
          <p className={styles.myPaymentOptions}>
            My Shipping Addresses
          </p>
          <p className={styles.editShippingAddress}>
            Edit Shipping Address        </p>

        </div>
        <div className={styles.nameRow1}>
          <div className={styles.frame23}>
            <p className={styles.bankName}>Name</p>
          </div>   
          <div className={styles.frame28}>
            <p className={styles.phoneNumber}>Phone Number</p>
          </div>
        </div>

        <div className={styles.feildRow}>
          <input type="text" name="name" placeholder="Name" className={styles.frame26}/>         
          <input type="text" name="phone" placeholder="Phone Number" className={styles.frame27}/>        
        </div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Address</p>
          </div>    
        </div>

        <div className={styles.feildRow2}>      
          <input type="text" name="address" placeholder="Address" className={styles.frame24Two}/>  
        </div>

        <div className={styles.buttons}>
          <div className={styles.relativeWrapperNine}>  
            <button className={styles.flexWrapperThree}>
              <p className={styles.updateThree}>Insert</p>
            </button>
          </div>

          <div className={styles.relativeWrapperNine}>  
            <button className={styles.flexWrapperThree} onClick={(e)=>{
              e.preventDefault()
              loadNext()
            }}>
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div> 
        </div>
      </div>
    </form>
  )
}
function handleSubmit(event,navigater){
    event.preventDefault()
    const {address, phone, name} = event.target

    const mobileNoRegex = /^[0][0-9]{9}$/;
    let isValidated = true;
    if (name.value.trim() === '') {
      toast.error("Enter name");
      isValidated = false;
    }
    if (phone.value.trim() === '') {
      toast.error("Enter phone number");
      isValidated = false;
    }else if(!mobileNoRegex.test(phone.value)){
      toast.error("Invalid phone number");
      isValidated = false;
    }
    if (address.value.trim() === '') {
      toast.error("Enter address");
      isValidated = false;
    }

    if (isValidated){
      let addressInfo = {
        address : address.value,
        phone : phone.value,
        name : name.value
      }
      axios.post("http://localhost:5000/addresses/addAddress",addressInfo).then((response)=>{
          console.log(response)
          navigater()
      })
    }
    
}
export default ShippingAddForm;
