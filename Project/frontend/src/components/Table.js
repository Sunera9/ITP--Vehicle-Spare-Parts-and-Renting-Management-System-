import React, { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import styles2 from "./Hedder.module.scss";
import axios from "axios";

const Table = ({ setGIn, searchText }) => {
  const [paymentList, setPaymentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  console.log(searchText);


  useEffect(() => {
    if (paymentList.length === 0) {
      axios.get("http://localhost:5000/payment").then((response) => {
        if (response.data.length != 0) {
          // console.log(response.data)
          setPaymentList(response.data);
          setFilteredList(response.data);

          //gross income 
          let x = 0;
          response.data.forEach((element) => {
            // console.log(element.subtotal)
            x += element.subtotal - element.bonus + element.shipping;
          });
          setGIn(x);
        }
      });
    }
  }, []);

  //search filter
  useEffect(() => {
    if (searchText !== "") {
      // let newArray = filteredList.filter(function (el) {
      //   return ;
      // });
      let obj = filteredList.find(o => o._id === searchText);
      if (obj){setFilteredList([obj])}else{setFilteredList(paymentList)}
    }else{
      setFilteredList(paymentList)
    }
  }, [searchText]);

  //report generation

  const genReport = async () => {
    axios
      .get("http://localhost:5000/payment/pdf", { responseType: "blob" })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Gross Income Report.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((e) => {
        console.log(e.data.error);
      });
  };

  return (
    <>
      <div className={styles.frame22}>
        <div className={styles.frame13Two}>
          <div className={styles.frame9}>
            <div className={styles.frame8}>
              <div className={styles.frame2}>
                <p className={styles.itemId}>ID</p>
              </div>

              <div className={styles.frame2}>
                <p className={styles.itemId}>Customer name</p>
              </div>

              <div className={styles.frame2}>
                <p className={styles.itemId}>Phone</p>
              </div>

              <div className={styles.frame2}>
                <p className={styles.itemId}>Date</p>
              </div>

              <div className={styles.frame2}>
                <p className={styles.paymentMethod}>Payment Method</p>
              </div>

              <div className={styles.frame2}>
                <p className={styles.status}>Status</p>
              </div>
              <div className={styles.frame2}>
                <p className={styles.itemId}>Amount</p>
              </div>
            </div>
          </div>
          {filteredList.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <div className={styles.frame13Three}>
                  <div className={styles.frame8Two}>
                    <div className={styles.frame1Three}>
                      <p className={styles.itemIdTwo}>{item._id}</p>
                    </div>
                    <div className={styles.relativeWrapperOne}>
                      <div className={styles.frame1Three}>
                        <p className={styles.itemIdTwo}>{item.custName}</p>
                      </div>
                    </div>
                    <div className={styles.frame1Three}>
                      <p className={styles.itemIdTwo}>{item.phone}</p>
                    </div>
                    <div className={styles.frame3Two}>
                      <p className={styles.itemIdTwo}>
                        {new Date(item.date).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        {new Date(item.date).toLocaleString("en-GB", {
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                        })}
                      </p>
                    </div>
                    <div className={styles.frame3Two}>
                      <p className={styles.itemIdTwo}>
                        {item.type} ({item.paymentName}{" "}
                        {item.type == "bank" ? (
                          <a
                            target="_blank"
                            href={
                              "http://localhost:5000/payment/pimg/" + item._id
                            }
                            style={{color: 'blue'}}
                          >
                            view slip
                          </a>
                        ) : (
                          <div></div>
                        )}
                        )
                      </p>
                    </div>
                    <div className={styles.frame1Three}>
                      <p className={styles.itemIdTwo}>
                        {item.status != "processing" ? (
                          item.status
                        ) : (
                          <button
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  "Are you sure you want to confirm this payment as recieved"
                                )
                              ) {
                                axios
                                  .put(
                                    "http://localhost:5000/payment/" + item._id
                                  )
                                  .then((response) => {
                                    alert("payment confirmed");
                                    setPaymentList([]);
                                    location.reload();
                                  });
                              }
                            }}

                            style={{backgroundColor: '#321375',
                              padding: '5px 10px',
                              borderRadius: '10px',
                              color: 'white',}}
                          >
                            Confirm payment
                          </button>
                        )}
                      </p>
                    </div>

                    <div className={styles.frame1Three}>
                      <p className={styles.itemIdTwo}>
                        LKR{" "}
                        {(item.subtotal - item.bonus + item.shipping).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className={styles.frame13Three}>
                  <div className={styles.frame8Two}>
                    <div
                      className={styles.frame1Three}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>{item._id}</p>
                    </div>
                    <div
                      className={styles.relativeWrapperOne}
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className={styles.frame1Three}
                        style={{ backgroundColor: "white" }}
                      >
                        <p className={styles.itemIdTwo}>{item.custName}</p>
                      </div>
                    </div>
                    <div
                      className={styles.frame1Three}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>{item.phone}</p>
                    </div>
                    <div
                      className={styles.frame3Two}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>
                        {new Date(item.date).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        {new Date(item.date).toLocaleString("en-GB", {
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                        })}
                      </p>
                    </div>
                    <div
                      className={styles.frame3Two}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>
                        {item.type} ({item.paymentName}{" "}
                        {item.type == "bank" ? (
                          <a
                            target="_blank"
                            href={
                              "http://localhost:5000/payment/pimg/" + item._id
                            }
                            style={{color: 'blue'}}
                          >
                            view slip
                          </a>
                        ) : (
                          <div></div>
                        )}
                        )
                      </p>
                    </div>
                    <div
                      className={styles.frame1Three}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>
                        {item.status != "processing" ? (
                          item.status
                        ) : (
                          <button
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  "Are you sure you wats to confirm this payment as recieved"
                                )
                              ) {
                                axios
                                  .put(
                                    "http://localhost:5000/payment/" + item._id
                                  )
                                  .then((response) => {
                                    alert("payment confirmed");
                                    setPaymentList([]);
                                  });
                              }
                            }}

                            style={{backgroundColor: '#321375',
                              padding: '5px 10px',
                              borderRadius: '10px',
                              color: 'white',}}
                          >
                            Confirm payment
                          </button>
                        )}
                      </p>
                    </div>

                    <div
                      className={styles.frame1Three}
                      style={{ backgroundColor: "white" }}
                    >
                      <p className={styles.itemIdTwo}>
                        LKR{" "}
                        {(item.subtotal - item.bonus + item.shipping).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <button className={styles2.flexWrapperFour} onClick={genReport}>
            <div className={styles2.materialSymbolsdownloadRounded}>
              <img
                alt=""
                className={styles2.vectorThree}
                src="https://static.overlay-tech.com/assets/be36aeab-6528-4726-8e6d-93327e8ff433.svg"
              />
            </div>

            <p className={styles2.downloadReport}>Download Report</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
