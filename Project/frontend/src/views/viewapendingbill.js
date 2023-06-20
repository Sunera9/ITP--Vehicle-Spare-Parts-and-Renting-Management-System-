import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import './viewapendingbill.css';

function Viewapendingbill (props) {

  const [billDetails, setBillDetails] = useState({});
  const { billId } = useParams();

  useEffect (() => {
    const fetchBillDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/utility/pending/${billId}`);
        setBillDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchBillDetails();
  }, [billId]);

  return (
    <div className="viewapendingbill-container">
      <Helmet>
        <title>Utility Module - View Pending Bill</title>
      </Helmet>
      <div className="viewapendingbill-viewapendingbill">
        <img
          src="/playground_assets/blurredbackground52794-v4ow-2000w.png"
          alt="blurredBackground52794"
          className="viewapendingbill-blurred-background5"
        />
        <img
          src="/playground_assets/rectangle312794-swj-200h.png"
          alt="Rectangle312794"
          className="viewapendingbill-rectangle31"
        />
        <img
          src="/playground_assets/rectangle252794-lv5l-700h.png"
          alt="Rectangle252794"
          className="viewapendingbill-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22794-fof-200h.png"
          alt="Rectangle22794"
          className="viewapendingbill-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32794-tleb-1100h.png"
          alt="Rectangle32794"
          className="viewapendingbill-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12794-rcpe-200h.png"
          alt="PNGLogoimage12794"
          className="viewapendingbill-pn-logoimage1"
        />
        <span className="viewapendingbill-text">
          <span>UTILITY CONTROL</span>
        </span>
        <img
          src="/playground_assets/rectangle102794-ju4-200h.png"
          alt="Rectangle102794"
          className="viewapendingbill-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152794-8io-200h.png"
          alt="Rectangle152794"
          className="viewapendingbill-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162794-wcd9-200h.png"
          alt="Rectangle162794"
          className="viewapendingbill-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172794-4xoo-200h.png"
          alt="Rectangle172794"
          className="viewapendingbill-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182794-zwv-200h.png"
          alt="Rectangle182794"
          className="viewapendingbill-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192794-or9-200h.png"
          alt="Rectangle192794"
          className="viewapendingbill-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202794-188-200h.png"
          alt="Rectangle202794"
          className="viewapendingbill-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212794-0olo-200h.png"
          alt="Rectangle212794"
          className="viewapendingbill-rectangle21"
        />
        <span className="viewapendingbill-text02">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text06">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="viewapendingbill-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142794-iljd-200h.png"
          alt="Rectangle142794"
          className="viewapendingbill-rectangle14"
        />
        <span className="viewapendingbill-text18">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount2794-85b.svg"
          alt="mdiaccount2794"
          className="viewapendingbill-mdiaccount"
        />
        <img
          src="/playground_assets/rectangle272794-3nfx-200h.png"
          alt="Rectangle272794"
          className="viewapendingbill-rectangle27"
        />
        <form>
          <span className="viewapendingbill-text20">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/viewallpendingbills-sorted'>Back</Link>
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle282794-e54-300w.png"
            alt="Rectangle282794"
            className="viewapendingbill-rectangle28"
          />
          <img
            src="/playground_assets/ellipse22794-rpoq-200h.png"
            alt="Ellipse22794"
            className="viewapendingbill-ellipse2"
          />
          <img
            src="/playground_assets/materialsymbolsstickynote22794-6fd.svg"
            alt="materialsymbolsstickynote22794"
            className="viewapendingbill-materialsymbolsstickynote2"
          />
          <span className="viewapendingbill-text22">
            <span>PENDING</span>
          </span>
          <div className="viewapendingbill-frame25">
            <div className="viewapendingbill-frame23">
              <span className="viewapendingbill-text24">
                <span>Bill ID</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text26">
              <span className='viewapendingbill-frame24 viewDetails'>{billDetails._id}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame251">
            <div className="viewapendingbill-frame231">
              <span className="viewapendingbill-text28">
                <span>Name</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text30">
              <span className='viewapendingbill-frame241 viewDetails'>{billDetails.name}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame252">
            <div className="viewapendingbill-frame232">
              <span className="viewapendingbill-text32">
                <span>Month</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text34">
              <span className='viewapendingbill-frame242 viewDetails'>{billDetails.month}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame253">
            <div className="viewapendingbill-frame233">
              <span className="viewapendingbill-text36">
                <span>Year</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text38">
              <span className='viewapendingbill-frame243 viewDetails'>{billDetails.year}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame254">
            <div className="viewapendingbill-frame234">
              <span className="viewapendingbill-text40">
                <span>Amount</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text42">
              <span className='viewapendingbill-frame244 viewDetails'>{billDetails.amount}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame255">
            <div className="viewapendingbill-frame235">
              <span className="viewapendingbill-text44">
                <span>Due Date</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text46">
              <span className='viewapendingbill-frame245 viewDetails'>{billDetails.date}</span>
            </span>
          </div>
          <div className="viewapendingbill-frame256">
            <div className="viewapendingbill-frame236">
              <span className="viewapendingbill-text48">
                <span>Note</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewapendingbill-text50">
              <span className='viewapendingbill-frame246 viewDetails'>{billDetails.note}</span>
            </span>
          </div>
          <img
            src="/playground_assets/mdialarmclock2795-yxmn.svg"
            alt="mdialarmclock2795"
            className="viewapendingbill-mdialarmclock"
          />
        </form>
      </div>
    </div>
  )
}

export default Viewapendingbill
