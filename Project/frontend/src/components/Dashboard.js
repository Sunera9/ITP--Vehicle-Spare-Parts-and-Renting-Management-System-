

import React from "react";
import styles from "./Dashboard.module.scss";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const handleClick = (option) => {
    console.log("clicked this");
    switch (option) {
      case "employee":
        history.push("/Employee");
        break;
      case "customer":
        history.push("/Customer");
        break;
      case "supplier":
        history.push("/Supplier");
        break;
      case "rentals":
        history.push("/Rentals");
        break;
      case "spare":
        history.push("/SpareParts");
        break;
      case "inventory":
        history.push("/Inventory");
        break;
      case "payments":
        history.push("/Payments");
        break;
      case "utility":
        history.push("/UtilityBills");
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.dashboard}>
      <img
        alt=""
        className={styles.pngLogoImage1}
        src="https://static.overlay-tech.com/assets/70822578-6abf-4c61-b066-0f05fa84fa5a.png"
      />
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("employee")}}>
        <p className={styles.emps}>Employee</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("customer")}}>
        <p className={styles.emps}>Customer</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("supplier")}}>
        <p className={styles.emps}>Supplier</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("rentals")}}>
        <p className={styles.emps}>Rentals</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("spare")}}>
        <p className={styles.emps}>Spare Parts</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("inventory")}}>
        <p className={styles.emps}>Inventory</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("payments")}}>
        <p className={styles.emps}>Payments</p>
      </div>
      <div className={styles.flexWrapperOne} onClick={()=>{handleClick("utility")}}>
        <p className={styles.emps}>Utility Bills</p>
      </div>
    </div>
  );
};

export default Dashboard;
