import React from "react";
import styles from "./ShippingUpdate.module.scss";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const ShippingUpdate = () => {
  const location = useLocation();
  const navigate = useHistory();
  const goBack = () => navigate.push("/Shipping");
  let address = location.query.address;
  console.log(address);
  return (
    <form method="post" onSubmit={(e) => handleSubmit(e, goBack)}>
      <div className={styles.component12}>
        <div className={styles.relativeWrapperOne}>
          <p className={styles.accountPaymentOptions}>
            Account &gt; Shipping Addresses
          </p>

          <p className={styles.myPaymentOptions}>My Shipping Addresses</p>
          <p className={styles.editShippingAddress}>Edit Shipping Address</p>
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
          <input type="hidden" value={address._id} name="addressId" />
          <input
            type="text"
            name="name"
            defaultValue={address.name}
            placeholder="name"
            className={styles.frame26}
          />

          <input
            type="text"
            name="phone"
            defaultValue={address.phone}
            placeholder="phone Number"
            className={styles.frame27}
          />
        </div>

        <div className={styles.nameRow2}>
          <div className={styles.frame23Four}>
            <p className={styles.bankName}>Address</p>
          </div>
        </div>

        <div className={styles.feildRow2}>
          <input
            type="text"
            name="address"
            defaultValue={address.address}
            placeholder="S.Perera"
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
              onClick={(e) => goBack()}
            >
              <p className={styles.updateThree}>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
function handleSubmit(event, pageLoader) {
  event.preventDefault();
  const { addressId, name, phone, address } = event.target;

  let addressDetails = {};

  if (
    addressId.value === "" ||
    name.value === "" ||
    phone.value === "" ||
    address.value === ""
  ) { 
    alert("All fields are required")

    return
  }
    addressDetails = {
      addressId: addressId.value,
      name: name.value,
      phone: phone.value,
      address: address.value,
    };

  console.log(addressDetails);

  axios
    .put("http://localhost:5000/addresses/updateAddress", addressDetails)
    .then((response) => {
      console.log(response);
      pageLoader();
    })
    .catch((error) => {
      console.log(error);
    });
}

export default ShippingUpdate;
