import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom'

import './searchResult-pendingBills.css';

function SearchResultPendingBills (props) {

  const [data, setData] = useState ([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect (() => {
    fetch (`http://localhost:5000/api/utility/pending/search/${searchQuery}`)
    .then (res => res.json())
    .then (data => setData (data))
    .catch (err => console.log (err));
  }, [searchQuery]);

  return (
    <div className="viewallpendingbills-sorted-container">
      <Helmet>
        <title>Utility Module - Pending Bills</title>
      </Helmet>
      <div className="viewallpendingbills-sorted-viewallpendingbills-sorted">
        <img
          src="/playground_assets/rectangle22522-0yyp-200h.png"
          alt="Rectangle22522"
          className="viewallpendingbills-sorted-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32522-bf2d-1100h.png"
          alt="Rectangle32522"
          className="viewallpendingbills-sorted-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12522-s8xb-200h.png"
          alt="PNGLogoimage12522"
          className="viewallpendingbills-sorted-pn-logoimage1"
        />
        <span className="viewallpendingbills-sorted-text">
            <span>PENDING BILLS</span>
        </span>
        <img
          src="/playground_assets/rectangle72523-0sl-200h.png"
          alt="Rectangle72523"
          className="viewallpendingbills-sorted-rectangle7"
        />
        <img
          src="/playground_assets/rectangle222523-lp5k-200h.png"
          alt="Rectangle222523"
          className="viewallpendingbills-sorted-rectangle22"
        />
        <span className="viewallpendingbills-sorted-text04">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/addnewpendingbill'>Add New Bill</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text06">
          <span>
          <button style={{ color: 'white', fontWeight: 'bold' }}>
              <a href='http://localhost:5000/api/utility/download_report/pending_bill' download>
                Download Report
              </a>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle102523-t7o-200h.png"
          alt="Rectangle102523"
          className="viewallpendingbills-sorted-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152523-8qmq-200h.png"
          alt="Rectangle152523"
          className="viewallpendingbills-sorted-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162523-gmq-200h.png"
          alt="Rectangle162523"
          className="viewallpendingbills-sorted-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172523-t2ul-200h.png"
          alt="Rectangle172523"
          className="viewallpendingbills-sorted-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182523-vjw-200h.png"
          alt="Rectangle182523"
          className="viewallpendingbills-sorted-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192523-qvdc-200h.png"
          alt="Rectangle192523"
          className="viewallpendingbills-sorted-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202523-pgcq-200h.png"
          alt="Rectangle202523"
          className="viewallpendingbills-sorted-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212523-xi4h-200h.png"
          alt="Rectangle212523"
          className="viewallpendingbills-sorted-rectangle21"
        />
        <span className="viewallpendingbills-sorted-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text18">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text20">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text22">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142523-gg3k-200h.png"
          alt="Rectangle142523"
          className="viewallpendingbills-sorted-rectangle14"
        />
        <span className="viewallpendingbills-sorted-text24">
          <span>Log Out</span>
        </span>
        <img
          src="/playground_assets/mdiaccount2523-tc4.svg"
          alt="mdiaccount2523"
          className="viewallpendingbills-sorted-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd2523-1cw.svg"
          alt="materialsymbolsadd2523"
          className="viewallpendingbills-sorted-materialsymbolsadd"
        />
        <img
          src="/playground_assets/materialsymbolsdownloadrounded2523-ofc8.svg"
          alt="materialsymbolsdownloadrounded2523"
          className="viewallpendingbills-sorted-materialsymbolsdownloadrounded"
        />
        <div className="viewallpendingbills-sorted-frame22 viewallpendingbills-sorted-frame22">
          <table id='bills'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
                {data.map((bill, index) => (
                    <tr key={index}>
                        <td>{bill.name}</td>
                        <td>{bill.month}</td>
                        <td>{bill.amount}</td>
                        <td>{bill.date}</td>
                        <td>{bill.note}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <img
          src="/playground_assets/rectangle232525-i7fm-200h.png"
          alt="Rectangle232525"
          className="viewallpendingbills-sorted-rectangle23"
        />
        <span className="viewallpendingbills-sorted-text70">
          <span>Displaying Search Results For</span>
        </span>
        <span className="viewallpendingbills-sorted-text72">
          <span>: {searchQuery}</span>
        </span>
        <img
          src="/playground_assets/rectangle242525-sn0y-200h.png"
          alt="Rectangle242525"
          className="viewallpendingbills-sorted-rectangle24"
        />
        <span className="viewallpendingbills-sorted-text74">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/viewallpendingbills-sorted'>Back</Link>
            </button>
          </span>
        </span>
      </div>
    </div>
  )
}

export default SearchResultPendingBills
