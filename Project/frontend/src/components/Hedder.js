import React, { useState } from "react";
// import { Rectangle2 } from "components";
import styles from "./Hedder.module.scss";
import { SearchOutline } from 'react-ionicons'

const Hedder = ({gross, setSearchText}) => {


// const genReport = () =>{
// }


  return (
    <div className={styles.component1}>
      <div className={styles.LoginRow}>
        <div className={styles.flexWrapperTwo}>
          <button className={styles.rectangle14}>
            <p className={styles.logOut}>Log Out</p>
          </button>
          <div className={styles.mdiaccount}>
            <img
              alt=""
              className={styles.vector}
              src="https://static.overlay-tech.com/assets/46055384-7399-4d3e-9f2e-a258251c25dc.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.heding}>
        {/* <div className={styles.materialSymbolsdeleteForever}>
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/4232333e-78a2-43d1-acd6-41e624d48756.svg"
          />
        </div> */}

        <div className={styles.HeaderTop}>
          <div className={styles.relativeWrapperOne}>
            <p className={styles.paymentMangement}>Payment Management</p>
          </div>

            <div className={styles.searchBox}>
            <button className={styles.searchBtn} >
                {/* <img
                  alt=""
                  className={styles.icons8Search241}
                  src="https://static.overlay-tech.com/assets/ba6fb668-1946-4a20-956a-dab4292f68d5.png"
                /> */}

                <SearchOutline
                color={'#00000'}
                height="20px"
                width="20px"
                />
              </button>
              <input
                type="text"
                placeholder="Search by name / ID"
                name="search"
                className={styles.flexWrapperOne}
                onChange={(text)=>setSearchText(text.target.value)}
              />
              
            </div>
        </div>

        <div className={styles.HeaderBottom}>
          <div className={styles.ThreeBtn}>
            
{/* 
            <button className={styles.flexWrapperThree}>
              <div className={styles.materialSymbolsadd} />
              <img
                alt=""
                className={styles.vectorTwo}
                src="https://static.overlay-tech.com/assets/dd7d60cc-996d-4c87-bece-20761bd4b444.svg"
              />
              <p className={styles.addANewPayment}>Add A New Payment</p>
            </button> */}

            {/* <button className={styles.flexWrapperFour} onClick={genReport}>
              <div className={styles.materialSymbolsdownloadRounded}>
                <img
                  alt=""
                  className={styles.vectorThree}
                  src="https://static.overlay-tech.com/assets/be36aeab-6528-4726-8e6d-93327e8ff433.svg"
                />
              </div>

              <p className={styles.downloadReport}>Download Report</p>
            </button> */}
          </div>

          <div className={styles.twoBtn}>
            {/* <button className={styles.flexWrapperSeven}>
              <img
                alt=""
                className={styles.vectorFour}
                src="https://static.overlay-tech.com/assets/6a7138e2-0029-44b4-aa8c-9c0b6c0e7206.svg"
              />
              <p className={styles.seeBankTransfers}>See Bank Transfers</p>
            </button> */}

            
            {/* <button className={styles.flexWrapperSix}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/2e2e74b8-fa45-4a47-93fe-cdb40db9f782.svg"
              />
              <p className={styles.removePayment}>Remove Payment</p>
            </button> */}

            <button className={styles.flexWrapperFive}>
              <p className={styles.addANewPayment}>GROSS INCOME</p>
              <p className={styles.rs1000000}>: LKR {gross}</p>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hedder;
