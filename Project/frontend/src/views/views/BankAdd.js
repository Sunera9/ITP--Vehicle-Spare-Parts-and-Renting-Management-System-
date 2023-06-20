import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddBank from '../components/AddBank'
 const bg = require('../assets/images/blurredBackground7.png')
export default function BankAdd() {
  return (
    <div >
        <Header/>
        <Navbar/>
        <AddBank/>
        <Footer/> 
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}
