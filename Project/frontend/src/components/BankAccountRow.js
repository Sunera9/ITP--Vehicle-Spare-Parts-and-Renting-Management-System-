import React from "react";
import styles from "./PaymentOption.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function BankAccountRow(props){
    const navigate = useNavigate()
    const {bankName,accountNumber,phoneNumber,ownerName,userId,_id} = props.bankAccount
    const stateRefresh = props.stateRefresh
    
    return(
        <div className={styles.topSecDat} >
        <div className={styles.frame1Two}  style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
          <p className={styles.masterCard}>
                {bankName}
          </p>
        </div>

        <div className={styles.frame3Two} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}} >
          <p className={styles.masterCard}>
                {accountNumber}
          </p>
         </div>

        <div className={styles.frame4Two} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
          <p className={styles.masterCard} >
                {phoneNumber}
          </p>
        </div>
        
        <div className={styles.frame6Three} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}} onClick={()=>navigate("/UpdateBank",{state : {account : props.bankAccount}})}>
          <div className={styles.materialSymbolsedit} >
            <img
              alt=""
              className={styles.vector}
              src="https://static.overlay-tech.com/assets/46eec3b5-6853-4b02-95f4-dd2a0f488720.svg" />
          </div>
        </div>

        <div className={styles.frame6Three} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}} onClick={()=>{
            let accountInfo = {              
              accountId : _id
            }
            console.log(accountInfo)
            axios.delete("http://localhost:5000/bankAccounts/deleteBankAccount",{data : accountInfo}).then((response)=>{              
              stateRefresh()
            })
          }}>
          <img
            alt=""
            className={styles.vectorTwo}
            src="https://static.overlay-tech.com/assets/66941b0e-8c96-4bea-b93f-7a6e6e6d328e.svg"/>
        </div>
      </div>

    )
}