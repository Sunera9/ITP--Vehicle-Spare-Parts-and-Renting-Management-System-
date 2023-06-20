import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import './invent-dashboard.css'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {FaEdit, FaEye, FaTrashAlt} from 'react-icons/fa'
import { toast } from 'react-toastify'

const InventDashboard = (props) => {

  const [inventRoutes, setInventRoutes] = useState([]);
  const history = useHistory();
  
  //fetch data
  useEffect(() =>{
    //fetch inventory data
    const fetchData = async() =>{
      try {
        const response = await fetch(`http://localhost:5000/api/InventoryItems/getAll`);
          if (response.ok) {
            const inventData = await response.json(); //parse Json response
            setInventRoutes(inventData); //update state with fetch invent item details

          } else {
            console.error('Error fetching Invent Items:', response.statusText);
          }
      } catch (err) {
        console.error('Error in fetching Invent Item:', err);
      }

    };
    fetchData();
  }, []);


  //delete invent data
  function handleDelete(id){
    fetch(`http://localhost:5000/api/InventoryItems/delete/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response =>{
      if (!response.ok) {
        throw new Error(`Failed to delete Item with ID ${id}.`);
      }
      // Return the response for further processing if needed
      return response.json();
    })
    .then(_data => {
      // successful delete
      const confirmed = window.confirm(`Are you sure you want to delete item ${id}?`);
      if (confirmed) {
      // perform delete operation here
      toast.success(`Item ${id} has been deleted successfully.`);
}
      //console.log(`Item with ID ${id} deleted successfully.`);
    })
    .catch(error => {
      // Handle errors that occurred during the request
      console.error(error);
    });    
  }

  //viewItem
  const handleView = (inventView) =>{
    history.push({
      pathname: `/view-invent-item/${inventView._id}`,
      state:{inventView}
    });
  }


  //update item details
  
  const handleUpdate = (inventUpdate) =>{
    //navigate to edit inventory item page with invent item object
    history.push({
      pathname: `/update-invent-item/${inventUpdate._id}`,
      state:{inventUpdate}
    });
  };

  //search function
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () =>{
    history.push({
      pathname:'/invent-search-result-condition',
      search: `?q=${searchQuery}`
    });
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
            <span><Link to="/employee-dashboardcopy1">Employee</Link></span>
          </span>
          <span className="invent-dashboard-text02">
            <span><Link to="/view-customers">Customer</Link></span>
          </span>
          <span className="invent-dashboard-text04">
            <span><Link to="/supply-dashboard2">Supplier</Link></span>
          </span>
          <span className="invent-dashboard-text06">
            <span><Link to="#">Rentals</Link></span>
          </span>
          <span className="invent-dashboard-text08">
            <span><Link to="/salesmanager-dashboard">Spare Parts</Link></span>
          </span>
          <span className="invent-dashboard-text10">
            <span><Link to = "#">Inventory</Link></span>
          </span>
          <span className="invent-dashboard-text12">
            <span><Link to ="#">Payment</Link></span>
          </span>
          <span className="invent-dashboard-text14">
            <span><Link to="/view-settledbills-dashboard">Utility Bills</Link></span>
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

        {/*Search bar */}
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
        />

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
                    <a href ='/invent-low-stock'>Low Stock Items</a>
                  </button>
                </span>
            </span>
          </div>
        </div>
        <span className="invent-dashboard-text28">
          <span>INVENTORY TABLE</span>
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
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(inventRoutes) && inventRoutes.map((inventItem) =>(
                  //console.log(invent);
          
                    <tr key={inventItem._id}>
                      <td>{inventItem.itemName}</td>
                      <td>{inventItem.sku}</td>
                      <td>{inventItem.condition}</td>
                      <td>{inventItem.initialQuantity}</td>
                      <td>{inventItem.quantityOut}</td>
		                  <td>{inventItem.quantityAvailable}</td>
                      <td>
			                  <button onClick={() => handleView(inventItem)}>
				                  <span>
              			        <FaEye size={18} color='#4B259B' 
                			      onMouseOver={({target})=>target.style.color="red"}
                			      onMouseOut={({target})=>target.style.color="#4B259B"}/>
            		          </span>
			                  </button>
		                  </td>
                      
                      <td>
			                  <button onClick={() => handleUpdate(inventItem)}>
				                  <span>
              			        <FaEdit size={18} color='#4B259B' 
                			      onMouseOver={({target})=>target.style.color="blue"}
                			      onMouseOut={({target})=>target.style.color="#4B259B"}/>
            		          </span>
                        </button>
                      </td>
                      <td>
			                  <button onClick={() => handleDelete(inventItem._id)}>
            		          <span>
           			              <FaTrashAlt size={18} color='#4B259B' 
                			        onMouseOver={({target})=>target.style.color="red"}
                			        onMouseOut={({target})=>target.style.color="#4B259B"}/>
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

export default InventDashboard
