import React from "react";
import styles from "../components/UpdateBank.module.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { CheckmarkCircleOutline } from "react-ionicons";
import QRCode from "react-qr-code";
 const bg = require('../assets/images/blurredBackground9.png')
const PaymentFinal = (props) => {

  const history = useHistory();

  return (
    <div style={{backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
      <Header />
      <div className={styles.component8}>
        {/* <CheckmarkCircleOutline
          height="250px"
          width="250px"
          color={"#7CFC00"}
        /> */}
        <QRCode
          style={{width: "250px", height: "250px", marginBottom: "30px", marginTop: "100px"}}
          value={sessionStorage.getItem("payment")}
        />
        <span
          color="Green"
          style={{
            color: "#321375",
            fontSize: "30px",
            fontWeight: "600",
            backgroundColor: "rgba(255,255,255,0.4)",
            padding: "20px",
            borderRadius: "40px",
            borderStyle: "solid",
          }}
        >
          Your Order Has Been Received
        </span>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link style={{ margin: "20px 50px" }} to={"/item-page"}>
            <div className={styles.flexWrapperTwentyt}>
              <div className={styles.flexWrapperOnet}>
                <p
                  style={{ color: "#fff", margin: "auto" }}
                  className={styles.payt}
                  //onClick={() => history.push("/item-page")}
                >
                  Shop more
                </p>
              </div>
            </div>
          </Link>
          <Link style={{ margin: "20px 50px" }} to={"/Home-page"}>
            <div className={styles.flexWrapperTwentyt}>
              <div className={styles.flexWrapperOnet}>
                <p
                  style={{ color: "#fff", margin: "auto" }}
                  className={styles.payt}
                 // onClick={() => history.push('/Home-page')}
                >
                  Home
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentFinal;
