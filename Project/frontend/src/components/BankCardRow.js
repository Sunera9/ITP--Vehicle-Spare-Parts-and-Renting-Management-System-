import React from "react";
import styles from "./PaymentOption.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function BankCardRow(props){
    
    const navigate = useNavigate()
    const {cardNumber,cardType,expiryDate,ownerName,cvv,_id} = props.card
    const stateRefresh = props.stateRefresh
    return (
    <div className={styles.dataRow}>      

    <div className={styles.frame1Two} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
        <p className={styles.masterCard}>
            {cardType}
        </p>
    </div>

    <div className={styles.frame3Two} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
        <p className={styles.masterCard}>
            {cardNumber}
        </p>
    </div>
    
    <div className={styles.frame4Two} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
        <p className={styles.masterCard}>
            {(new Date(expiryDate).getMonth()+1)+"/"+new Date(expiryDate).getFullYear()}
        </p>
    </div>
    <div className={styles.frame6Three} onClick={()=>navigate("/UpdateCard",{state : {card : props.card}})} style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}}>
          <div
            className={styles.materialSymbolsedit}
          >
            <img
              alt=""
              className={styles.vector}
              src="https://static.overlay-tech.com/assets/fcb7a701-dc06-4f09-b301-f68f39f06f3c.svg"
            />
          </div>
        </div>

                     
      <div style={{backgroundColor: props.odd?"rgba(173, 164, 191, 1)":""}} className={styles.frame6Three} onClick={()=>{
            let accountInfo = {              
              cardId : _id
            }
            console.log(accountInfo)
            axios.delete("http://localhost:5000/cards/deleteCard",{data : accountInfo}).then((response)=>{              
              stateRefresh()
            })
          }}>
        <img
          alt=""
          className={styles.vectorTwo}
          src="https://static.overlay-tech.com/assets/9d6694a1-4a47-425c-9d7d-b848b4ecaf23.svg"
        />
      </div>
</div>)
}