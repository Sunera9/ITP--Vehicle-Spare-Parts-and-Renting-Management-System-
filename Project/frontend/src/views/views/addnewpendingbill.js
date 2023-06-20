import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';

import './addnewpendingbill.css';

function AddNewPendingBill() {

  const [pendingBill, setPendingBill] = useState ({
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
    setPendingBill ((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const savePendingBill = (event) => {
    //to prevent from refreshing
    event.preventDefault();

    //for the tesing purpose
    //console.log(bill);

    // Send bill object to backend database
    fetch('http://localhost:5000/api/utility/pending/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pendingBill)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Bill saved successfully:', data);
      history.push("/viewallpendingbills-sorted");

    })
    .catch(error => {
      console.error('Error saving bill:', error);
    });
  }
 
  return (
    <div className="addnewpendingbill-container">
      <Helmet>
        <title>Utility Module - Add New Pending Bill</title>
      </Helmet>
      <div className="addnewpendingbill-addnewpendingbill">
        <img
          src="/playground_assets/blurredbackground32792-8s9-2000w.png"
          alt="blurredBackground32792"
          className="addnewpendingbill-blurred-background3"
        />
        <img
          src="/playground_assets/rectangle252792-ss-800w.png"
          alt="Rectangle252792"
          className="addnewpendingbill-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22792-9rym-200h.png"
          alt="Rectangle22792"
          className="addnewpendingbill-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32792-ep8-1100h.png"
          alt="Rectangle32792"
          className="addnewpendingbill-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12792-lg6q-200h.png"
          alt="PNGLogoimage12792"
          className="addnewpendingbill-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle102792-8p1n-200h.png"
          alt="Rectangle102792"
          className="addnewpendingbill-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152792-gxe-200h.png"
          alt="Rectangle152792"
          className="addnewpendingbill-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162792-sxwd-200h.png"
          alt="Rectangle162792"
          className="addnewpendingbill-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172792-0hw-200h.png"
          alt="Rectangle172792"
          className="addnewpendingbill-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182792-jk7u-200h.png"
          alt="Rectangle182792"
          className="addnewpendingbill-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192792-adxm-200h.png"
          alt="Rectangle192792"
          className="addnewpendingbill-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202792-c87p-200h.png"
          alt="Rectangle202792"
          className="addnewpendingbill-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212792-pb2n-200h.png"
          alt="Rectangle212792"
          className="addnewpendingbill-rectangle21"
        />
        <span className="addnewpendingbill-text">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text02">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text06">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="addnewpendingbill-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142792-uw6s-200h.png"
          alt="Rectangle142792"
          className="addnewpendingbill-rectangle14"
        />
        <span className="addnewpendingbill-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2793-5u92.svg"
          alt="mdiaccount2793"
          className="addnewpendingbill-mdiaccount"
        />

        <form onSubmit={savePendingBill}>

          <div className="addnewpendingbill-frame25">
            <div className="addnewpendingbill-frame23">
              <span className="addnewpendingbill-text18">
                <span>Enter the new pending bill details here</span>
              </span>
            </div>
          </div>
          <div className="addnewpendingbill-frame251">
            <div className="addnewpendingbill-frame231">
              <span className="addnewpendingbill-text20">
                <span><label>Name</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text42">
              <span><input type='text' className='addnewpendingbill-frame27' placeholder='Name' name='name' value={pendingBill?.name} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewpendingbill-frame252">
            <div className="addnewpendingbill-frame232">
              <span className="addnewpendingbill-text22">
                <span><label>Month</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text44">
              <span><input type='month' className='addnewpendingbill-frame28' name='month' value={pendingBill?.month} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewpendingbill-frame253">
            <div className="addnewpendingbill-frame233">
              <span className="addnewpendingbill-text24">
                <span><label>Year</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text46">
              <span><input type='number' className='addnewpendingbill-frame29' placeholder='Year' name='year' value={pendingBill?.year || 2023} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewpendingbill-frame254">
            <div className="addnewpendingbill-frame234">
              <span className="addnewpendingbill-text26">
                <span><label>Amount</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text48">
              <span><input type='number' className='addnewpendingbill-frame30' placeholder='Amount' name='amount' value={pendingBill?.amount} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewpendingbill-frame255">
            <div className="addnewpendingbill-frame235">
              <span className="addnewpendingbill-text28">
                <span><label>Due Date</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text50">
              <span><input type='date' className='addnewbill-frame31' name='date' value={pendingBill?.date} required onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="addnewpendingbill-frame256">
            <div className="addnewpendingbill-frame236">
              <span className="addnewpendingbill-text30">
                <span><label>Note</label></span>
              </span>
            </div>
          </div>
          <div>
            <span className="addnewpendingbill-text52">
              <span><input type='text' className='addnewpendingbill-frame24' placeholder='Note' name='note' value={pendingBill?.note} onChange={handleInputChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <img
            src="/playground_assets/ellipse12793-knvm-200h.png"
            alt="Ellipse12793"
            className="addnewpendingbill-ellipse1"
          />
          <img
            src="/playground_assets/mdialarmclock2793-mhqm.svg"
            alt="mdialarmclock2793"
            className="addnewpendingbill-mdialarmclock"
          />
          <img
            src="/playground_assets/rectangle262793-cg7ji-200h.png"
            alt="Rectangle262793"
            className="addnewpendingbill-rectangle26"
          />
          <span className="addnewpendingbill-text32">
            <span>
              <button type='submit' style={{ color: 'white', fontWeight: 'bold' }}>
                Add
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle272793-7xrc-200h.png"
            alt="Rectangle272793"
            className="addnewpendingbill-rectangle27"
          />
          <span className="addnewpendingbill-text34">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/viewallpendingbills-sorted'>Cancel</Link>
              </button>
            </span>
          </span>
          <div className="addnewpendingbill-iconparkoutlinefileadditionone">
            <div className="addnewpendingbill-group">
              <img
                src="/playground_assets/vector2793-mpix.svg"
                alt="Vector2793"
                className="addnewpendingbill-vector"
              />
              <img
                src="/playground_assets/vector2793-hh1.svg"
                alt="Vector2793"
                className="addnewpendingbill-vector1"
              />
            </div>
          </div>
          <img
            src="/playground_assets/rectangle312793-kf0i-200h.png"
            alt="Rectangle312793"
            className="addnewpendingbill-rectangle31"
          />
          <span className="addnewpendingbill-text36">
            <span>UTILITY CONTROL</span>
          </span>
          <span className="addnewpendingbill-text38">
            <span>Add New Pending Bill</span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default AddNewPendingBill
