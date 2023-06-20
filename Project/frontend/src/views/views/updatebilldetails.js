import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import './updatebilldetails.css'
import axios from 'axios';

const Updatebilldetails = () => {

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
      const response = await axios.put (`http://localhost:5000/api/utility/${bill._id}`, bill);
      console.log (response.data);
      //Updatebilldetails (response.data);
      history.push ('/view-settledbills-dashboard');

    } catch (error) {
      console.log (error);
    }
  };

  return (
    <div className="updatebilldetails-container">
      <Helmet>
        <title>Utility Module - Edit Bill</title>
      </Helmet>
      <div className="updatebilldetails-updatebilldetails">
        <img
          src="/playground_assets/blurredbackground12763-5mnv-1900w.png"
          alt="blurredBackground12763"
          className="updatebilldetails-blurred-background1"
        />
        <img
          src="/playground_assets/rectangle252764-0i8m-700h.png"
          alt="Rectangle252764"
          className="updatebilldetails-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22765-hokw-200h.png"
          alt="Rectangle22765"
          className="updatebilldetails-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32766-px3b-1100h.png"
          alt="Rectangle32766"
          className="updatebilldetails-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12767-cmz-200h.png"
          alt="PNGLogoimage12767"
          className="updatebilldetails-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle102768-saac-200h.png"
          alt="Rectangle102768"
          className="updatebilldetails-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152769-w23-200h.png"
          alt="Rectangle152769"
          className="updatebilldetails-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162761-jyv4-200h.png"
          alt="Rectangle162761"
          className="updatebilldetails-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172761-fpur-200h.png"
          alt="Rectangle172761"
          className="updatebilldetails-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182761-sz8o-200h.png"
          alt="Rectangle182761"
          className="updatebilldetails-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192761-334-200h.png"
          alt="Rectangle192761"
          className="updatebilldetails-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202761-tmyz-200h.png"
          alt="Rectangle202761"
          className="updatebilldetails-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212761-c5nt-200h.png"
          alt="Rectangle212761"
          className="updatebilldetails-rectangle21"
        />
        <span className="updatebilldetails-text">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text02">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text06">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="updatebilldetails-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142762-7b1q-200h.png"
          alt="Rectangle142762"
          className="updatebilldetails-rectangle14"
        />
        <span className="updatebilldetails-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2762-93k5w.svg"
          alt="mdiaccount2762"
          className="updatebilldetails-mdiaccount"
        />
        <img
          src="/playground_assets/ellipse12767-ui6m-200h.png"
          alt="Ellipse12767"
          className="updatebilldetails-ellipse1"
        />
        <img
          src="/playground_assets/vector2767-y41.svg"
          alt="Vector2767"
          className="updatebilldetails-vector"
        />
        <img
          src="/playground_assets/rectangle262767-zqya-200h.png"
          alt="Rectangle262767"
          className="updatebilldetails-rectangle26"
        />
        <form onSubmit={handleSubmit}>
          <span className="updatebilldetails-text18">
            <span>
              <button type='submit' style={{ color: 'white', fontWeight: 'bold' }}>
                {/*<Link to='/view-settledbills-dashboard'>*/}
                  Update
                {/*</Link>*/}
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle272767-mibo-200h.png"
            alt="Rectangle272767"
            className="updatebilldetails-rectangle27"
          />
          <span className="updatebilldetails-text20">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/view-settledbills-dashboard'>Cancel</Link>
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle302767-u7um-200h.png"
            alt="Rectangle302767"
            className="updatebilldetails-rectangle30"
          />
          <span className="updatebilldetails-text22">
            <span>UTILITY CONTROL</span>
          </span>
          <span className="updatebilldetails-text24">
            <span>Edit Bill Details</span>
          </span>
          <div className="updatebilldetails-frame45">
            <div className="updatebilldetails-frame236">
              <span className="updatebilldetails-text50">
                <span>Bill ID</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text52">
              <span><input type='text' className='updatebilldetails-frame46' id='id' value={bill._id} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame25">
            <div className="updatebilldetails-frame23">
              <span className="updatebilldetails-text26">
                <span>Name</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text38">
              <span><input type='text' className='updatebilldetails-frame24' id='name' name='name' value={bill.name} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame35">
            <div className="updatebilldetails-frame231">
              <span className="updatebilldetails-text28">
                <span>Month</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text40">
              <span><input type='month' className='updatebilldetails-frame40' id='month' name='month' value={bill.month} onChange={handleChange} pattern="\d{4}-\d{2}" required style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame36">
            <div className="updatebilldetails-frame232">
              <span className="updatebilldetails-text30">
                <span>Year</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text42">
              <span><input type='number' className='updatebilldetails-frame41' id='year' name='year' value={bill.year} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame37">
            <div className="updatebilldetails-frame233">
              <span className="updatebilldetails-text32">
                <span>Amount</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text44">
              <span><input type='number' className='updatebilldetails-frame42' id='amount' name='amount' value={bill.amount} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame38">
            <div className="updatebilldetails-frame234">
              <span className="updatebilldetails-text34">
                <span>Date</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text46">
              <span><input type='date' className='updatebilldetails-frame43' id='date' name='date' value={bill.date} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
            </span>
          </div>
          <div className="updatebilldetails-frame39">
            <div className="updatebilldetails-frame235">
              <span className="updatebilldetails-text36">
                <span>Note</span>
              </span>
            </div>
          </div>
          <div>
            <span className="updatebilldetails-text48">
              <span><input type='text' className='updatebilldetails-frame44' id='note' name='note' value={bill.note} onChange={handleChange} style={{ textAlign: 'center'}} /></span>
            </span>
          </div>       
        </form>
      </div>
    </div>
  )
}

export default Updatebilldetails