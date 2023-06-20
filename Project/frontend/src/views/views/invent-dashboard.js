import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './invent-dashboard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { TbEdit, TbTrash, TbEye } from 'react-icons/tb'
import { useHistory } from 'react-router-dom'
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
      window.alert(`Item ${id} has been deleted successfully.`);
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
      pathname: `/item-details/${inventView._id}`,
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
      pathname:'/invent-search-result1',
      search: `?q=${searchQuery}`
    });
  };



  return (
    <div className="invent-dashboard-container">
      <Helmet>
        <title>Invetory- DashBoard</title>
      </Helmet>
      <div className="invent-dashboard-invent-dashboard">
        
        
        <img
          src="/playground_assets/rectangle757422-rd7c-1600w.png"
          alt="Rectangle757422"
          className="invent-dashboard-rectangle75"
        />
        <img
          src="/playground_assets/rectangle777422-n85-200h.png"
          alt="Rectangle777422"
          className="invent-dashboard-rectangle77"
        />
        <div className="invent-dashboard-menubar">
          <img
            src="/playground_assets/rectangle3i742-4u9k-1100h.png"
            alt="Rectangle3I742"
            className="invent-dashboard-rectangle3"
          />
          <img
            src="/playground_assets/pnglogoimage1i742-f1if-200h.png"
            alt="PNGLogoimage1I742"
            className="invent-dashboard-pn-logoimage1"
          />
          <img
            src="/playground_assets/rectangle10buttoni742-6nuh-200h.png"
            alt="Rectangle10buttonI742"
            className="invent-dashboard-rectangle10button"
          />
          <img
            src="/playground_assets/rectangle15buttoni742-ceja-200h.png"
            alt="Rectangle15buttonI742"
            className="invent-dashboard-rectangle15button"
          />
          <img
            src="/playground_assets/rectangle16buttoni742-9gr8-200h.png"
            alt="Rectangle16buttonI742"
            className="invent-dashboard-rectangle16button"
          />
          <img
            src="/playground_assets/rectangle17buttoni742-fu0c-200h.png"
            alt="Rectangle17buttonI742"
            className="invent-dashboard-rectangle17button"
          />
          <img
            src="/playground_assets/rectangle18buttoni742-cx3d-200h.png"
            alt="Rectangle18buttonI742"
            className="invent-dashboard-rectangle18button"
          />
          <img
            src="/playground_assets/rectangle19buttoni742-fwht-200h.png"
            alt="Rectangle19buttonI742"
            className="invent-dashboard-rectangle19button"
          />
          <img
            src="/playground_assets/rectangle20buttoni742-vj47-200h.png"
            alt="Rectangle20buttonI742"
            className="invent-dashboard-rectangle20button"
          />
          <img
            src="/playground_assets/rectangle21buttoni742-g2ua-200h.png"
            alt="Rectangle21buttonI742"
            className="invent-dashboard-rectangle21button"
          />
          <span className="invent-dashboard-text">
            <span><Link to="/employee-dashboardcopy1">Employee</Link></span>
          </span>
          <span className="invent-dashboard-text02">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Customer</Link>
              </button>
            </span>
          </span>
          <span className="invent-dashboard-text04">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Supplier</Link>
              </button>
            </span>
          </span>
          <span className="invent-dashboard-text06">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Payment</Link>
              </button>
            </span>
          </span>
          <span className="invent-dashboard-text08">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Store Items</Link>
                </button>
            </span>
          </span>
          <span className="invent-dashboard-text10">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Renting</Link>
              </button>
            </span>
          </span>
          <span className="invent-dashboard-text12">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to='/invent-dashboard'>Inventory</Link>
              </button>
            </span>
          </span>
          <span className="invent-dashboard-text14">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                  <Link to=''>Utility Bills</Link>
              </button>
            </span>
          </span>
        </div>
        <div className="invent-dashboard-topbar">
          <div className="invent-dashboard-topbar1">
            <img
              src="/playground_assets/rectangle2i742-mxxs-200h.png"
              alt="Rectangle2I742"
              className="invent-dashboard-rectangle2"
            />
            <img
              src="/playground_assets/rectangle14i742-t3-200h.png"
              alt="Rectangle14I742"
              className="invent-dashboard-rectangle14"
            />
            <span className="invent-dashboard-text16">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti742-3c4q.svg"
              alt="mdiaccountI742"
              className="invent-dashboard-mdiaccount"
            />
          </div>
        </div>
        <span className="invent-dashboard-text18">
          <span>INVENTORY MANAGEMENT</span>
        </span>

        {/*Search Bar */}
        <img
          src="/playground_assets/rectangle67423-gd6j-200h.png"
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
          src="/playground_assets/icons8search2417423-6rst-200h.png"
          alt="icons8search2417423"
          className="invent-dashboard-icons8search241"
          id='search-icon'
          onClick={handleSearch}
        />

        {/*Add New Item Button */}
        <div className="invent-dashboard-addnewitembutton">
          <span className="invent-dashboard-text22">
            <span>
              <button style={{color:'white' , fontWeight:'bold'}}> 
                <Link to ="/add-invent-item">Add New Item</Link>
              </button>
            </span>
          </span>
          <img
            src="/playground_assets/materialsymbolsadd7423-5t1v.svg"
            alt="materialsymbolsadd7423"
            className="invent-dashboard-materialsymbolsadd"
          />
        </div>

        {/*Download Items */}
        <div className="invent-dashboard-downloadbutton">
          <div className="invent-dashboard-downloadreport">
            <img
              src="/playground_assets/rectangle22i742-mjd5-200h.png"
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
              src="/playground_assets/materialsymbolsdownloadroundedi742-wpt.svg"
              alt="materialsymbolsdownloadroundedI742"
              className="invent-dashboard-materialsymbolsdownloadrounded"
            />
          </div>
        </div>

        {/*Low Stock Items */}
        <div className="invent-dashboard-lowstock-itembutton">
          <div className="invent-dashboard-downloadreport1">
            <img
              src="/playground_assets/rectangle22i742-mjd5-200h.png"
              alt="Rectangle22I742"
              className="invent-dashboard-rectangle221"
            />
            <span className="invent-dashboard-text26 ">
              <span>
                <button style={{color:'white' , fontWeight:'bold'}}> 
                  <a href ='/invent-low-stock-items'>Low Stock Items</a>
                </button>
              </span>
            </span>
          </div>
        </div>


        <span className="invent-dashboard-text28">
          <span>INVENTORY TABLE</span>
        </span>0
.        <div className="invent-dashboard-rectangle81">
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
              			        <TbEye size={18} color='#4B259B' 
                			      onMouseOver={({target})=>target.style.color="red"}
                			      onMouseOut={({target})=>target.style.color="#4B259B"}/>
            		          </span>
			                  </button>
		                  </td>
                      
                      <td>
			                  <button onClick={() => handleUpdate(inventItem)}>
				                  <span>
              			        <TbEdit size={18} color='#4B259B' 
                			      onMouseOver={({target})=>target.style.color="blue"}
                			      onMouseOut={({target})=>target.style.color="#4B259B"}/>
            		          </span>
                        </button>
                      </td>
                      <td>
			                  <button onClick={() => handleDelete(inventItem._id)}>
            		          <span>
           			              <TbTrash size={18} color='#4B259B' 
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
