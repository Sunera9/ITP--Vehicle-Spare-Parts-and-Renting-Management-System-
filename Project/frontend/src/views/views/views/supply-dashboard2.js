import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet'

import './supply-dashboard2.css'

import { logoutSupplier } from '../services/supplierService'
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN } from '../redux/features/auth/supplySlice'
import { Link, useHistory } from 'react-router-dom'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify'


const SupplyDashboard2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
   
  const logout = async () => {
    await logoutSupplier();
    await dispatch(SET_LOGIN(false));
    history.push("/chat-section");
}

const [supplys, setSupplys] = useState([]);

useEffect(() => {
  //fetch supply data
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/supplys/allsupplys");
    const data = await response.json();
    setSupplys(data);
  };
  fetchData();
}, []);

console.log(supplys)

//deleting a supply record
function handleDelete(id) {
  axios.delete(`http://localhost:5000/api/supplys/Delete/${id}`).then(() => {
    setSupplys(supplys.filter((supply) => supply._id !== id));
    toast.warning("Supply details Deleted!")

  }).catch((error) => {
         console.error(error);
  });
}



//updating a supply record
const handleUpdatedSupply = (supplyToUpdate) => {
  //navigate to the editsupply page with the supplyToUpdate object as a state
  history.push({
    pathname: `/edit-supply/${supplyToUpdate._id}`,
    state: {supplyToUpdate}
  });
};




/*
//updating a supply record
function handleUpdatedSupply(id, updatedData) {
  axios.patch(`http://localhost:5000/api/suppliers/updatesupplier ${id}`, updatedData)
  .then(() => {
    //setSupplys(supplys.filter((supply) => supply._id !== id));
    setSupplys(supplys.map((supply) => supply._id === id ? { ...supply, ...updatedData } : supply));
    toast.warning("Supply details Updated!")


  //navigate to the editsupply page with the supplyToUpdate object as a state
  history.push({
    pathname: `/edit-supply/${updatedData._id}`,
    state: {supplyToUpdate}
  });



  }).catch((error) => {
         console.error(error);
  });
}
*/




