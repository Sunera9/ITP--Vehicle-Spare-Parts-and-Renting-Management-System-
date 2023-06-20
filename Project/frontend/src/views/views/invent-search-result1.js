import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import './invent-search-result1.css'
import { useLocation } from 'react-router-dom';


function InventSearchResult1 () {

  const [invents, setInvents] = useState([]);
        const [data, setData] = useState ([]);
      
        const location = useLocation();
        const searchQuery = new URLSearchParams(location.search).get("q");
      
        useEffect (() => {
          fetch (`http://localhost:5000/api/InventoryItems/searchInventItem/${searchQuery}`)
          .then (res => res.json())
          .then (data => setData (data))
          .catch (err => console.log (err));
        }, [searchQuery]);



  return (
    <div className="invent-search-result1-container">
      <Helmet>
        <title>Search Result1</title>
      </Helmet>
      <div className="invent-search-result1-invent-search-result">
        <img
          src="/playground_assets/rectangle817715-zth-800h.png"
          alt="Rectangle817715"
          className="invent-search-result1-rectangle81"
        />
        <img
          src="/playground_assets/rectangle757715-zx6c-1600w.png"
          alt="Rectangle757715"
          className="invent-search-result1-rectangle75"
        />
        <img
          src="/playground_assets/rectangle777715-4h9e-200h.png"
          alt="Rectangle777715"
          className="invent-search-result1-rectangle77"
        />
        <div className="invent-search-result1-menubar">
          <img
            src="/playground_assets/rectangle3i771-qso-1100h.png"
            alt="Rectangle3I771"
            className="invent-search-result1-rectangle3"
          />
          <img
            src="/playground_assets/pnglogoimage1i771-c6c-200h.png"
            alt="PNGLogoimage1I771"
            className="invent-search-result1-pn-logoimage1"
          />
          <img
            src="/playground_assets/rectangle10buttoni771-yxym-200h.png"
            alt="Rectangle10buttonI771"
            className="invent-search-result1-rectangle10button"
          />
          <img
            src="/playground_assets/rectangle15buttoni771-8hoh-200h.png"
            alt="Rectangle15buttonI771"
            className="invent-search-result1-rectangle15button"
          />
          <img
            src="/playground_assets/rectangle16buttoni771-m2s-200h.png"
            alt="Rectangle16buttonI771"
            className="invent-search-result1-rectangle16button"
          />
          <img
            src="/playground_assets/rectangle17buttoni771-set-200h.png"
            alt="Rectangle17buttonI771"
            className="invent-search-result1-rectangle17button"
          />
          <img
            src="/playground_assets/rectangle18buttoni771-60e-200h.png"
            alt="Rectangle18buttonI771"
            className="invent-search-result1-rectangle18button"
          />
          <img
            src="/playground_assets/rectangle19buttoni771-q9ob-200h.png"
            alt="Rectangle19buttonI771"
            className="invent-search-result1-rectangle19button"
          />
          <img
            src="/playground_assets/rectangle20buttoni771-nx0m-200h.png"
            alt="Rectangle20buttonI771"
            className="invent-search-result1-rectangle20button"
          />
          <img
            src="/playground_assets/rectangle21buttoni771-uwzg-200h.png"
            alt="Rectangle21buttonI771"
            className="invent-search-result1-rectangle21button"
          />
          <span className="invent-search-result1-text">
            <span>Employee</span>
          </span>
          <span className="invent-search-result1-text02">
            <span>Customer</span>
          </span>
          <span className="invent-search-result1-text04">
            <span>Supplier</span>
          </span>
          <span className="invent-search-result1-text06">
            <span>Payment</span>
          </span>
          <span className="invent-search-result1-text08">
            <span>Store Items</span>
          </span>
          <span className="invent-search-result1-text10">
            <span>Renting</span>
          </span>
          <span className="invent-search-result1-text12">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/invent-dashboard'>Inventory</Link>
              </button>
            </span>
          </span>
          <span className="invent-search-result1-text14">
            <span>Utility Bills</span>
          </span>
        </div>
        <div className="invent-search-result1-topbar">
          <div className="invent-search-result1-topbar1">
            <img
              src="/playground_assets/rectangle2i771-xq2-200h.png"
              alt="Rectangle2I771"
              className="invent-search-result1-rectangle2"
            />
            <img
              src="/playground_assets/rectangle14i771-c23k-200h.png"
              alt="Rectangle14I771"
              className="invent-search-result1-rectangle14"
            />
            <span className="invent-search-result1-text16">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti771-8nz.svg"
              alt="mdiaccountI771"
              className="invent-search-result1-mdiaccount"
            />
          </div>
        </div>
        <span className="invent-search-result1-text18">
          <span>INVENTORY MANAGEMENT</span>
        </span>
        
        
        <div className="invent-search-result1-addnewitembutton">
          <span className="invent-search-result1-text22">
            <span>Add new Item</span>
          </span>
          <img
            src="/playground_assets/materialsymbolsadd7716-lh7x.svg"
            alt="materialsymbolsadd7716"
            className="invent-search-result1-materialsymbolsadd"
          />
        </div>
        <div className="invent-search-result1-downloadbutton">
          <div className="invent-search-result1-downloadreport">
            <img
              src="/playground_assets/rectangle22i771-gzvi-200h.png"
              alt="Rectangle22I771"
              className="invent-search-result1-rectangle22"
            />
            <span className="invent-search-result1-text24">
              <span>Download Report</span>
            </span>
            <img
              src="/playground_assets/materialsymbolsdownloadroundedi771-icvh.svg"
              alt="materialsymbolsdownloadroundedI771"
              className="invent-search-result1-materialsymbolsdownloadrounded"
            />
          </div>
        </div>
        <div className="invent-search-result1-low-stockbutton">
          <div className="invent-search-result1-downloadreport1">
            <img
              src="/playground_assets/rectangle22i773-mhsi-200h.png"
              alt="Rectangle22I773"
              className="invent-search-result1-rectangle221"
            />
            <span className="invent-search-result1-text26">
              <span>Low Stock Items</span>
            </span>
            <div className="invent-search-result1-materialsymbolsdownloadrounded1"></div>
          </div>
        </div>
        <img
          src="/playground_assets/rectangle827726-dbpk-200h.png"
          alt="Rectangle827726"
          className="invent-search-result1-rectangle82"
        />
        <span className="invent-search-result1-text28">
          <span>Display Search Result for : Inventory Condition</span>
        </span>

        <div className="invent-search-result1-rectangle83">

          {/* Current table*/}
          <table id="inventItem">
              <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>SKU</th>
                    <th>Status</th>
                    <th>In Qty</th>
                    <th>Out Qty</th>
                    <th>Available Qty</th>
                  </tr>
              </thead>
              <tbody>
                { data.map((inventItem,index) =>(
                  //console.log(invent);
          
                    <tr key={index}>
                      <td>{inventItem.itemName}</td>
                      <td>{inventItem.sku}</td>
                      <td>{inventItem.condition}</td>
                      <td>{inventItem.initialQuantity}</td>
                      <td>{inventItem.quantityOut}</td>
		                  <td>{inventItem.quantityAvailable}</td>
             
                    </tr>
                  
                ))}
              </tbody>

          </table>
        </div>
        
      </div>
    </div>
  )
}

export default InventSearchResult1
