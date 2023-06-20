import React, { useEffect, useRef, useState } from "react";
import styles from "../components/Checkout.module.scss";
import axios from "axios";
export default function CheckoutTile(props){
  console.log(props)
    const refresher = props.refresher
    const totalAdd = props.totalAdd
    const cartItem = props.cartItem
    const {userId, productId , qty} = cartItem
    const {name,price, image, quantity} = cartItem.item[0]
    //console.log(cartItem.item);
    
    const updateRef = useRef(null)
    const selectSetter = props.selectSetter
    const index = props.index
    const selectedList = props.selectedList
    
    
    return(<div className={styles.checkBarCont} style={{marginLeft : "5px"}}>
        
        
        <input type="checkbox" name="item" className={styles.checkBox} id={cartItem ? cartItem._id : ''} defaultChecked={props.selected} onChange={(e)=>{
              console.log('Added')
              if(e.target.checked){
                //const newList = selectedList
                //newList.push(index)
                selectSetter([...selectedList, index])
                
              }else{
                //const newList = selectedList
                //newList.splice(index,1)
                const filteredIndexes = selectedList.filter(itemIndex => itemIndex !== index)
                selectSetter(filteredIndexes)
              }
              
            
          }}/>
          <label htmlFor={cartItem._id} >

        <div className={styles.checkBar}>   
            
        
        <img style={{cursor : "pointer"}} onClick={()=>{
          let row = {
                userId : userId,
                productId : productId               
          }
          axios.delete("http://localhost:5000/cart",{data : row}).then((response)=>{
            selectSetter(selectedList.filter(itemIndex => index !== itemIndex));
            props.loadCheckOutItems()
          })
        }}
            alt=""
            className={styles.vectorSix}
            src="https://static.overlay-tech.com/assets/ac9794f2-db06-43f8-b9a3-5a48d30a5816.svg"
          />
        
        <div className={styles.textCont}>
        <p className={styles.hondaCivicSparkPlugs}>
           {name}
        </p>

        {/* <p className={styles.itemNo42Two}>{company_name}</p> */}
        </div>

          

        {<input type="number"id="num1" min="1" max={quantity} ref={updateRef} defaultValue={qty} className={styles.count} onChange={(e)=>{
            //console.log(e.target.value)
            const data = {
              productId : cartItem.item[0]._id,
              qty : parseInt(e.target.value)
            }   
            console.log(data)
            axios.post("http://localhost:5000/cart/",data).then((response)=>{
              //refresher([])
              props.loadCheckOutItems();
            }).catch((err)=>{
              
            })
            console.log(cartItem);
           
          
        }}/>}
        

        <img
          alt=""
          className={styles.rectangle29}
          src={`http://localhost:5000/${image}`}
        />
        <p className={styles.lkr25000Two}>LKR {price}</p>

        </div>
        </label>
        </div>)
}
