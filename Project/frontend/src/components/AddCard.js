import React from "react";
import styles from "./AddCard.module.scss";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

const AddCard = () => {
  const history = useHistory();
  const loadSuccess = () => history.push("/Payment");

  function handleSubmit(event) {
    event.preventDefault();
    const { cardNumber, cardType, expiryDate, ownerName, cvv } = event.target;
  
    const cvvRegex = /^[0-9]{3,4}$/;
    const numericRegex = /^\d{16}$/;
    let isValidated = true;
    if (cardNumber.value.trim() === '') {
      toast.error("Enter card number");
      isValidated = false;
    }else if(!numericRegex.test(cardNumber.value)){
      toast.error("Invalid card number");
      isValidated = false;
    }
    if (expiryDate.value === '') {
      toast.error("Pick expiry date");
      isValidated = false;
    }
    if (ownerName.value.trim() === '') {
      toast.error("Enter owner name");
      isValidated = false;
    }
    if (cvv.value.trim() === '') {
      toast.error("Enter CVV number");
      isValidated = false;
    }else if(!cvvRegex.test(cvv.value)){
      toast.error("Invalid CVV");
      isValidated = false;
    }
  
    
    if (isValidated) {
      let cardDetails = {};
  
      cardDetails = {
        cardNumber: cardNumber.value,
        cardType: cardType.value,
        expiryDate: expiryDate.value,
        ownerName: ownerName.value,
        cvv: cvv.value,
      };
    
      console.log(cardDetails);
    
      axios
        .post("http://localhost:5000/cards/addCard", cardDetails)
        .then((response) => {
          console.log(response.data);
          history.push("/Payment");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.component10}>
        <div className={styles.relativeWrapperOne}>
          <p className={styles.accountPaymentOptions}>
            Account &gt; Payment Options
          </p>
          <p className={styles.myPaymentOptions}>My Payment Options</p>
        </div>
        <div class={styles.nameRow1}>
          <div className={styles.titleContainer}>
            <div className={styles.frame23}>
              <p className={styles.bankName}>Card Number</p>
            </div>
            <input
              type="text"
              placeholder="Card number"
              name="cardNumber"
              className={styles.frame26}
            />
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame23Three}>
              <p className={styles.accountNumber}>Card Type</p>
            </div>
            <select name="cardType" id="cars" className={styles.frame24}>
              <option value="Visa">Visa</option>
              <option value="American Express">American Express</option>
              <option value="Discover">Discover</option>
              <option value="Mastercard">Mastercard</option>
            </select>
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame28}>
              <p className={styles.phoneNumber}>Expiry Date</p>
            </div>
          <input type="date" name="expiryDate" className={styles.frame27} />

          </div>
        </div>
        <div className={styles.feildRow}></div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Owner Name</p>
          </div>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>CVV Number</p>
          </div>
        </div>

        <div className={styles.feildRow2}>
          <input
            type="text"
            placeholder="Name on card"
            name="ownerName"
            className={styles.frame24Two}
          />

          <input
            type="text"
            placeholder="cvv"
            name="cvv"
            className={styles.frame24Two}
          />
        </div>

        <div className={styles.buttons}>
          <div className={styles.relativeWrapperNine}>
            <button className={styles.flexWrapperThree}>
              <p className={styles.updateThree}>Add</p>
            </button>
          </div>

          <div className={styles.relativeWrapperNine}>
            <button
              onClick={(e) => {
                e.preventDefault();
                loadSuccess();
              }}
              className={styles.flexWrapperThree}
            >
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCard;
