import React, { useState } from "react";
import styles from "./ShippingAddress.module.scss";
import AddressCard from "../components/AddressCard";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ShippingAddress = () => {

  const navigate = useHistory()
  const [addressList,setAddress] = useState([])
  if(addressList.length == 0){
    axios.get("http://localhost:5000/addresses/allAddresses").then((response)=>{
      if(response.data.length != 0){
        setAddress(response.data)
      }
      
    })
  }
  return (
    <div className={styles.component9} style={{display:"flex",alignItems:"center", marginTop: "120px"}}>
      <p className={styles.accountPaymentOptions}>
        Account &gt; Shipping Addresses{" "}
      </p>
      <div className={styles.relativeWrapperFour} style={{width:"100%"}}>

        <p className={styles.myPaymentOptions}>
          My Shipping Addresses
        </p>

          <div className={styles.Addressess} style={{justifyContent:"center",width:"100%"}}>
         {
          console.log(addressList)
         }
          {
            addressList?.map((address,index)=>{
              return <AddressCard address={address} index={index} refresher = {setAddress}/>
            })
          }  
            
            
          </div>                
          
      </div>

      <button className={styles.flexWrapperSix} onClick={()=>navigate.push("/ShippingAdd")}>
        <div className={styles.materialSymbolsadd}>
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/c79ed58d-2a00-4320-8287-86c9af45bd74.svg"
          />
        </div>
        <p className={styles.addAddressMax03}>
          Add Address
        </p>
      </button>
    </div>
  );
};

export default ShippingAddress;