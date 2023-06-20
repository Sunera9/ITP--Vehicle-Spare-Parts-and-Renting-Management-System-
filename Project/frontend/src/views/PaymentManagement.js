import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Headder from '../components/Hedder'
import Table from '../components/Table'
import "./Payment.css"

export default function PaymentManagement() {

const [grossIncome, setGrossIncome]=useState(0)
const [text, setText] = useState('')

  return (
    <div className="App">
    <div className="dashboard">        
      <Dashboard/>
    </div>
    <div className="contentBody">
      <div className="headder">
          <Headder gross={grossIncome} setSearchText={setText}/>
      </div>      
      <div className="table">
        <Table setGIn={setGrossIncome} searchText={text}/> 
      </div> 

    </div>     
  </div>
  )
}
