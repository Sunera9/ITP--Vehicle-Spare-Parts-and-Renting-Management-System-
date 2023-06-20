import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import './viewasettledbill.css'

function Viewasettledbill() {

  const [billDetails, setBillDetails] = useState({});
  const { billId } = useParams();

  useEffect (() => {
    const fetchBillDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/utility/${billId}`);
        setBillDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchBillDetails();
  }, [billId]);

  return (
    <div className="viewasettledbill-container">
      <Helmet>
        <title>Utility Module - View Bill</title>
      </Helmet>
      <div className="viewasettledbill-viewasettledbill">
        <img
          src="/playground_assets/blurredbackground42793-x03b-2000w.png"
          alt="blurredBackground42793"
          className="viewasettledbill-blurred-background4"
        />
        <img
          src="/playground_assets/rectangle252793-wkdu-700h.png"
          alt="Rectangle252793"
          className="viewasettledbill-rectangle25"
        />
        <img
          src="/playground_assets/rectangle22793-5jv9-200h.png"
          alt="Rectangle22793"
          className="viewasettledbill-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32793-jr0b-1100h.png"
          alt="Rectangle32793"
          className="viewasettledbill-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12793-3o48-200h.png"
          alt="PNGLogoimage12793"
          className="viewasettledbill-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle102793-nmtl-200h.png"
          alt="Rectangle102793"
          className="viewasettledbill-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152793-cfll-200h.png"
          alt="Rectangle152793"
          className="viewasettledbill-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162793-uskv-200h.png"
          alt="Rectangle162793"
          className="viewasettledbill-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172793-j49s-200h.png"
          alt="Rectangle172793"
          className="viewasettledbill-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182793-jgeu-200h.png"
          alt="Rectangle182793"
          className="viewasettledbill-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192793-559-200h.png"
          alt="Rectangle192793"
          className="viewasettledbill-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202793-q6de-200h.png"
          alt="Rectangle202793"
          className="viewasettledbill-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212793-vch-200h.png"
          alt="Rectangle212793"
          className="viewasettledbill-rectangle21"
        />
        <span className="viewasettledbill-text">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text02">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text04">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text06">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="viewasettledbill-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142793-kb4v-200h.png"
          alt="Rectangle142793"
          className="viewasettledbill-rectangle14"
        />
        <span className="viewasettledbill-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2793-w60n.svg"
          alt="mdiaccount2793"
          className="viewasettledbill-mdiaccount"
        />
        <img
          src="/playground_assets/rectangle272793-jonb-200h.png"
          alt="Rectangle272793"
          className="viewasettledbill-rectangle27"
        />
        <form>
          <span className="viewasettledbill-text18">
            <span>
              <button style={{ color: 'white', fontWeight: 'bold' }}>
                <Link to='/view-settledbills-dashboard'>Back</Link>
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/rectangle282793-gpno-300w.png"
            alt="Rectangle282793"
            className="viewasettledbill-rectangle28"
          />
          <img
            src="/playground_assets/ellipse22793-6nk-200h.png"
            alt="Ellipse22793"
            className="viewasettledbill-ellipse2"
          />
          <img
            src="/playground_assets/materialsymbolsstickynote22793-ef2g.svg"
            alt="materialsymbolsstickynote22793"
            className="viewasettledbill-materialsymbolsstickynote2"
          />
          <span className="viewasettledbill-text20">
            <span>SETTLED</span>
          </span>
          <div className="viewasettledbill-frame25">
            <div className="viewasettledbill-frame23">
              <span className="viewasettledbill-text22">
                <span>Bill ID</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text24">
              <span className='viewasettledbill-frame24 viewDetails'>{billDetails._id}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame251">
            <div className="viewasettledbill-frame231">
              <span className="viewasettledbill-text26">
                <span>Name</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text28">
              <span className='viewasettledbill-frame241 viewDetails'>{billDetails.name}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame252">
            <div className="viewasettledbill-frame232">
              <span className="viewasettledbill-text30">
                <span>Month</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text32">
              <span className='viewasettledbill-frame242 viewDetails'>{billDetails.month}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame253">
            <div className="viewasettledbill-frame233">
              <span className="viewasettledbill-text34">
                <span>Year</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text36">
              <span className='viewasettledbill-frame243 viewDetails'>{billDetails.year}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame254">
            <div className="viewasettledbill-frame234">
              <span className="viewasettledbill-text38">
                <span>Amount</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text40">
              <span className='viewasettledbill-frame244 viewDetails'>{billDetails.amount}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame255">
            <div className="viewasettledbill-frame235">
              <span className="viewasettledbill-text42">
                <span>Date</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text44">
              <span className='viewasettledbill-frame245 viewDetails'>{billDetails.date}</span>
            </span>
          </div>
          <div className="viewasettledbill-frame256">
            <div className="viewasettledbill-frame236">
              <span className="viewasettledbill-text46">
                <span>Note</span>
              </span>
            </div>
          </div>
          <div>
            <span className="viewasettledbill-text48">
              <span className='viewasettledbill-frame246 viewDetails'>{billDetails.note}</span>
            </span>
          </div>
          <img
            src="/playground_assets/iconparkoutlinecorrect2794-wjh.svg"
            alt="iconparkoutlinecorrect2794"
            className="viewasettledbill-iconparkoutlinecorrect"
          />
          <img
            src="/playground_assets/rectangle312794-rivs-200h.png"
            alt="Rectangle312794"
            className="viewasettledbill-rectangle31"
          />
        </form>
        <span className="viewasettledbill-text50">
          <span>UTILITY CONTROL</span>
        </span>
      </div>
    </div>
  );
}

export default Viewasettledbill
