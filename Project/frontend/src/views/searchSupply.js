import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'

import './supply-dashboard2.css'

import { logoutSupplier } from '../services/supplierService'
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN } from '../redux/features/auth/supplySlice'
import { Link, useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function SearchSupply() {
    const [supplys, setSupplys] = useState([]);
        const [data, setData] = useState ([]);
      
        const location = useLocation();
        const searchQuery = new URLSearchParams(location.search).get("q");
      
        useEffect (() => {
          fetch (`http://localhost:5000/api/supplys/searchSupply/${searchQuery}`)
          .then (res => res.json())
          .then (data => setData (data))
          .catch (err => console.log (err));
        }, [searchQuery]);
    

  const dispatch = useDispatch();
  const history = useHistory();
   
  const logout = async () => {
    await logoutSupplier();
    await dispatch(SET_LOGIN(false));
    history.push("/chat-section");
}


console.log(supplys)

  return (
    <div className="supply-dashboard2-container">
      <Helmet>
        <title>Shantha Motors®- Supplier Dashboard</title>
      </Helmet>
        <div className="supply-dashboard2-supply-dashboard2">
        
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
  
       </tr>
    </thead>
<tbody>
        {data.map((supply, index) => (
                <tr key={index}>
                  <td>{supply.company_name}</td>
                  <td>{supply.item_name}</td>
                  <td>{supply.quantity}</td>
                  <td>{supply.price}</td>
                  <td>{supply.Order_status}</td>
                  <td>{supply.date}</td>
                  
              {/* Render other supply details in corresponding table cells */}
            </tr>
          ))}
        </tbody>
  </table>
  </span>   
      </div>
    </div>
  )
}

export default SearchSupply