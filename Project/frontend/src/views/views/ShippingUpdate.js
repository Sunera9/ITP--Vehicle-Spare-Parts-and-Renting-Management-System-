import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShippingUpdates from '../components/ShippingUpdate'
 const bg = require('../assets/images/blurredBackground7.png')
export default function ShippingUpdate() {
  return (
    <div style={{backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
        <Header/>
        <Navbar/>
        <ShippingUpdates/>
        <Footer/> 
    </div>
  )
}
