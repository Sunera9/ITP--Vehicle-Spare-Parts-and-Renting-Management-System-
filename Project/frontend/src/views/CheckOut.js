import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Checkout from '../components/Checkout'
 const bg = require('../assets/images/blurredBackground7.png')

export default function CheckOut() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Checkout/>
        <Footer/> 
        
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}>
