import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import './invent-low-stock.css'

import { Link } from 'react-router-dom'
import {FaEnvelope, FaCheck} from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'


const InventLowStock = (props) => {

  const [inventLow, setInventLow] = useState([]); //for fetch item
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [sentItem, setSentItem] = useState ([]); //for tracking send item
  const [selectedItemId, setSelectedItemId] = useState('');

  useEffect(() =>{

    const fetchLowStockItems = async () => {
      try {

        const response = await fetch(`http://localhost:5000/api/InventoryItems/low-stock-invent`);
        //const lowStockItems = await response.json(); //parse Json response
        if (response.ok) {
          const lowStockItems = await response.json(); //parse Json response
          setInventLow(lowStockItems); //update state with fetch invent item details
          setSentItem(lowStockItems.filter(item => item.isEmailSent).map(item => item._id));
        } else {
          console.error('Error fetching Invent Low Sotck Items:', response.statusText);
        }
      } catch (error) {
        console.error('Error in fetching Low Stock Invent Item:', error);
      }
    };
    fetchLowStockItems();
  }, []);


  //send email
  const handleSendEmail = async(itemId) =>{
    setisLoading(true);
    setErrorMsg('');

    try {
      await axios.post(`http://localhost:5000/api/InventoryItems/sendLowStockMail`);
      setisLoading(false)
      toast.success('Low Stock Email Sent Successfully');
      setSentItem((prevSentItems) => [...prevSentItems, itemId]);
    } catch (error) {
      setisLoading(false);
      setErrorMsg('Failed to sent Low Stock Email. Please Try Again Later')
    }
  };


  return (
    <div className="invent-dashboard-container">
      <Helmet>
        <title>Inventory Management</title>
      </Helmet>
      <div className="invent-dashboard-invent-dashboard">

        
        
        <img
          src="/playground_assets/rectangle757422-mt1-1600w.png"
          alt="Rectangle757422"
          className="invent-dashboard-rectangle75"
        />
        <img
          src="/playground_assets/rectangle777422-1o-200h.png"
          alt="Rectangle777422"
          className="invent-dashboard-rectangle77"
        />
        <div className="invent-dashboard-menubar">
          <img
            src="/playground_assets/rectangle3i742-ho7n-1100h.png"
            alt="Rectangle3I742"
            className="invent-dashboard-rectangle3"
          />
          <img
            src="/playground_assets/pnglogoimage1i742-w54l-200h.png"
            alt="PNGLogoimage1I742"
            className="invent-dashboard-pn-logoimage1"
          />
          <img
            src="/playground_assets/rectangle10buttoni742-s26i-200h.png"
            alt="Rectangle10buttonI742"
            className="invent-dashboard-rectangle10button"
          />
          <img
            src="/playground_assets/rectangle15buttoni742-nz8q-200h.png"
            alt="Rectangle15buttonI742"
            className="invent-dashboard-rectangle15button"
          />
          <img
            src="/playground_assets/rectangle16buttoni742-qln3-200h.png"
            alt="Rectangle16buttonI742"
            className="invent-dashboard-rectangle16button"
          />
          <img
            src="/playground_assets/rectangle17buttoni742-6hfh-200h.png"
            alt="Rectangle17buttonI742"
            className="invent-dashboard-rectangle17button"
          />
          <img
            src="/playground_assets/rectangle18buttoni742-7bp8-200h.png"
            alt="Rectangle18buttonI742"
            className="invent-dashboard-rectangle18button"
          />
          <img
            src="/playground_assets/rectangle19buttoni742-g78-200h.png"
            alt="Rectangle19buttonI742"
            className="invent-dashboard-rectangle19button"
          />
          <img
            src="/playground_assets/rectangle20buttoni742-1zp-200h.png"
            alt="Rectangle20buttonI742"
            className="invent-dashboard-rectangle20button"
          />
          <img
            src="/playground_assets/rectangle21buttoni742-6pqd-200h.png"
            alt="Rectangle21buttonI742"
            className="invent-dashboard-rectangle21button"
          />
          <span className="invent-dashboard-text">
            <span>Employee</span>
          </span>
          <span className="invent-dashboard-text02">
            <span>Customer</span>
          </span>
          <span className="invent-dashboard-text04">
            <span>Supplier</span>
          </span>
          <span className="invent-dashboard-text06">
            <span>Payment</span>
          </span>
          <span className="invent-dashboard-text08">
            <span>Store Items</span>
          </span>
          <span className="invent-dashboard-text10">
            <span>Renting</span>
          </span>
          <span className="invent-dashboard-text12">
            <span>Inventory</span>
          </span>
          <span className="invent-dashboard-text14">
            <span>Utility Bills</span>
          </span>
        </div>
        <div className="invent-dashboard-topbar">
          <div className="invent-dashboard-topbar1">
            <img
              src="/playground_assets/rectangle2i742-7n27-200h.png"
              alt="Rectangle2I742"
              className="invent-dashboard-rectangle2"
            />

          {/*Logout button */}
            <img
              src="/playground_assets/rectangle14i742-5pdm-200h.png"
              alt="Rectangle14I742"
              className="invent-dashboard-rectangle14"
            />
            <span className="invent-dashboard-text16">
              <span>
                <button style={{color:'black' , fontWeight:'bold'}}> Log Out</button>
              </span>
            </span>

            <img
              src="/playground_assets/mdiaccounti742-b4fv.svg"
              alt="mdiaccountI742"
              className="invent-dashboard-mdiaccount"
            />
          </div>
        </div>
        <span className="invent-dashboard-text18">
          <span>INVENTORY MANAGEMENT</span>
        </span>

        {/*Search bar 
        <img
          src="/playground_assets/rectangle67423-h2ll-200h.png"
          alt="Rectangle67423"
          className="invent-dashboard-rectangle6"
        />

        <span>
          <span>
            <input type="text" className="invent-dashboard-rectangle6" name="search" placeholder='Search here by ID/ Condition' 
             value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value)} style={{textAlign:'center'}}>
            </input>
          </span>
        </span>
        <img
          src="/playground_assets/icons8search2417423-vxj-200h.png"
          alt="icons8search2417423"
          className="invent-dashboard-icons8search241"
          id= 'search icon'
          onClick={handleSearch}
        />*/}

        {/*Add Item Button */}
        <div className="invent-dashboard-addnewitembutton">
          <span className="invent-dashboard-text22">
            <span>
                <button style={{color:'white' , fontWeight:'bold'}}> 
                  <Link to ="/add-invent-item">Add New Item</Link>
                </button>
            </span>      
          </span>
          <img
            src="/playground_assets/materialsymbolsadd7423-ub1i.svg"
            alt="materialsymbolsadd7423"
            className="invent-dashboard-materialsymbolsadd"
          />

        {/*Download Item Button */}  
        </div>
        <div className="invent-dashboard-downloadbutton">
          <div className="invent-dashboard-downloadreport">
            <img
              src="/playground_assets/rectangle22i742-6ph-200h.png"
              alt="Rectangle22I742"
              className="invent-dashboard-rectangle22"
            />
            <span className="invent-dashboard-text24">
              <span>
                  <button style={{color:'white' , fontWeight:'bold'}}> 
                    <a href ='http://localhost:5000/api/InventoryItems/print'>Download Report</a>
                  </button>
                </span>  
            </span>
            <img
              src="/playground_assets/materialsymbolsdownloadroundedi742-o0pd.svg"
              alt="materialsymbolsdownloadroundedI742"
              className="invent-dashboard-materialsymbolsdownloadrounded"
            />
          </div>
        </div>

        {/*Low Stock Item Button */}
        <div className="invent-dashboard-lowstock-itembutton">
          <div className="invent-dashboard-downloadreport1">
            <img
              src="/playground_assets/rectangle22i743-9s24-200h.png"
              alt="Rectangle22I743"
              className="invent-dashboard-rectangle221"
            />
            <span className="invent-dashboard-text26">
                <span>
                  <button style={{color:'white' , fontWeight:'bold'}}> 
                    <a href ='/invent-low-stock-items'>Low Stock Items</a>
                  </button>
                </span>
            </span>
          </div>
        </div>
        <span className="invent-dashboard-text28">
          <span>Low Stock Items</span>
        </span>

        {/*Inventory Table */}
        <div className="invent-dashboard-rectangle81" >
            <table id ="inventItem">
              <thead>
                <tr>
                    <th>Item Name</th>
                    <th>SKU</th>
                    <th>Status</th>
                    <th>In Qty</th>
                    <th>Out Qty</th>
                    <th>Available Qty</th>
                    <th>Send Mail</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(inventLow) && inventLow.map((inventItem) =>(
                  //console.log(invent);
          
                    <tr key={inventItem._id}>
                      <td>{inventItem.itemName}</td>
                      <td>{inventItem.sku}</td>
                      <td>{inventItem.condition}</td>
                      <td>{inventItem.initialQuantity}</td>
                      <td>{inventItem.quantityOut}</td>
		                  <td>{inventItem.quantityAvailable}</td>
                      <td>
                        <button onClick={() => {handleSendEmail(inventItem._id);setSelectedItemId(inventItem._id);}}>
				                  <span>
                          {sentItem.includes(inventItem._id) ? (
                            <FaCheck size={18} color="#4B259B" />
                          ) : (
              			        <FaEnvelope size={18} color='#4B259B' 
                			      onMouseOver={({target})=>target.style.color="red"}
                			      onMouseOut={({target})=>target.style.color="#4B259B"}/>
                          )}


            		          </span>
			                  </button> 
		                  </td>
                    </tr>
                  
                ))}
              </tbody>
            </table>
        </div>
      
        
      </div>
    </div>
  )
}

export default InventLowStock