//search functionality
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    history.push({
      pathname: '/searchSupply',
      search: `?q=${searchQuery}`
    });
  };



  return (
    <div className="supply-dashboard2-container">
      <Helmet>
        <title>Shantha Motors®- Supplier Dashboard</title>
      </Helmet>
        <div className="supply-dashboard2-supply-dashboard2">
        <div className="supply-dashboard2-group37">
          <span className="supply-dashboard2-text">
          <span><input type='text' placeholder='Search here' id='search-box'
         value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}
          style={{ textAlign: 'center'}} /></span>
        </span>
          

          <img
            src="/playground_assets/icons8search2412358-2ji3-200h.png"
            alt="icons8search2412358"
            className="supply-dashboard2-icons8search241"
            id='search-icon'
            onClick={handleSearch}
          />  



        </div>
        <div className="supply-dashboard2-group33">
          <img
            src="/playground_assets/rectangle7button2351-ihkc-200h.png"
            alt="Rectangle7button2351"
            className="supply-dashboard2-rectangle7button"
          />
          <img
            src="/playground_assets/rectangle22button2351-8f0e-200h.png"
            alt="Rectangle22button2351"
            className="supply-dashboard2-rectangle22button"
          />
          <span className="supply-dashboard2-text02">
          <span><button style={{ color: 'white', fontWeight: 'bold' }}>
              <a href='http://localhost:5000/api/supplys/print' download>
                Download Report
              </a>
            </button></span>
          </span>

          <span className="supply-dashboard2-text04">
          <span><Link to="/addnew-supply">+Add Suppliers</Link></span>
          </span>
          <img
            src="/playground_assets/rectangle7button2351-13pir-200h.png"
            alt="Rectangle7button2351"
            className="supply-dashboard2-rectangle7button1"
          />
          <span className="supply-dashboard2-text06">
          <span><Link to="/chat-section">CHAT SECTION</Link></span>
          </span>
          <img
            src="/playground_assets/vector2351-tgqf.svg"
            alt="Vector2351"
            className="supply-dashboard2-vector"
          />
        </div>
       
        
        <span className="supply-dashboard2-text13">
          <span>Supplier Management</span>
        </span>
        <img
          src="/playground_assets/rectangle3svg2353-p2g-800h.png"
          alt="Rectangle3svg2353"
          className="supply-dashboard2-rectangle3svg"
        />
        <img
          src="/playground_assets/pnglogoimage1svg2353-zfv-200h.png"
          alt="PNGLogoimage1svg2353"
          className="supply-dashboard2-pn-logoimage1svg"
        />
        <div className="supply-dashboard2-group28">
          <img
            src="/playground_assets/rectangle10button2353-iq0f-200h.png"
            alt="Rectangle10button2353"
            className="supply-dashboard2-rectangle10button"
          />
          <img
            src="/playground_assets/rectangle15button2353-7jwt-200h.png"
            alt="Rectangle15button2353"
            className="supply-dashboard2-rectangle15button"
          />
          <img
            src="/playground_assets/rectangle16button2353-jxun-200h.png"
            alt="Rectangle16button2353"
            className="supply-dashboard2-rectangle16button"
          />
          <img
            src="/playground_assets/rectangle17button2353-1h1-200h.png"
            alt="Rectangle17button2353"
            className="supply-dashboard2-rectangle17button"
          />
          <img
            src="/playground_assets/rectangle18button2353-gjb2-200h.png"
            alt="Rectangle18button2353"
            className="supply-dashboard2-rectangle18button"
          />
          <img
            src="/playground_assets/rectangle19button2353-pcgg-200h.png"
            alt="Rectangle19button2353"
            className="supply-dashboard2-rectangle19button"
          />
          <img
            src="/playground_assets/rectangle20button2354-3bc-200h.png"
            alt="Rectangle20button2354"
            className="supply-dashboard2-rectangle20button"
          />
          <img
            src="/playground_assets/rectangle21button2354-65bh-200h.png"
            alt="Rectangle21button2354"
            className="supply-dashboard2-rectangle21button"
          />
        </div>
        <div className="supply-dashboard2-group29">
          <span className="supply-dashboard2-text15">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
          </span>
          <span className="supply-dashboard2-text17">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
          </span>
          <span className="supply-dashboard2-text19">
          <span><Link to="/supply-dashboard2">Supplier</Link></span>
          </span>
          <span className="supply-dashboard2-text21">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
          </span>
          <span className="supply-dashboard2-text23">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Store Items</button></span>
          </span>
          <span className="supply-dashboard2-text25">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Renting</button></span>
          </span>
          <span className="supply-dashboard2-text27">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
          </span>
          <span className="supply-dashboard2-text29">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
          </span>
        </div>
        <img
          src="/playground_assets/rectangle2svg2355-kkb-200h.png"
          alt="Rectangle2svg2355"
          className="supply-dashboard2-rectangle2svg"
        />
        <div className="supply-dashboard2-group281">
          <img
            src="/playground_assets/rectangle14button2355-tctc-200h.png"
            alt="Rectangle14button2355"
            className="supply-dashboard2-rectangle14button"
          />
          <span className="supply-dashboard2-text31">
            <span>Log Out</span>
          </span>
        </div>
        <img
          src="/playground_assets/mdiaccount2355-xaa.svg"
          alt="mdiaccount2355"
          className="supply-dashboard2-mdiaccount"
        />
        <img
          src="/playground_assets/rectangle442352-fh9c-200h.png"
          alt="Rectangle442352"
          className="supply-dashboard2-rectangle44"
        />
        <span className="supply-dashboard2-text33">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>

     {/*displaying Supplys */}
  <span className='supply-dashboard2-frame36'> 
  <table id='sup'>
    <thead>
       <tr>
          <th> Company Name </th>
          <th> Supplying Items </th>
          <th> Qty </th>
          <th> Prices </th>
          <th> Order Status </th>
          <th> Date </th>
          <th> Edit </th>
          <th> Delete </th>
       </tr>
    </thead>
    <tbody> 
        {Array.isArray(supplys) && supplys.map((supply) => {
          return(
            <tr key={supply._id} >
              <td> {supply.company_name} </td>
              <td> {supply.item_name} </td>
            
              <td> {supply.quantity} </td>
              <td> {supply.price} </td>
              <td> {supply.Order_status} </td>
              <td> {supply.date} </td>
              <td>
              
                 <button onClick={() => handleUpdatedSupply(supply)}>
                    <span>
                    <FaEdit size={18} color='#4B259B'
                      onMouseOver={({target})=>target.style.color="green"} 
                      onMouseOut={({target})=>target.style.color="#4B259B"}         />
                    </span>
                    </button> </td>


              <td> <button onClick={() => handleDelete(supply._id)}>
                <span>
                  <FaTrashAlt size={18} color='#4B259B'
                    onMouseOver={({target})=>target.style.color="red"} 
                    onMouseOut={({target})=>target.style.color="#4B259B"}/>
                  </span>  
                </button></td>
                </tr>
                   ) 
           })}
    </tbody>
  </table>
  </span>    
      </div>
    </div>
  )
}

export default SupplyDashboard2
