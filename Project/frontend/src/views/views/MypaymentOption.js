import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaymentUpdate from '../components/PaymentUpdate'
// const bg = require('../assets/images/blurredBackground7.png')
export default function MypaymentOption() {
  return (
    <div >
        <Header/>
        <Navbar/>
        <PaymentUpdate/>
        <Footer/>        
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}
