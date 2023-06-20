import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ShippingAddress from '../components/ShippingAddress'
 const bg = require('../assets/images/blurredBackground7.png')
export default function Shipping() {
  return (
    <div >
        <Header/>
        <Navbar/>
        <ShippingAddress/>
        <Footer/>
        
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}
