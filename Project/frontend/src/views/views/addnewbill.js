import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './addnewbill.css'

function AddNewBill() {
  const [bill, setBill] = useState({
    name: '',
    month: '',
    year: '',
    amount: '',
    date: '',
    note: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveBill = (event) => {
    //to prevent from refreshing
    event.preventDefault();

    //for the tesing purpose
    //console.log(bill);

    // Send bill object to backend database
    fetch('http://localhost:5000/api/utility/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bill)
    })
    .then(response => response.json())
    .then(data => {
      console.log ('Bill saved successfully:', data);
      history.push ("/view-settledbills-dashboard");
    })
    .catch(error => {
      console.error('Error saving bill:', error);
    });
  }
  
  return (
    <div className="addnewbill-container">
      <Helmet>
        <title>Utility Module - Add New Bill</title>
      </Helmet>
      <div className="addnewbill-addnewbill">
        <img
          src="/playground_assets/blurredbackground22792-vr4c-2000w.png"
          alt="blurredBackground22792"
          className="addnewbill-blurred-background2"
        />
        <img
          src="/playground_assets/rectangle252792-03i-800w.png"
          alt="Rectangle252792"
          className="addnewbill-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22792-t1lj-200h.png"
          alt="Rectangle22792"
          className="addnewbill-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32792-4mgb-1100h.png"
          alt="Rectangle32792"
          className="addnewbill-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12792-lthb-200h.png"
          alt="PNGLogoimage12792"
          className="addnewbill-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle102792-vaoe-200h.png"
          alt="Rectangle102792"
          className="addnewbill-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152792-qtr6-200h.png"
          alt="Rectangle152792"
          className="addnewbill-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162792-zdqg-200h.png"
          alt="Rectangle162792"
          className="addnewbill-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172792-k9c6-200h.png"
          alt="Rectangle172792"
          className="addnewbill-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182792-31lh-200h.png"
          alt="Rectangle182792"
          className="addnewbill-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192792-oeiv-200h.png"
          alt="Rectangle192792"
          className="addnewbill-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202792-ltwm-200h.png"
          alt="Rectangle202792"
          className="addnewbill-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212792-1p32-200h.png"
          alt="Rectangle212792"
          className="addnewbill-rectangle21"
        />
        <span className="addnewbill-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text06">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text08">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text10">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text12">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text14">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text16">
        <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="addnewbill-text18">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142792-8bue-200h.png"
          alt="Rectangle142792"
          className="addnewbill-rectangle14"
        />
        <span className="addnewbill-text20">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2792-jtla.svg"
          alt="mdiaccount2792"
          className="addnewbill-mdiaccount"
        />

        <form onSubmit={saveBill}>

          <div className="addnewbill-frame23">
            <span className="addnewbill-text22">
              <span>Enter the new settled bill details here</span>
            </span>
          </div>
          <div className="addnewbill-frame25">
            <div className="addnewbill-frame231">
              <span className="addnewbill-text24">
                <span><label>Name</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewbill-text44">
              <span><input type='text' className='addnewbill-frame27' placeholder='Name' name='name' value={bill?.name} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewbill-frame251">
            <div className="addnewbill-frame232">
              <span className="addnewbill-text26">
                <span><label>Month</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewbill-text">
              <span><input type='month' className='addnewbill-frame28' name='month' value={bill?.month} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewbill-frame252">
            <div className="addnewbill-frame233">
              <span className="addnewbill-text28">
                <span><label>Year</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewbill-text46">
              <span><input type='number' className='addnewbill-frame29' placeholder='Year' name='year' value={bill?.year || 2023} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewbill-frame253">
            <div className="addnewbill-frame234">
              <span className="addnewbill-text30">
                <span><label>Amount</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewbill-text48">
              <span><input type='number' className='addnewbill-frame30' placeholder='Amount' name='amount' value={bill?.amount} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewbill-frame254">
            <div className="addnewbill-frame235">
              <span className="addnewbill-text32">
                <span><label>Date</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewbill-text50">
              <span><input type='date' className='addnewbill-frame31' name='date' value={bill?.date} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewbill-frame236">
            <span className="addnewbill-text34">
              <span><label>Note</label></span>
            </span>
          </div>
          <div>
            <span className="addnewbill-text52">
              <span><input type='text' className='addnewbill-frame24' placeholder='Note' name='note' value={bill?.note} onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          
          <img
            src="/playground_assets/ellipse12792-0wvf-200h.png"
            alt="Ellipse12792"
            className="addnewbill-ellipse1"
          />
          <img
            src="/playground_assets/rectangle262792-yz84-200h.png"
            alt="Rectangle262792"
            className="addnewbill-rectangle26"
          />
          <span className="addnewbill-text36">
            <span>
              <button type='submit' style={{ color: 'white', fontWeight: 'bold' }}>
                Add
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle272792-o6n-200h.png"
            alt="Rectangle272792"
            className="addnewbill-rectangle27"
          />
          <span className="addnewbill-text38">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/view-settledbills-dashboard'>Cancel</Link>
              </button>
            </span>
          </span>
          <div className="addnewbill-iconparkoutlinefileadditionone">
            <div className="addnewbill-group">
              <img
                src="/playground_assets/vector2792-7ng.svg"
                alt="Vector2792"
                className="addnewbill-vector"
              />
              <img
                src="/playground_assets/vector2792-r4eq.svg"
                alt="Vector2792"
                className="addnewbill-vector1"
              />
            </div>
          </div>
          <img
            src="/playground_assets/rectangle312792-61qp-200h.png"
            alt="Rectangle312792"
            className="addnewbill-rectangle31"
          />
          <span className="addnewbill-text40">
            <span>UTILITY CONTROL</span>
          </span>
          <span className="addnewbill-text42">
            <span>Add New Bill</span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default AddNewBill
