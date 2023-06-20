import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UpdateBank from '../components/UpdateBank'
 const bg = require('../assets/images/blurredBackground7.png')
export default function UpdateBankOpt() {
  return (
    <div style={{backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
        <Header/>
        <Navbar/>
        <UpdateBank/>
        <Footer/> 

    </div>
  )
}
