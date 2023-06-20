import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { Link, useHistory, useLocation } from 'react-router-dom'

import './updatependingbilldetails.css'
import axios from 'axios'

const Updatependingbilldetails = () => {

  const location = useLocation();
  const history = useHistory();

  const [bill, setBill] = useState ({
    id: null,
    name: '',
    month: '',
    year: 0,
    amount: 0,
    date: '',
    note: ''
  });

  useEffect (() => {
    if (location.state) {
      setBill (location.state.billToUpdate);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill (prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log (bill);

    try {
      const response = await axios.put (`http://localhost:5000/api/utility/pending/${bill._id}`, bill);
      console.log (response.data);
      //Updatebilldetails (response.data);
      history.push ('/viewallpendingbills-sorted');

    } catch (error) {
      console.log (error);
    }
  };

  return (
    <div className="updatependingbilldetails-container">
      <Helmet>
        <title>Utility Module - Edit Pending Bill</title>
      </Helmet>
      <div className="updatependingbilldetails-updatependingbilldetails">
        <img
          src="/playground_assets/blurredbackground12791-33id-1900w.png"
          alt="blurredBackground12791"
          className="updatependingbilldetails-blurred-background1"
        />
        <img
          src="/playground_assets/rectangle252791-2tjf-800w.png"
          alt="Rectangle252791"
          className="updatependingbilldetails-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22791-a0z-200h.png"
          alt="Rectangle22791"
          className="updatependingbilldetails-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32791-9et-1100h.png"
          alt="Rectangle32791"
          className="updatependingbilldetails-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12791-pdt-200h.png"
          alt="PNGLogoimage12791"
          className="updatependingbilldetails-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle102791-i7t7-200h.png"
          alt="Rectangle102791"
          className="updatependingbilldetails-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152791-lhur-200h.png"
          alt="Rectangle152791"
          className="updatependingbilldetails-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162791-7b5e-200h.png"
          alt="Rectangle162791"
          className="updatependingbilldetails-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172791-3ddn-200h.png"
          alt="Rectangle172791"
          className="updatependingbilldetails-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182791-9b4-200h.png"
          alt="Rectangle182791"
          className="updatependingbilldetails-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192791-2289-200h.png"
          alt="Rectangle192791"
          className="updatependingbilldetails-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202791-py4y-200h.png"
          alt="Rectangle202791"
          className="updatependingbilldetails-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212791-rvef-200h.png"
          alt="Rectangle212791"
          className="updatependingbilldetails-rectangle21"
        />
        <span className="updatependingbilldetails-text">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text02">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text06">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="updatependingbilldetails-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142791-rgaw-200h.png"
          alt="Rectangle142791"
          className="updatependingbilldetails-rectangle14"
        />
        <span className="updatependingbilldetails-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2791-yvjj.svg"
          alt="mdiaccount2791"
          className="updatependingbilldetails-mdiaccount"
        />
        <form onSubmit={handleSubmit}>
          <div className="updatependingbilldetails-frame25">
            <div className="updatependingbilldetails-frame23">
              <span className="updatependingbilldetails-text18">
                <span>Bill ID</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text20">
              <span><input type='text' className='updatependingbilldetails-frame24' id='id' value={bill._id} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame251">
            <div className="updatependingbilldetails-frame231">
              <span className="updatependingbilldetails-text22">
                <span>Name</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text24">
              <span><input type='text' className='updatependingbilldetails-frame241' id='name' name='name' value={bill.name} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame252">
            <div className="updatependingbilldetails-frame232">
              <span className="updatependingbilldetails-text26">
                <span>Month</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text28">
              <span><input type='month' className='updatependingbilldetails-frame242' id='month' name='month' value={bill.month} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame253">
            <div className="updatependingbilldetails-frame233">
              <span className="updatependingbilldetails-text30">
                <span>Year</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text32">
              <span><input type='number' className='updatependingbilldetails-frame243' id='year' name='year' value={bill.year} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame254">
            <div className="updatependingbilldetails-frame234">
              <span className="updatependingbilldetails-text34">
                <span>Amount</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text36">
              <span><input type='number' className='updatependingbilldetails-frame244' id='amount' name='amount' value={bill.amount} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame255">
            <div className="updatependingbilldetails-frame235">
              <span className="updatependingbilldetails-text38">
                <span>Due Date</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text40">
              <span><input type='date' className='updatependingbilldetails-frame245' id='date' name='date' value={bill.date} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatependingbilldetails-frame256">
            <div className="updatependingbilldetails-frame236">
              <span className="updatependingbilldetails-text42">
                <span>Note</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatependingbilldetails-text44">
              <span><input type='text' className='updatependingbilldetails-frame246' id='note' name='note' value={bill.note} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <img
            src="/playground_assets/ellipse12791-rjtl-200h.png"
            alt="Ellipse12791"
            className="updatependingbilldetails-ellipse1"
          />
          <img
            src="/playground_assets/materialsymbolsstickynote22791-1kg8.svg"
            alt="materialsymbolsstickynote22791"
            className="updatependingbilldetails-materialsymbolsstickynote2"
          />
          <img
            src="/playground_assets/mdialarmclock2791-kp.svg"
            alt="mdialarmclock2791"
            className="updatependingbilldetails-mdialarmclock"
          />
          <img
            src="/playground_assets/rectangle262791-t66o-200h.png"
            alt="Rectangle262791"
            className="updatependingbilldetails-rectangle26"
          />
          <span className="updatependingbilldetails-text46">
            <span>
              <button type='submit' style={{ color: 'white', fontWeight: 'bold' }}>
                Update
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle272791-yy56.svg"
            alt="Rectangle272791"
            className="updatependingbilldetails-rectangle27"
          />
          <span className="updatependingbilldetails-text48">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/viewallpendingbills-sorted'>Cancel</Link>
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle312791-j6o-200h.png"
            alt="Rectangle312791"
            className="updatependingbilldetails-rectangle31"
          />
          <span className="updatependingbilldetails-text50">
            <span>UTILITY CONTROL</span>
          </span>
          <span className="updatependingbilldetails-text52">
            <span>Edit Pending Bill Details</span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Updatependingbilldetails