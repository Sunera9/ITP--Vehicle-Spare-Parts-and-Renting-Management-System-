import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddCard from '../components/AddCard'
 const bg = require('../assets/images/blurredBackground7.png')
export default function CreaditCardAdd() {
  return (
    <div >
        <Header/>
        <Navbar/>
        <AddCard/>
        <Footer/> 
    </div>
  )
}

// style={{backgroundImage: `url(${bg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',}}
