import React, { useEffect, useState } from "react";
import styles from "./PaymentOption.module.scss";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentOption = (props, state) => {
  const navigate = useHistory();
  const [wholeList, setList] = useState({});

  let newList = {};

  // if (!wholeList.accounts) {
  //   axios
  //     .get("http://localhost:5000/bankAccounts/getAllBankAccounts")
  //     .then((response) => {
  //       newList.accounts = response.data;
  //     })
  //     .finally(() => {
  //       if (!wholeList.cards) {
  //         axios
  //           .get("http://localhost:5000/cards/getAllCards")
  //           .then((response) => {
  //             newList.cards = response.data;

  //             setList(newList);
  //           });
  //       }
  //     });
  // }

  useEffect(() => {
    loadCards();
  }, [])

  const loadCards = async () => {
    await axios.get("http://localhost:5000/bankAccounts/getAllBankAccounts")
      .then((response) => {
        newList.accounts = response.data;
      })
      .finally(() => {
          axios
            .get("http://localhost:5000/cards/getAllCards")
            .then((response) => {
              newList.cards = response.data;

              setList(newList);
            });
      });
  }

  const deleteCard = async (card) => {
    let accountInfo = {
      cardId: card._id,
    };
    console.log(accountInfo);
    await axios.delete(
        "http://localhost:5000/cards/deleteCard",
        { data: accountInfo }
      ).then((response) => {
          //stateRefresh();
          loadCards();
          toast.success("Card deleted successfully!");
      });
  }

  const deleteAccount = async (account) => {
    let accountInfo = {
      accountId: account._id,
    };
    console.log(accountInfo);
    await axios.delete(
      "http://localhost:5000/bankAccounts/deleteBankAccount",
      { data: accountInfo }
    )
    .then((response) => {
      loadCards();
      toast.success("Account deleted successfully!");
    });
  }

  return (
    <div className={styles.component7}>
      <div className={styles.HeadingAndBread}>
        <p className={styles.accountPaymentOptions}>
          Account &gt; Payment Options
        </p>

        <p className={styles.myPaymentOptions}>My Payment Options</p>
      </div>

      <div className={styles.outerHolder}>
        <div className={styles.bodyWrapper}>
          <div className={styles.TitleWrapper}>
            <p className={styles.creditDebitCards}>Credit /Debit Cards</p>

            <p className={styles.max02}></p>
          </div>
          <table
            className={styles.titleRow}
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <thead style={{ backgroundColor: "rgb(75, 37, 155)" }}>
              <tr>
                <th>
                  <p className={styles.cardType}>Card Type</p>
                </th>
                <th>
                  <p className={styles.cardType}>Card Number</p>
                </th>
                <th>
                  <p className={styles.cardType}>Expiry Date</p>
                </th>
                <th>
                  <p className={styles.cardType}>Edit</p>
                </th>
                <th>
                  <p className={styles.cardType}>Delete</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {wholeList.cards?.map((card, index) => {
                return (
                  <tr key={card._id}>
                    <td className={styles.tableData} style={{
                          backgroundColor:
                            index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                        }} >{card.cardType}</td>
                    <td className={styles.tableData}  style={{
                          backgroundColor:
                            index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                        }}>{card.cardNumber}</td>
                    <td className={styles.tableData}  style={{
                          backgroundColor:
                            index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                        }}> {(new Date(card.expiryDate).getMonth()+1)+"/"+new Date(card.expiryDate).getFullYear()}</td>
                    <td className={styles.tableData}  style={{
                          backgroundColor:
                            index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                        }}>
                      <div
                        className={styles.frame6Three}
                        onClick={() =>
                          navigate.push("/UpdateCard", [
                            card,
                        ])
                        }
                        style={{
                          backgroundColor:
                            index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                        }}
                      >
                        <div className={styles.materialSymbolsedit}>
                          <img
                            alt=""
                            className={styles.vector}
                            src="https://static.overlay-tech.com/assets/fcb7a701-dc06-4f09-b301-f68f39f06f3c.svg"
                          />
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableData}>
                      <button style={{width: '100%', padding: 0}} onClick={() => deleteCard(card)}>
                        <div
                          style={{
                            backgroundColor:
                              index % 2 == 1 ? "rgba(173, 164, 191, 1)" : "",
                          }}
                          className={styles.frame6Three}
                        >
                          <img
                            alt=""
                            className={styles.vectorTwo}
                            src="https://static.overlay-tech.com/assets/9d6694a1-4a47-425c-9d7d-b848b4ecaf23.svg"
                          />
                        </div>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className={styles.TitleWrapper1}>
            <p className={styles.creditDebitCards}>Bank Transfers</p>

            <p className={styles.max02}></p>
          </div>

          <table
            className={styles.titleRow}
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tr style={{ backgroundColor: "rgb(75, 37, 155)" }}>
              <td class="frame1">
                <p class={styles.cardType}>Payment Method</p>
              </td>
              <td class="frame3">
                <p class={styles.cardType}>Account Number</p>
              </td>
              <td class="frame4">
                <p class={styles.cardType}>Phone Number</p>
              </td>
              <td class="frame6">
                <p class={styles.cardType}>Edit</p>
              </td>
              <td class="frame6Two">
                <p class={styles.cardType}>Delete</p>
              </td>
            </tr>

            {wholeList.accounts?.map((account, index) => {
              return (
                <tr class="topSecDat{% if forloop.counter0|divisibleby:2 == 1 %} odd{% endif %}">
                  <td class={styles.tableData} style={{
                        backgroundColor: (index%2==1)
                          ? "rgba(173, 164, 191, 1)"
                          : "",
                      }}> 
                    <p class="masterCard">{account.bankName}</p>
                  </td>
                  <td class={styles.tableData} style={{
                        backgroundColor: (index%2==1)
                          ? "rgba(173, 164, 191, 1)"
                          : "",
                      }}>
                    <p class="masterCard">{account.accountNumber}</p>
                  </td>
                  <td class={styles.tableData} style={{
                        backgroundColor: (index%2==1)
                          ? "rgba(173, 164, 191, 1)"
                          : "",
                      }}>
                    <p class="masterCard">{account.phoneNumber}</p>
                  </td>
                  <td
                    class={styles.tableData}
                    onclick="location.href='/UpdateBank?accountId={{ account._id }}'"
                  >
                    <div
                      className={styles.frame6Three}
                      style={{
                        backgroundColor: (index%2==1)
                          ? "rgba(173, 164, 191, 1)"
                          : "",
                      }}
                      onClick={() =>
                        navigate.push("/UpdateBank", [
                          account,
                        ])
                      }
                    >
                      <div className={styles.materialSymbolsedit}>
                        <img
                          alt=""
                          className={styles.vector}
                          src="https://static.overlay-tech.com/assets/46eec3b5-6853-4b02-95f4-dd2a0f488720.svg"
                        />
                      </div>
                    </div>
                  </td>
                  <td
                    class={styles.tableData}
                    onclick="deleteAccount('{{ account._id }}')"
                  >
                    <div
                      className={styles.frame6Three}
                      style={{
                        backgroundColor: (index%2==1)
                          ? "rgba(173, 164, 191, 1)"
                          : "",
                      }}
                      onClick={() => deleteAccount(account)}
                    >
                      <img
                        alt=""
                        className={styles.vectorTwo}
                        src="https://static.overlay-tech.com/assets/66941b0e-8c96-4bea-b93f-7a6e6e6d328e.svg"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>

          <div className={styles.buttons}>
            <Link to="/BankAdd">
              <div className={styles.flexWrapperTwo}>
                <div className={styles.materialSymbolsadd}>
                  <img
                    alt=""
                    className={styles.vectorThree}
                    src="https://static.overlay-tech.com/assets/c8e46693-74ce-4bbe-8c44-1350115a9d7c.svg"
                  />
                </div>
                <p className={styles.addBank}>Add Bank</p>
              </div>
            </Link>
            <Link to="/CardAdd">
              <div className={styles.flexWrapperTwo}>
                <div className={styles.materialSymbolsadd}>
                  <img
                    alt=""
                    className={styles.vectorThree}
                    src="https://static.overlay-tech.com/assets/129ec0e3-0420-4c81-9cb6-739d8515e402.svg"
                  />
                </div>
                <p className={styles.addBank}>Add Card</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
