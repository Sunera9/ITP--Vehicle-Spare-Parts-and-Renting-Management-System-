import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import './invent-search-result-condition.css'
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function InventSearchResultCondition () {

  //const [inventSearch1, setInventSearch] = useState([]);
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  

  //fetch search result
  useEffect(() =>{
    fetch (`http://localhost:5000/api/InventoryItems/searchInventItem/${searchQuery}`)
    .then (res => res.json())
    .then (data => setData (data))
    .catch (err => console.log (err));
  }, [searchQuery]);

  //search function by item Name
  const history = useHistory();
  const [searchQuery1, setSearchQuery1] = useState('');
  const handleSearch = (itemName ='') =>{
    const params = new URLSearchParams({
      q: searchQuery1,
      itemName: itemName,
    })
    history.push({
      pathname:'/invent-search-result-id',
      search: `?${params.toString()}`,
    });
  };

  return (
    <div className="invent-search-result-condition-container">
      <Helmet>
        <title>InventSearchResult- inventory Condition - </title>
        <meta
          property="og:title"
          content="InventSearchResult-condition - exported project"
        />
      </Helmet>
      <div className="invent-search-result-condition-invent-search-result">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/35cb5c24-0dce-4075-aadf-45ce0b6a9bbc?org_if_sml=14629"
          alt="Rectangle817715"
          className="invent-search-result-condition-rectangle81"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/d6f9cd29-d1b5-4f51-a462-641e1ec553c1?org_if_sml=194"
          alt="Rectangle757715"
          className="invent-search-result-condition-rectangle75"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/e3272c61-2c37-4ac3-970e-1cf44b1af434?org_if_sml=1374"
          alt="Rectangle777715"
          className="invent-search-result-condition-rectangle77"
        />
        <div className="invent-search-result-condition-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/1ce29869-7e80-475d-aeee-a992a9d0d714?org_if_sml=13179"
            alt="Rectangle3I771"
            className="invent-search-result-condition-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/f41090a3-0fa9-49cf-8188-28ad732e4260?org_if_sml=18959"
            alt="PNGLogoimage1I771"
            className="invent-search-result-condition-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/481e3407-8cf3-44e3-af1a-47459813ec34?org_if_sml=1677"
            alt="Rectangle10buttonI771"
            className="invent-search-result-condition-rectangle10button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/f6ebdf93-ea88-4278-901a-f7279f004047?org_if_sml=1677"
            alt="Rectangle15buttonI771"
            className="invent-search-result-condition-rectangle15button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/d365ebb4-87c4-44d2-957b-73070dbd2f8b?org_if_sml=1677"
            alt="Rectangle16buttonI771"
            className="invent-search-result-condition-rectangle16button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/b245b195-331c-46e9-9c40-691608784de4?org_if_sml=1677"
            alt="Rectangle17buttonI771"
            className="invent-search-result-condition-rectangle17button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/9f68329f-8b51-4e14-b0ae-0fd0a944cea0?org_if_sml=1677"
            alt="Rectangle18buttonI771"
            className="invent-search-result-condition-rectangle18button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/ca2a90b2-f754-4ff6-9cc4-756e5abfb3d9?org_if_sml=1677"
            alt="Rectangle19buttonI771"
            className="invent-search-result-condition-rectangle19button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/abc6809c-c75e-444f-8360-b01750c6eb09?org_if_sml=1677"
            alt="Rectangle20buttonI771"
            className="invent-search-result-condition-rectangle20button"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/dd9f836c-218e-42ef-a74b-2126154d412c?org_if_sml=1677"
            alt="Rectangle21buttonI771"
            className="invent-search-result-condition-rectangle21button"
          />
          <span className="invent-search-result-condition-text">
            <span>Employee</span>
          </span>
          <span className="invent-search-result-condition-text02">
            <span>Customer</span>
          </span>
          <span className="invent-search-result-condition-text04">
            <span>Supplier</span>
          </span>
          <span className="invent-search-result-condition-text06">
            <span>Payment</span>
          </span>
          <span className="invent-search-result-condition-text08">
            <span>Store Items</span>
          </span>
          <span className="invent-search-result-condition-text10">
            <span>Renting</span>
          </span>
          <span className="invent-search-result-condition-text12">
            <span>Inventory</span>
          </span>
          <span className="invent-search-result-condition-text14">
            <span>Utility Bills</span>
          </span>
        </div>
        <div className="invent-search-result-condition-topbar">
          <div className="invent-search-result-condition-topbar1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/c8cc7a50-c348-43cf-ba78-489473978581?org_if_sml=1583"
              alt="Rectangle2I771"
              className="invent-search-result-condition-rectangle2"
            />
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/c8826311-c3b9-48ec-a1d5-794695d1010f?org_if_sml=1523"
              alt="Rectangle14I771"
              className="invent-search-result-condition-rectangle14"
            />
            <span className="invent-search-result-condition-text16">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti771-l4fg.svg"
              alt="mdiaccountI771"
              className="invent-search-result-condition-mdiaccount"
            />
          </div>
        </div>
        <span className="invent-search-result-condition-text18">
          <span>INVENTORY MANAGEMENT</span>
        </span>
        {/*Search Bar */}
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/f780cbae-beb1-4561-a74f-f99f1959cee9?org_if_sml=1592"
          alt="Rectangle67716"
          className="invent-search-result-condition-rectangle6"
        />
        <span>
          <span>
            <input type="text" className="invent-dashboard-rectangle6" name="search" placeholder='Search here by Item Name' 
              value={searchQuery1} onChange={(e) =>setSearchQuery1(e.target.value)} style={{textAlign:'center'}}>
            </input>
          </span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/bce989e8-ba1d-4d48-a6df-ed43ce0848ea?org_if_sml=11067"
          alt="icons8search2417716"
          className="invent-search-result-condition-icons8search241"
          id='search-icon'
          onClick={handleSearch}
        />
        <div className="invent-search-result-condition-addnewitembutton">
          <span className="invent-search-result-condition-text22">
            <span>Add new Item</span>
          </span>
          <img
            src="/playground_assets/materialsymbolsadd7716-5o8t.svg"
            alt="materialsymbolsadd7716"
            className="invent-search-result-condition-materialsymbolsadd"
          />
        </div>
        <div className="invent-search-result-condition-downloadbutton">
          <div className="invent-search-result-condition-downloadreport">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/6fc3fd14-f454-4d72-b151-9859ea07a299?org_if_sml=1574"
              alt="Rectangle22I771"
              className="invent-search-result-condition-rectangle22"
            />
            <span className="invent-search-result-condition-text24">
              <span>Download Report</span>
            </span>
            <img
              src="/playground_assets/materialsymbolsdownloadroundedi771-h9kb.svg"
              alt="materialsymbolsdownloadroundedI771"
              className="invent-search-result-condition-materialsymbolsdownloadrounded"
            />
          </div>
        </div>
        <div className="invent-search-result-condition-low-stockbutton">
          <div className="invent-search-result-condition-downloadreport1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/056872b2-45b0-4ec3-bf3b-f2294ba3a8e4?org_if_sml=1574"
              alt="Rectangle22I773"
              className="invent-search-result-condition-rectangle221"
            />
            <span className="invent-search-result-condition-text26">
              <span>Low Stock Items</span>
            </span>
            <div className="invent-search-result-condition-materialsymbolsdownloadrounded1"></div>
          </div>
          <div className="invent-search-result-condition-downloadreport2">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/e6729949-9860-4bbc-8209-ab1d3648d851?org_if_sml=1574"
              alt="Rectangle22I773"
              className="invent-search-result-condition-rectangle222"
            />
            <span className="invent-search-result-condition-text28">
              <span>Low Stock Items</span>
            </span>
            <div className="invent-search-result-condition-materialsymbolsdownloadrounded2"></div>
          </div>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/6cd896b8-ca3c-41e1-95b1-430194477f8a?org_if_sml=1625"
          alt="Rectangle827726"
          className="invent-search-result-condition-rectangle82"
        />
        <span className="invent-search-result-condition-text30">
          <span>Display Search Result for : Item Statues</span>
        </span>

        {/*Search Result Table */}
        <div className="invent-search-result-condition-rectangle83">
          {/* Table*/}
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
        
        <span className="invent-search-result-condition-text32">-</span>
      </div>
    </div>
  )
}

export default InventSearchResultCondition
