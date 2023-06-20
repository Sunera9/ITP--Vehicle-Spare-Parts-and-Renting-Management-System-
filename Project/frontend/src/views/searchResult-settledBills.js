import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom' 

import './searchResult-settledBills.css'

function SearchResultSettledBills () {

  const [data, setData] = useState ([]);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect (() => {
    fetch (`http://localhost:5000/api/utility/search/${searchQuery}`)
    .then (res => res.json())
    .then (data => setData (data))
    .catch (err => console.log (err));
  }, [searchQuery]);

  return (
    <div className="view-settledbills-dashboard-container">
      <Helmet>
        <title>Utility Module - Settled Bills</title>
      </Helmet>
      <div className="view-settledbills-dashboard-view-settledbills-dashboard">
        <img
          src="/playground_assets/rectangle22523-83rr-200h.png"
          alt="Rectangle22523"
          className="view-settledbills-dashboard-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32524-5bor-1100h.png"
          alt="Rectangle32524"
          className="view-settledbills-dashboard-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12525-nfu-200h.png"
          alt="PNGLogoimage12525"
          className="view-settledbills-dashboard-pn-logoimage1"
        />
        <span className="view-settledbills-dashboard-text">
          <span>SETTLED BILLS</span>
        </span>
       
        
        <img
          src="/playground_assets/rectangle7button2521-17o-200h.png"
          alt="Rectangle7button2521"
          className="view-settledbills-dashboard-rectangle7button"
        />
        <img
          src="/playground_assets/rectangle22button2521-zs9e-200h.png"
          alt="Rectangle22button2521"
          className="view-settledbills-dashboard-rectangle22button"
        />
        <span className="view-settledbills-dashboard-text04">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/addnewbill'>Add New Bill</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text06">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <a href='http://localhost:5000/api/utility/download_report/bill' download>
                Download Report
              </a>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle10button2521-2eh-200h.png"
          alt="Rectangle10button2521"
          className="view-settledbills-dashboard-rectangle10button"
        />
        <img
          src="/playground_assets/rectangle15button2521-zm4g9-200h.png"
          alt="Rectangle15button2521"
          className="view-settledbills-dashboard-rectangle15button"
        />
        <img
          src="/playground_assets/rectangle16button2521-lrcf-200h.png"
          alt="Rectangle16button2521"
          className="view-settledbills-dashboard-rectangle16button"
        />
        <img
          src="/playground_assets/rectangle17button2521-0x5w-200h.png"
          alt="Rectangle17button2521"
          className="view-settledbills-dashboard-rectangle17button"
        />
        <img
          src="/playground_assets/rectangle18button2521-sx4j-200h.png"
          alt="Rectangle18button2521"
          className="view-settledbills-dashboard-rectangle18button"
        />
        <img
          src="/playground_assets/rectangle19button2521-kme7-200h.png"
          alt="Rectangle19button2521"
          className="view-settledbills-dashboard-rectangle19button"
        />
        <img
          src="/playground_assets/rectangle20button2522-gqsn-200h.png"
          alt="Rectangle20button2522"
          className="view-settledbills-dashboard-rectangle20button"
        />
        <img
          src="/playground_assets/rectangle21button2522-rmza-200h.png"
          alt="Rectangle21button2522"
          className="view-settledbills-dashboard-rectangle21button"
        />
        <span className="view-settledbills-dashboard-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text18">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text20">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text22">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142523-km5r-200h.png"
          alt="Rectangle142523"
          className="view-settledbills-dashboard-rectangle14"
        />
        <span className="view-settledbills-dashboard-text24">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2523-a4yg.svg"
          alt="mdiaccount2523"
          className="view-settledbills-dashboard-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd2523-k7mm.svg"
          alt="materialsymbolsadd2523"
          className="view-settledbills-dashboard-materialsymbolsadd"
        />
        <img
          src="/playground_assets/materialsymbolsdownloadrounded2523-tky.svg"
          alt="materialsymbolsdownloadrounded2523"
          className="view-settledbills-dashboard-materialsymbolsdownloadrounded"
        />

        <div className="view-settledbills-dashboard-frame22 view-settledbills-dashboard-frame22">
          <table id='bills'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Settled Date</th>
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
          src="/playground_assets/rectangle232522-wgmo-200h.png"
          alt="Rectangle232522"
          className="view-settledbills-dashboard-rectangle23"
        />
        <span className="view-settledbills-dashboard-text70">
          <span>Displaying Search Results For</span>
        </span>
        <span className="view-settledbills-dashboard-text72">
          <span>: {searchQuery}</span>
        </span>
        <img
          src="/playground_assets/rectangle24button2522-7z9-200h.png"
          alt="Rectangle24button2522"
          className="view-settledbills-dashboard-rectangle24button"
        />
        <span className="view-settledbills-dashboard-text74">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/view-settledbills-dashboard'>Back</Link>
            </button>
          </span>
        </span>
      </div>
    </div>
  )
}

export default SearchResultSettledBills