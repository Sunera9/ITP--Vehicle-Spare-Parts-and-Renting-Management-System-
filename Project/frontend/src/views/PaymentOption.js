import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PaymentOptionl from '../components/Paymentoption'
 const bg = require('../assets/images/blurredBackground7.png')
export default function PaymentOption() {
  return (   
    <div >    
      <Header/> 
      <Navbar/>
      <PaymentOptionl/>
    <Footer/>
    </div>
    
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}
