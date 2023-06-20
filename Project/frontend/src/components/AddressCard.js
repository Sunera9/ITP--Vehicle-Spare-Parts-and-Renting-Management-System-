import React from "react";
import styles from "../components/ShippingAddress.module.scss";
// import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
function AddressCard(props){
    const navigate = useHistory()
    let address = props.address
    return(
        <div className={styles.Add1}>
        <div className={styles.frame}>
        <p className={styles.address01}>Address {props.index + 1}</p>
        
        <p className={styles.sPerera94771234567Two}>
          {address.name}
          <br />
          {address.phone}
        </p>

        <div className={styles.flexWrapperFour}>

          <p className={styles.no233rdLaneMainStreetKandy20000}>
            {address.address}
          </p> 

        </div>
        
        <div className={styles.wrapOption}>
          <Link className={styles.editDelete} to={{ pathname: "/ShippingUpdate", query: {address : address} }}>Edit</Link>
          <p className={styles.editDelete} onClick={()=>{
            axios.delete("http://localhost:5000/addresses/deleteAddress",{data:{
                addressId : address._id
            }}).then((response)=>{
                props.refresher([])
            })
          }}>Delete</p>
        </div>

        </div>

      </div>
    )
}
export default AddressCard