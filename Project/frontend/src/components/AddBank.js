import React from "react";
import styles from "./AddBank.module.scss";
import axios from "axios";
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom";


const AddBank = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <form onSubmit={submitForm} method="post">
      <div className={styles.component8}>
        <div className={styles.relativeWrapperTen}>
          <div className={styles.flexWrapperTwo}>
            <p className={styles.accountPaymentOptions}>
              Account &gt; Payment Options
            </p>
          </div>
          <div className={styles.flexWrapperFive}>
            <p className={styles.myPaymentOptions}>My Payment Options</p>
          </div>
        </div>

        <div className={styles.nameRow1}>
          <div class={styles.titleContainer}>
            <div className={styles.frame23}>
              <p className={styles.bankName}>Bank Name</p>
            </div>
            <input
              type="text"
              placeholder="Bank name"
              name="bankName"
              className={styles.frame26}
            />
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame23Three}>
              <p className={styles.accountNumber}>Account Number</p>
            </div>
            <input
            type="text"
            placeholder="Account number"
            name="accountNumber"
            className={styles.frame24}
          />
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame28}>
              <p className={styles.phoneNumber}>Phone Number</p>
            </div>
             <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className={styles.frame27}
          />
          </div>
        </div>
        <div className={styles.feildRow}>
          

         
        </div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Owner Name</p>
          </div>
        </div>

        <div className={styles.feildRow2}>
          <input
            type="text"
            placeholder="owner name"
            name="ownerName"
            className={styles.frame24Two}
          />
        </div>

        <div className={styles.buttons}>
          <div className={styles.relativeWrapperNine}>
            <button className={styles.flexWrapperThree} onSubmit={submitForm}>
              <p className={styles.updateThree}>Add</p>
            </button>
          </div>

          <div className={styles.relativeWrapperNine}>
            <button
              className={styles.flexWrapperThree}
              onClick={(e) => {
                e.preventDefault();
                goBack();
              }}
            >
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
function submitForm(e) {
  e.preventDefault();
  const { bankName, accountNumber, phone, ownerName } = e.target;

  const mobileNoRegex = /^[0][0-9]{9}$/;
  const numericRegex = /^\d+$/;
  let isValidated = true;
  if (bankName.value.trim() === '') {
    toast.error("Enter bank name");
    isValidated = false;
  }
  if (accountNumber.value.trim() === '') {
    toast.error("Enter account number");
    isValidated = false;
  }else if(!numericRegex.test(accountNumber.value)){
    toast.error("Invalid account number");
    isValidated = false;
  }
  if (phone.value.trim() === '') {
    toast.error("Enter phone number");
    isValidated = false;
  }else if(!mobileNoRegex.test(phone.value)){
    toast.error("Invalid phone number");
    isValidated = false;
  }
  if (ownerName.value.trim() === '') {
    toast.error("Enter owner name");
    isValidated = false;
  }

  if(isValidated){
    let bankDetails = {};
    
    try {
      bankDetails = {
        bankName: bankName.value,
        accountNumber: parseInt(accountNumber.value),
        phoneNumber: phone.value,
        ownerName: ownerName.value,
      };
    } catch {
      alert("error occured in account number");
      return;
    }
    console.log(bankDetails);

    axios
      .post("http://localhost:5000/bankAccounts/addBankAccount", bankDetails)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/Payment";
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AddBank;
