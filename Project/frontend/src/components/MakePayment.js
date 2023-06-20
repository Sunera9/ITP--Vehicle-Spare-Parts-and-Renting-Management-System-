import React, { useRef, useState } from "react";
import styles from "./MakePayment.module.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'

const MakePayment = () => {
  const location = useLocation()
  console.log(location);
  const {subTotal, shipping , bonus} =  location.state[0]
  const[addressList , setAddressList] = useState([])  
  const[cardList,setCardList] = useState([])
  const[bankList,setBankList] = useState([])
  const[address , setAddress] = useState(-1)
  const[isCard,setIsCard] = useState(true)
  const slipContainer = useRef()
  const paymentRef = useRef()
  const navigation = useHistory()
  if(addressList.length == 0){
    axios.get("http://localhost:5000/addresses/allAddresses").then((response)=>{
      if(response.data.length != 0){
        console.log(response.data)
        setAddressList(response.data)
      }
      
    })
  }
  if(address == -1 && addressList.length != 0){
    setAddress(0)
  }
  if(bankList.length == 0){
    axios.get("http://localhost:5000/bankAccounts/getAllBankAccounts").then((response)=>{    
      if(response.data.length != 0){
        setBankList(response.data)
      }
    })
  }  
  if(cardList.length == 0){
    axios.get("http://localhost:5000/cards/getAllCards").then((response)=>{    
      if(response.data.length != 0){
        setCardList(response.data)
      }
    })
  }

  let pickedMethod = null;
  const isPaymentMethodPicked = () => {
    const methods = Array.from(document.getElementsByName("PaymentMeth"));
    let isPicked = methods.some((method) => method.checked);
    if(!isPicked){
      toast.error("Pick payment method");
    }
    else{
      pickedMethod = methods.find((method) => method.checked).value
    }
    return isPicked;
  }

  return (
    <div className={styles.component14}>
      <p className={styles.itemsCartCheckout}>
            Items &gt; Cart &gt; Checkout
      </p>
      <div className={styles.wrapcontents}>
      <div className={styles.flexWrapperNine}>

        <div className={styles.ShippingSection}>


          

          <p className={styles.shippingAddress}>
            Shipping Address{" "}
          </p>


          <div className={styles.Add1}>
              <div className={styles.frame}>
              <p className={styles.address01}>Address {address +1}</p>
              
              <p className={styles.sPerera94771234567Two}>
                {address != -1?addressList[address].name : "No addresses added"}
                <br />
                &#43;{address != -1?addressList[address].phone : "No addresses added"}
              </p>

              <div className={styles.flexWrapperFour0}>

                <p className={styles.no233rdLaneMainStreetKandy20000}>
                {address != -1?addressList[address].address : "No addresses added"}
                </p> 

              </div>
              
              <div className={styles.wrapOption}>
                <select name="Change" id="change" className={styles.itemIdTwo} defaultValue={address} 
                onChange={(e)=>{setAddress(parseInt(e.target.value))}}>
                  {addressList.map((item,index)=>{
                    return <option key={item._id} value={index}>{item.address}</option>
                  })}
                  
                </select>                  
              </div>

              </div>

            </div>

        
        <p className={styles.paymentMethod}>Payment Method</p>
        <div className={styles.radioGroup} >
          <radioGroup ref={paymentRef}>
          {bankList.map((bank,index)=>{
            return <div className={styles.radioWrapper}>         
                      <label className={styles.RadLable} htmlFor={bank.bankName}> <input onChange={()=>setIsCard(false)} type="radio" name="PaymentMeth" value={bank.bankName} id={bank.bankName} />{bank.bankName} </label>
                    </div>
          })}
          {cardList.map((card,index)=>{
            return <div className={styles.radioWrapper}>         
                      <label className={styles.RadLable} htmlFor={card.cardType}> <input onChange={()=>setIsCard(true)} type="radio" name="PaymentMeth" value={card.cardType +" XX-"+ card.cardNumber.slice(-4)} id={card.cardType} /> {card.cardType +" XX-"+ card.cardNumber.slice(-4)} </label>
                    </div>
          })}
          </radioGroup>
          

          

          
          
        </div>

        <div className={styles.wrapBankSlip} >

        <p className={styles.bankSlipsShouldBeAddresedToXxxxxx}>
          (Bank Slips Should be Addresed to 10105782085 sampath bank shantha motors)
        </p>
        </div>

        

          </div>


          <div className={styles.itemBlock}>

       

          <div className={styles.countWrapper}>

                  <div className={styles.flexWrapperFourteen}>
                    <p className={styles.subtotal}>Subtotal</p>
                    <p className={styles.num20000}>{subTotal}</p>
                  </div>

                  <div className={styles.flexWrapperFifteen}>
                    <p className={styles.subtotal}>Shipping</p>
                    <p className={styles.num20000}>{shipping}</p>
                  </div>

                  <div className={styles.flexWrapperFourteen}>
                    <p className={styles.loyaltyBonus5min}>
                      Loyalty Bonus (5min)
                    </p>
                    <p className={styles.num20000}>{bonus}</p>
                  </div> 
                  <div className={styles.flexWrapperThree} />

              <div className={styles.flexWrapperTen}>
                <p className={styles.totalTaxIncl}>
                  Total (Tax incl.)
                </p>
                <p className={styles.num21500}>{subTotal-bonus+shipping}</p>
              </div>

              <div className={styles.line5} />
              <div className={styles.line5} />

              <div className={styles.flexWrapperEleven}>

                


                <div className={styles.flexWrapperTwenty}>                  
                  <div className={styles.flexWrapperOne} style={{cursor : "pointer"}} onClick={()=>{
                    if (isPaymentMethodPicked()){
                      if(!isCard && slipContainer.current?.files?.length == 0){
                        toast.error("Add payment slips for bank transfers");
                      }else{
                        axios.post("http://localhost:5000/payment",{
                          subtotal : subTotal,
                          bonus : bonus,
                          shipping : shipping,
                          type : isCard?"card":"bank",
                          status : isCard?"recieved":"processing",
                          address : addressList[address].address,
                          phone : addressList[address].phone,
                          custName : addressList[address].name,
                          paymentName : pickedMethod
                        }).then((responseO)=>{
                          if(!isCard){
                            console.log(slipContainer.current.files)
                            console.log("Fresh")
                            console.log(responseO)
                            console.log("Fresh")
                            const fd = new FormData()
                            fd.append('image', slipContainer.current.files[0],responseO.data._id + ".jpg")
                            
                            axios.post("http://localhost:5000/payment/pImg",fd,{
                              headers: {                               
                                  "Content-type" : "multipart/form-data",
                              }}).then((response)=>{ 
                                console.log(responseO) 
                                sessionStorage.setItem('payment', JSON.stringify({
                                  PaymentId: responseO.data._id,
                                  CustomerName: addressList[address].name,
                                  SubTotal: subTotal
                                }))   
                                navigation.push("/Final")
                            })

                          }else{
                            console.log(responseO)
                            sessionStorage.setItem('payment', JSON.stringify({
                              PaymentId: responseO.data._id,
                              CustomerName: addressList[address].name,
                              SubTotal: subTotal
                            }))
                            navigation.push("/Final", [])
                          }
                        }

                        )
                      }
                    }
                  }}>
                    <p className={styles.pay}>Pay</p>
                  </div>
                  
                  <Link to={"/Shipping"}>
                    <div className={styles.flexWrapperOne} style={{cursor : "pointer"}}>
                      <p className={styles.pay}>Add address</p>
                    </div>
                  </Link>
                  <Link to={"/Payment"}>
                    <div className={styles.flexWrapperOne} style={{cursor : "pointer"}}>
                      <p className={styles.pay}>Add payment method</p>
                    </div>
                  </Link>
                  {!isCard && <div className={styles.flexWrapperTwo} style={{width: '312px',
                    height: '79px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',}}>
                    <p className={styles.pay}>Add Bank Slip</p>
                    <input ref={slipContainer} type="file" style={{    width: '271px', color: 'white'}} />
                  </div>}
                  </div>
                
                </div>

                  

          </div>

            </div>
            
      </div>
      
      </div>
    </div>
  );
};

export default MakePayment;
