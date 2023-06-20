import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>

    <div className={styles.component2}>

    <div className={styles.flexWrapperOne}>

      <div className={styles.leftfoot}>
            <p className={styles.faq}>FAQ</p>
            <p className={styles.leaveUsAFeedback}>
              Leave us a feedback
            </p>
            <p className={styles.contactNo0352246576}>
              Contact No: 0352 246 576{" "}
            </p>       
        
      </div>

      <div className={styles.midFoot}>
        <img
          alt=""
          className={styles.pngLogoImage2}
          src="https://static.overlay-tech.com/assets/5077380c-d8ad-4e1b-b0a9-70a6bb225997.png"
        />
        <div className={styles.line1} />
        <p className={styles.copyright2023ShanthaMotorsAllRi}>
          Copyright © 2023 Shantha Motors®. All rights
          reserved
        </p>
      </div>

      <div className={styles.rightFoot}>

        <p className={styles.termsAndConditions}>
            Terms and Conditions
        </p>

        <p className={styles.privacyPolicy}>
          Privacy Policy
        </p>
        <div className={styles.socialIcon}>

        <div className={styles.bxlgmail}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/3a24551d-d1ed-4600-84c7-4c3be5a8e412.svg"
              />
        </div>

        <div className={styles.uilinstagramAlt}>
          <img
            alt=""
            className={styles.vectorTwo}
            src="https://static.overlay-tech.com/assets/9bd55898-64f0-47d4-bcfc-7439af25a655.svg"
          />
        </div>
         <div className={styles.carbonlogoFacebook}>
            <img
              alt=""
              className={styles.vectorThree}
              src="https://static.overlay-tech.com/assets/bf43abd0-2a17-421a-861e-6791a70e5dff.svg"
            />
          </div>
          </div>

      </div>     
        
        
        
      </div>

      
      
    </div>
    </div>
  );
};

export default Footer;