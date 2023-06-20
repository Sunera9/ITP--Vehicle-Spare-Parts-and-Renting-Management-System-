import React, { useEffect, useState } from 'react';
useEffect
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './salesmanager-dashboard.css'

const SalesmanagerDashboard = () => {

  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    // Fetch product categories from backend
    const fetchProductCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/category/:category'); // Update with your actual API endpoint
        const data = await response.json();
        setTotalCategories(data.categories.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductCategories();
  }, []);

  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    // Fetch the low stock items from the backend API
    const fetchLowStockItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/low-stock/:threshold'); // Update with your actual API endpoint
        const lowStockItems = await response.json();
        setLowStockItems(lowStockItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLowStockItems();
  }, []);
  const [totalLowStockItems, setTotalLowStockItems] = useState(0);
  
    useEffect(() => {
      // Fetch the low stock items from the backend API
      const fetchLowStockItems = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/products/low-stock/:threshold');
          const lowStockItems = await response.json();
  
          // Update the state with the total number of low stock items
          setTotalLowStockItems(lowStockItems.length);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchLowStockItems();
    }, []);

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
      // Fetch the total number of items from the backend API
      const fetchTotalItems = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/products/fetchAllItems');
          const totalItemsData = await response.json();
    
          // Update the state with the total number of items
          setTotalItems(totalItemsData.totalItems); // Assuming totalItemsData.totalItems is the property that represents the total number of items
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchTotalItems();
    }, []);



  return (
    <div className="salesmanager-dashboard-container">
      <Helmet>
        <title>sales dashboard</title>
      </Helmet>
      <div className="salesmanager-dashboard-salesmanager-dashboard">
        <img
          src="/playground_assets/rectangle21974-f36-200h.png"
          alt="Rectangle21974"
          className="salesmanager-dashboard-rectangle2"
        />
        <img
          src="/playground_assets/rectangle31974-4506-1100h.png"
          alt="Rectangle31974"
          className="salesmanager-dashboard-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage11974-an9p-200h.png"
          alt="PNGLogoimage11974"
          className="salesmanager-dashboard-pn-logoimage1"
        />
        <span className="salesmanager-dashboard-text">
          <span>DASHBOARD</span>
        </span>
       
        <img
          src="/playground_assets/rectangle10button1975-qxkl-200h.png"
          alt="Rectangle10button1975"
          className="salesmanager-dashboard-rectangle10button"
        />
        <img
          src="/playground_assets/rectangle15button1975-09ih-200h.png"
          alt="Rectangle15button1975"
          className="salesmanager-dashboard-rectangle15button"
        />
        <img
          src="/playground_assets/rectangle16button1975-rano-200h.png"
          alt="Rectangle16button1975"
          className="salesmanager-dashboard-rectangle16button"
        />
        <img
          src="/playground_assets/rectangle17button1975-ihyf-200h.png"
          alt="Rectangle17button1975"
          className="salesmanager-dashboard-rectangle17button"
        />
        <img
          src="/playground_assets/rectangle18button1975-1x4e-200h.png"
          alt="Rectangle18button1975"
          className="salesmanager-dashboard-rectangle18button"
        />
        <img
          src="/playground_assets/rectangle19button1975-yw4e-200h.png"
          alt="Rectangle19button1975"
          className="salesmanager-dashboard-rectangle19button"
        />
        <img
          src="/playground_assets/rectangle20button1975-wil8-200h.png"
          alt="Rectangle20button1975"
          className="salesmanager-dashboard-rectangle20button"
        />
        <img
          src="/playground_assets/rectangle21button1975-g2tu-200h.png"
          alt="Rectangle21button1975"
          className="salesmanager-dashboard-rectangle21button"
        />
        <span className="salesmanager-dashboard-text06">
          
          <span><Link to="/employee-dashboardcopy1">Employee</Link></span>
            
        </span>
        <span className="salesmanager-dashboard-text08">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Customer</Link>
            </button></span>
        </span>
        <span className="salesmanager-dashboard-text10">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'> Supplier</Link>
            </button></span>
        </span>
        <span className="salesmanager-dashboard-text12">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>  Payement</Link>
            </button></span>
        </span>
        <span className="salesmanager-dashboard-text14">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Store Items</Link> 
            </button></span>
        </span>
        <span className="salesmanager-dashboard-text16">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Renting</Link>
          </button></span>
        </span>
        <span className="salesmanager-dashboard-text18">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'> Inventory</Link>
            </button></span>
        </span>
        <span className="salesmanager-dashboard-text20">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Utility Bills</Link>
            </button></span>
        </span>
        <img
          src="/playground_assets/rectangle14button1976-hyac-200h.png"
          alt="Rectangle14button1976"
          className="salesmanager-dashboard-rectangle14button"
        />
        <span className="salesmanager-dashboard-text22">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Log Out</Link>
          </button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount1977-p4nc.svg"
          alt="mdiaccount1977"
          className="salesmanager-dashboard-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd1977-ay69.svg"
          alt="materialsymbolsadd1977"
          className="salesmanager-dashboard-materialsymbolsadd"
        />
        <img
          src="/playground_assets/rectangle261977-ik6f-300h.png"
          alt="Rectangle261977"
          className="salesmanager-dashboard-rectangle26"
        />
        <img
          src="/playground_assets/rectangle341979-vglv-300h.png"
          alt="Rectangle341979"
          className="salesmanager-dashboard-rectangle34"
        />
        <span className="salesmanager-dashboard-text24">
          <span>
            <span>
              Total Item
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> in store</span>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle351979-03m8-300h.png"
          alt="Rectangle351979"
          className="salesmanager-dashboard-rectangle35"
        />
        <img
          src="/playground_assets/rectangle361979-83sv-300h.png"
          alt="Rectangle361979"
          className="salesmanager-dashboard-rectangle36"
        />
        <span className="salesmanager-dashboard-text29">
          <span>
            <span>Low stock</span>
            <br></br>
            <span>
              Items in store
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <span className="salesmanager-dashboard-text34">
          <span>
            <span>
              Item Category 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              in store
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
       
        <span className="salesmanager-dashboard-text39">
          <span>{totalItems}</span>
        </span>
        <span className="salesmanager-dashboard-text41">
          <span>{totalLowStockItems}</span>
        </span>
        <span className="salesmanager-dashboard-text43">
          <span>{totalCategories}</span>
        </span>
        <img
          src="/playground_assets/rectangle28button2080-mtc7-200h.png"
          alt="Rectangle28button2080"
          className="salesmanager-dashboard-rectangle28button"
          style={{left:"1000px"}}
        />
        <span className="salesmanager-dashboard-text45" style={{left:"1040px", top:"160px"}} >
          <span><button style={{color:'white',fontWeight: 'bold' ,textAlign:'center',}} >
          <Link to= '/store-items'>View Items</Link>
          </button></span>
        </span>
        {/* <img
          src="/playground_assets/rectangle37button2080-o4lr-200h.png"
          alt="Rectangle37button2080"
          className="salesmanager-dashboard-rectangle37button"
        />}
       {/*<span className="salesmanager-dashboard-text47">
          <span>
            <span><button style={{color:'white',fontWeight: 'bold'}}>
              View Customer
              </button><span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span><button style={{color:'white',fontWeight: 'bold'}}>Reminders</button></span>
          </span>
              </span>*/} 
        <img
          src="/playground_assets/rectangle382089-x1vf-200h.png"
          alt="Rectangle382089"
          className="salesmanager-dashboard-rectangle38"
        />
        <span className="salesmanager-dashboard-text52">
          <span>Low Stock Items</span>
        </span>
        <div className="salesmanager-dashboard-frame55">
        <table id='items'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}

export default SalesmanagerDashboard
