import React from "react";
import styles from "./UpdateBank.module.scss";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

const UpdateBank = (props) => {
  const { bankName, accountNumber, phoneNumber, ownerName, userId, _id } =
    useLocation().state[0];
  console.log(useLocation().state.account);
  const navigate = useHistory();
  const donePage = () => navigate.push("/Payment");

  return (
    <div className={styles.component8}>
      <form
        method="post"
        onSubmit={(event) => {
          handleUpdate(donePage, event);
        }}
        style={{ alignSelf: "center", width: "1360px" }}
      >
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
              name="bankName"
              placeholder="Bank name"
              defaultValue={bankName}
              className={styles.frame26}
            />
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame23Three}>
              <p className={styles.accountNumber}>Account Number</p>
            </div>
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              defaultValue={accountNumber}
              className={styles.frame24}
            />
          </div>
          <div class={styles.titleContainer}>
            <div className={styles.frame28}>
              <p className={styles.phoneNumber}>Phone Number</p>
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              defaultValue={phoneNumber}
              className={styles.frame27}
            />
          </div>
        </div>

        <div className={styles.feildRow}>
          <input type="hidden" value={_id} name="accountId" />
        </div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Owner Name</p>
          </div>
        </div>

        <div className={styles.feildRow2}>
          <input
            type="text"
            name="ownerName"
            placeholder="Owner name"
            defaultValue={ownerName}
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
              onClick={(e) => {
                e.preventDefault();
                donePage();
              }}
            >
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
function handleUpdate(navigater, event) {
  event.preventDefault();
  const { accountId, bankName, accountNumber, phoneNumber, ownerName } =
    event.target;
  
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
    toast.error("Invalid card number");
    isValidated = false;
  }
  if (phoneNumber.value.trim() === '') {
    toast.error("Enter phone number");
    isValidated = false;
  }else if(!mobileNoRegex.test(phoneNumber.value)){
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
        accountId: accountId.value,
        bankName: bankName.value,
        accountNumber: parseInt(accountNumber.value),
        phoneNumber: phoneNumber.value,
        ownerName: ownerName.value,
      };
    } catch (e) {
      alert(e);
      console.error(e);
      return;
    }
    axios
      .put("http://localhost:5000/bankAccounts/updateBankAccount", bankDetails)
      .then((response) => {
        navigater();
      });
  }
}

export default UpdateBank;
