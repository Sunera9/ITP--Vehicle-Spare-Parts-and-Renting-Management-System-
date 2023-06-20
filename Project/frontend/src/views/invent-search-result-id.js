import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import './invent-search-result-id.css'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'


function InventSearchResultId () {

  const [data2, setData2] = useState([]);
  const location = useLocation();
  const searchQuery1 = new URLSearchParams(location.search).get("q");
  
  //fetch search result
  useEffect(() =>{
    fetch (`http://localhost:5000/api/InventoryItems/searchInventItem/${searchQuery1}`)
    .then (res => res.json())
    .then (data2 => setData2 (data2))
    .catch (err => console.log (err));
  }, [searchQuery1]);

  return (
    <div className="invent-search-result-id-container">
      <Helmet>
        <title>InventSearchResult-Item Name </title>
        <meta
          property="og:title"
          content="InventSearchResult-id - exported project"
        />
      </Helmet>
      <div className="invent-search-result-id-search-result-invent-id">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/35ff5f51-8d26-4a8e-87e1-360e0be65014?org_if_sml=14629"
          alt="Rectangle817726"
          className="invent-search-result-id-rectangle81"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/29066acc-3cad-4760-9fe9-942e1b8518d6?org_if_sml=194"
          alt="Rectangle757726"
          className="invent-search-result-id-rectangle75"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/64cbcfc2-e309-4e9d-a23b-b83770e47e0e?org_if_sml=1374"
          alt="Rectangle777726"
          className="invent-search-result-id-rectangle77"
        />
        <div className="invent-search-result-id-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/96de0b35-1864-4351-8577-f07429d44c4e?org_if_sml=13179"
            alt="Rectangle3I772"
            className="invent-search-result-id-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/af6975a7-ea00-48f7-8f1f-36c56f7822c7?org_if_sml=18959"
            alt="PNGLogoimage1I772"
            className="invent-search-result-id-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/6dbf1182-ec5e-4de1-a775-fb9944220094?org_if_sml=1677"
            alt="Rectangle10buttonI772"
            className="invent-search-result-id-rectangle10button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/0fbb0fa9-c0a3-4339-9cdb-8310c828701d?org_if_sml=1677"
            alt="Rectangle15buttonI772"
            className="invent-search-result-id-rectangle15button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/df4be71c-7d9f-4ce0-b998-b57e3d16bd6a?org_if_sml=1677"
            alt="Rectangle16buttonI772"
            className="invent-search-result-id-rectangle16button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/46faf397-b42d-485e-9304-dbcffd3c15cb?org_if_sml=1677"
            alt="Rectangle17buttonI772"
            className="invent-search-result-id-rectangle17button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/c0409070-affd-4de1-8261-872f360b6f0b?org_if_sml=1677"
            alt="Rectangle18buttonI772"
            className="invent-search-result-id-rectangle18button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/7729d500-5671-4c38-9ab6-fa6747415594?org_if_sml=1677"
            alt="Rectangle19buttonI772"
            className="invent-search-result-id-rectangle19button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/0aa6bfdf-d4d1-430e-bd94-ae300276a543?org_if_sml=1677"
            alt="Rectangle20buttonI772"
            className="invent-search-result-id-rectangle20button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/7d983dca-0c47-4f91-89d7-478d8d18ceb9?org_if_sml=1677"
            alt="Rectangle21buttonI772"
            className="invent-search-result-id-rectangle21button"
          />
          <span className="invent-search-result-id-text">
            <span>Employee</span>
          </span>
          <span className="invent-search-result-id-text02">
            <span>Customer</span>
          </span>
          <span className="invent-search-result-id-text04">
            <span>Supplier</span>
          </span>
          <span className="invent-search-result-id-text06">
            <span>Payment</span>
          </span>
          <span className="invent-search-result-id-text08">
            <span>Store Items</span>
          </span>
          <span className="invent-search-result-id-text10">
            <span>Renting</span>
          </span>
          <span className="invent-search-result-id-text12">
            <span>Inventory</span>
          </span>
          <span className="invent-search-result-id-text14">
            <span>Utility Bills</span>
          </span>
        </div>
        <div className="invent-search-result-id-topbar">
          <div className="invent-search-result-id-topbar1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/2dc9cb74-536b-476a-9446-dd0fafc5a81b?org_if_sml=1583"
              alt="Rectangle2I772"
              className="invent-search-result-id-rectangle2"
            />
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/86ec259f-0ea7-4657-815e-73a2f5d4129a?org_if_sml=1523"
              alt="Rectangle14I772"
              className="invent-search-result-id-rectangle14"
            />
            <span className="invent-search-result-id-text16">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti772-7llk.svg"
              alt="mdiaccountI772"
              className="invent-search-result-id-mdiaccount"
            />
          </div>
        </div>
        <span className="invent-search-result-id-text18">
          <span>INVENTORY MANAGEMENT</span>
        </span>
        
        <div className="invent-search-result-id-addnewitembutton">
          <span className="invent-search-result-id-text22">
            <span>Add new Item</span>
          </span>
          <img
            src="/playground_assets/materialsymbolsadd7727-xwa7.svg"
            alt="materialsymbolsadd7727"
            className="invent-search-result-id-materialsymbolsadd"
          />
        </div>
        <div className="invent-search-result-id-downloadbutton">
          <div className="invent-search-result-id-downloadreport">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/5154e2bb-02fd-4fd7-b482-76644c6b94f3?org_if_sml=1574"
              alt="Rectangle22I772"
              className="invent-search-result-id-rectangle22"
            />
            <span className="invent-search-result-id-text24">
              <span>Download Report</span>
            </span>
            <img
              src="/playground_assets/materialsymbolsdownloadroundedi772-d7n.svg"
              alt="materialsymbolsdownloadroundedI772"
              className="invent-search-result-id-materialsymbolsdownloadrounded"
            />
          </div>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/638acc1e-1c18-42ea-bd9f-69eb4fe1748a?org_if_sml=1625"
          alt="Rectangle827728"
          className="invent-search-result-id-rectangle82"
        />
        <span className="invent-search-result-id-text26">
          <span>Display Search Result for : Item Name</span>
        </span>
        {/*Search Result Table */}
        <div className="invent-search-result-id-rectangle83">
         {/* Table*/}
         <table id="inventItem">
          <thead>
            <tr>
            
              <th>Item Name</th>
              <th>SKU</th>
              <th>Condition</th>
              <th>Category</th>
              <th>In Qty</th>
              <th>Out Qty</th>
              <th>Available Qty</th>

            </tr>
          </thead>
          <tbody>
                { data2.map((inventItem,index) =>(
                    //console.log(invent);
            
                      <tr key={index}>
                        
                        <td>{inventItem.itemName}</td>
                        <td>{inventItem.sku}</td>
                        <td>{inventItem.condition}</td>
                        <td>{inventItem.category}</td>
                        <td>{inventItem.initialQuantity}</td>
                        <td>{inventItem.quantityOut}</td>
                        <td>{inventItem.quantityAvailable}</td>
              
                      </tr>
                  ))}
              </tbody>
         </table>
        </div>
        
        <div className="invent-search-result-id-downloadbutton1">
          <div className="invent-search-result-id-downloadreport1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/338c3f4b-127e-4bb4-9bbb-cd2afc023c77?org_if_sml=1574"
              alt="Rectangle22I773"
              className="invent-search-result-id-rectangle221"
            />
            <span className="invent-search-result-id-text28">
              <span>Low Stock Items</span>
            </span>
            <div className="invent-search-result-id-materialsymbolsdownloadrounded1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventSearchResultId
