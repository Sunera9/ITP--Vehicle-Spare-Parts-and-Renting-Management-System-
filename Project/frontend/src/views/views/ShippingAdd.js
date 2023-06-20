import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShippingUpdates from '../components/ShippingUpdate'
import ShippingAddForm from '../components/ShippingAddForm'
 const bg = require('../assets/images/blurredBackground7.png')
export default function ShippingUpdate() {
  return (
    <div >
        <Header/>
        <Navbar/>
        <ShippingAddForm/>
        <Footer/> 
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}