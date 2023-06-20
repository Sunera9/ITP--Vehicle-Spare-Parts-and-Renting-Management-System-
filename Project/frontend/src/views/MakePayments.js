import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MakePayment from '../components/MakePayment'
 const bg = require('../assets/images/blurredBackground7.png')
export default function MakePayments() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <MakePayment/>
        <Footer/> 
        
    </div>
  )
}
// style={{backgroundImage: `url(${bg})`,
// backgroundRepeat: 'no-repeat',
// backgroundPosition: 'center',
// backgroundSize: 'cover',}}>