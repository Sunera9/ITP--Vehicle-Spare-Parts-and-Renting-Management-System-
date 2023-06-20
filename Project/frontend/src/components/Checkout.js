import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import CheckoutTile from "../components/CheckOutItem";
import axios from "axios";
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom";



const Checkout = (prop) => {
  const[subTotal,setSubtotal] = useState(0);
  const shipping = 2000
  let bonus = 500  
  const [selectedItem , setSelected] = useState(0)
  const [itemList, setItemList] = useState([])
  const [selectedList,setSelectedList] = useState([])
  const history = useHistory();
  let total = 0;
  
  let tempTotal = 0
  console.log(itemList)
  console.log(selectedList)
  

  const calculateSubTotal = () => {
    if(selectedList.length !== 0){
      selectedList.map((i,index)=>{
        console.log(itemList[i].item)
        tempTotal += parseFloat(itemList[i].item[0].price) * itemList[i].qty
      })}
      //console.log(itemList)
      console.log(tempTotal)
      if(subTotal !== tempTotal){
        setSubtotal(tempTotal);
      }
  }

  useEffect(() => {
    console.log(selectedList.length)
    if (selectedList.length !== 0)
      calculateSubTotal();
    else 
      setSubtotal(0)
  }, [selectedList, itemList])

  // if(itemList){
  //   axios.get("http://localhost:5000/cart/").then((response)=>{
  //     console.log(response.data);
  //     if(response.data.length != 0 ){
  //       setItemList(response.data)
  //       console.log(response.data)
  //     }
  //   })
  // }
  if(subTotal > 30000){
    bonus = subTotal * 0.05
  }

  const loadCheckOutItems = async () => {
    await axios.get("http://localhost:5000/cart/").then((response)=>{
      console.log(response.data);
      if (response.data.length !== 0 ) {
        setItemList(response.data)
        console.log(response.data)
      }
    })
  }

  const isItemsPicked = () => {
    let isPicked = false;
    if( selectedList.length == 0){
      toast.error("Pick items to checkout")
    }
    else{
      isPicked = true;
    }
    return isPicked;
  }

  useEffect(() => {
    loadCheckOutItems();
  }, [])

console.log(itemList)

  return (
    <div className={styles.component13} style={{display:"flex",alignItems:"left"}}>
      <p className={styles.itemsCart}>Items &gt; Cart</p>
      
      <div className={styles.flexWrapperEight} style={{display:"flex",alignItems:"center" , width : "100%"}}>



      <div className={styles.contentWrapper} style={{width:"100%"}}>
      <div className={styles.leftSide}>    

          <div className={styles.checkBarCont} style={{display : "flex" , flexDirection : "column", marginTop: "70px"}}>
            
            {itemList && itemList.map((item,index)=>{
                       console.log(selectedList.includes(index))   
              return <CheckoutTile key={item._id} cartItem={item} refresher={setItemList} loadCheckOutItems={loadCheckOutItems}
                index={index}
                calculateSubTotal={calculateSubTotal}
                selectSetter={setSelectedList} setSubTotal={setSubtotal} selected={selectedList.includes(index)} selectedList={selectedList}/>
            })           
            } 
          </div>
          
      </div>


         

          </div>

        <div className={styles.rightSide}>



        <div className={styles.itemBlock}>



  <div className={styles.countWrapper}>

          <div className={styles.flexWrapperFourteent}>
            <p className={styles.subtotalt}>Subtotal</p>
            <p className={styles.num20000t}>{subTotal}</p>
          </div>

          <div className={styles.flexWrapperFifteen}>
            <p className={styles.subtotalt}>Shipping <br/> (fixed rate)</p>
            <p className={styles.num20000t}>{shipping}</p>
          </div>

          <div className={styles.flexWrapperFourteent}>
            <p className={styles.loyaltyBonus5mint}>
              Discount<br/>(LKR 30,000 +)
            </p>
            
            <p className={styles.num20000t}>{bonus}</p>
          </div> 
          <div className={styles.flexWrapperThreet} />

      <div className={styles.flexWrapperTent}>
        <p className={styles.totalTaxInclt}>
          Total
        </p>
        <p className={styles.num21500t}>{subTotal - bonus + shipping}</p>
      </div>

      <div className={styles.line5t} />
      <div className={styles.line5t} />

      <div className={styles.flexWrapperElevent}>

        

      {selectedItem!=-99 && itemList &&
      // <Link to={{pathname: "/MakePayment", query: {subTotal : subTotal , bonus : bonus , shipping : shipping , item : itemList[selectedItem]}}}>
        <div onClick={() => {
          if(isItemsPicked()){
            history.push("/MakePayment", [ {subTotal, bonus, shipping, item: itemList[selectedItem]} ])
          }
          }} className={styles.flexWrapperTwentyt}>                  
          <div className={styles.flexWrapperOnet}>
            <p className={styles.payt}>Checkout</p>
          </div>    
        </div>
      // </Link>
      }
        
        </div>
  </div>
    </div>

        </div>       

      </div>
      
    </div>
    
  );
};

export default Checkout;
