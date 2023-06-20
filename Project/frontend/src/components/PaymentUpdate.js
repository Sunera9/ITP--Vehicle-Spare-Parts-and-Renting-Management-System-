import React from "react";
import styles from "./PaymentUpdate.module.scss";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

const PaymentUpdate = () => {
  const location = useLocation()
  console.log(location);
  const { cardNumber, cardType, expiryDate, ownerName, cvv, _id } = useLocation().state[0];
  const navigate = useHistory();
  const donePage = () => navigate.push("/Payment");
  let ex = new Date(expiryDate);
  return (
    <form
      method="post"
      onSubmit={(e) => {
        handleUpdate(e, donePage);
      }}
    >
      <div className={styles.component6}>
        <div className={styles.relativeWrapperOne}>
          <p className={styles.accountPaymentOptions}>
            Account &gt; Payment Options
          </p>
          <p className={styles.myPaymentOptions}>My Payment Options</p>
        </div>

        <div className={styles.nameRow1}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: "40px"
            }}
          >
            <div class={styles.titleContainer}>
              <div className={styles.frame23}>
                <p className={styles.bankName}>Card Number</p>
              </div>
              <input
                name="cardNumber"
                type="text"
                placeholder={cardNumber}
                defaultValue={cardNumber}
                className={styles.frame26}
              />
            </div>

            <div class={styles.titleContainer}>
              <div className={styles.frame23Three}>
                <p className={styles.accountNumber}>Card Type</p>
              </div>
              <select
                name="cardType"
                id="cars"
                className={styles.frame24}
                defaultValue={cardType}
              >
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
              <input
                name="expiryDate"
                type="date"
                defaultValue={ex.toISOString().substring(0, 10)}
                className={styles.frame27}
              />
            </div>
          </div>
        </div>

        <div className={styles.feildRow}></div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Owner Name</p>
          </div>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>CV Number</p>
          </div>
        </div>

        <div className={styles.feildRow2}>
          <input type="hidden" value={_id} name="cardId" />
          <input
            type="text"
            name="ownerName"
            placeholder={ownerName}
            defaultValue={ownerName}
            className={styles.frame24Two}
          />

          <input
            type="text"
            name="cvv"
            placeholder={cvv}
            defaultValue={cvv}
            className={styles.frame24Two}
          />
        </div>

        <div className={styles.buttons}>
          <div className={styles.relativeWrapperNine}>
            <button className={styles.flexWrapperThree}>
              <p className={styles.updateThree}>Update</p>
            </button>
          </div>

          <div className={styles.relativeWrapperNine}>
            <button
              className={styles.flexWrapperThree}
              onClick={() => donePage()}
            >
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
function handleUpdate(event, navigater) {
  event.preventDefault();
  
  const { cardNumber, cardType, expiryDate, ownerName, cvv, cardId } =
    event.target;

  const cvvRegex = /^[0-9]{3,4}$/;
  const numericRegex = /^\d+$/;
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
      cardId: cardId.value,
      cardNumber: cardNumber.value,
      cardType: cardType.value,
      expiryDate: new Date(expiryDate.value).toISOString().substring(0, 10),
      ownerName: ownerName.value,
      cvv: cvv.value,
    };

    console.log(cardDetails);

    axios
      .put("http://localhost:5000/cards/updateCard", cardDetails)
      .then((response) => {
        console.log(response.data);
        navigater();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default PaymentUpdate;
