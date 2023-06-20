import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { Link, useHistory, useLocation } from 'react-router-dom'

import './edit-supply.css'
import axios from 'axios'


const EditSupply = () => {

    const location = useLocation();
    const history = useHistory();

    const [supply, setSuppply] = useState ({
      id: null,
      company_name: '',
      item_name: '',
      quantity: 0,
      price: 0,
      Order_status: '',
      date: ''
  });

   useEffect (() => {
     if(location.state) {
       setSuppply (location.state.supplyToUpdate); 
     }
   }, [location]);
   
   const handleChange = (e) => {
    const { name, value } = e.target;
    setSuppply (prevState => ({
      ...prevState,
      [name]: value,
    }));
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(supply);
   
   try {
    const response = await axios.patch(`http://localhost:5000/api/supplys/${supply._id}` , supply);
    console.log (response.data);
   //Updatedsupplydetails (response.data);
    history.push ('/supply-dashboard2');

   } catch(error) {
    console.log(error);
   }
  };




  return (
    <div className="edit-supply-container">
      <Helmet>
        <title>Shantha Motors®- Edit Supply dashboard</title>
      </Helmet>
      <div className="edit-supply-edit-supply">
        <img
          src="/playground_assets_editSupply/blurredbackground11svg1908-go9k-900h.png"
          alt="blurredBackground11svg1908"
          className="edit-supply-blurred-background11svg"
        />
        <div className="edit-supply-group27">
          <img
            src="/playground_assets_editSupply/rectangle26svg1909-nnch-500h.png"
            alt="Rectangle26svg1909"
            className="edit-supply-rectangle26svg"
          />
          <img
            src="/playground_assets_editSupply/rectangle2svg1909-48gj-200h.png"
            alt="Rectangle2svg1909"
            className="edit-supply-rectangle2svg"
          />
          <img
            src="/playground_assets_editSupply/rectangle3svg1909-bx9q8-800h.png"
            alt="Rectangle3svg1909"
            className="edit-supply-rectangle3svg"
          />
        </div>
        <img
          src="/playground_assets_editSupply/pnglogoimage1svg1909-pnce-200h.png"
          alt="PNGLogoimage1svg1909"
          className="edit-supply-pn-logoimage1svg"
        />

        {/*Edit supply Form */}
        <form onSubmit={handleSubmit} >
          <span className="edit-supply-text88">
          </span>

        <div className="edit-supply-group26">
          <span className="edit-supply-text">
            <span><button type="submit" style={{ color: 'white',fontWeight: 'bold',textAlign:'center' }}> Edit Supply </button></span>
          </span>
        </div>

      
          <div className="edit-supply-group25">
            <img
              src="/playground_assets_editSupply/rectangle10button1909-5sfi-200h.png"
              alt="Rectangle10button1909"
              className="edit-supply-rectangle10button"
            />
            <img
              src="/playground_assets_editSupply/rectangle15button1909-ckc-200h.png"
              alt="Rectangle15button1909"
              className="edit-supply-rectangle15button"
            />
            <img
              src="/playground_assets_editSupply/rectangle16button1901-p41o-200h.png"
              alt="Rectangle16button1901"
              className="edit-supply-rectangle16button"
            />
            <img
              src="/playground_assets_editSupply/rectangle17button1901-pyh-200h.png"
              alt="Rectangle17button1901"
              className="edit-supply-rectangle17button"
            />
            <img
              src="/playground_assets_editSupply/rectangle18button1901-4bvq-200h.png"
              alt="Rectangle18button1901"
              className="edit-supply-rectangle18button"
            />
            <img
              src="/playground_assets_editSupply/rectangle19button1901-zc4p-200h.png"
              alt="Rectangle19button1901"
              className="edit-supply-rectangle19button"
            />
            <img
              src="/playground_assets_editSupply/rectangle20button1901-9ayk-200h.png"
              alt="Rectangle20button1901"
              className="edit-supply-rectangle20button"
            />
            <img
              src="/playground_assets_editSupply/rectangle21button1901-grzh-200h.png"
              alt="Rectangle21button1901"
              className="edit-supply-rectangle21button"
            />
          </div>
          <div className="edit-supply-group24">
            <span className="edit-supply-text02">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
            </span>
            <span className="edit-supply-text04">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
            </span>
            <span className="edit-supply-text06">
            <span><Link to="/supply-dashboard2">Supplier</Link></span>
            </span>
            <span className="edit-supply-text08">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
            </span>
            <span className="edit-supply-text10">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Store Items</button></span>
            </span>
            <span className="edit-supply-text12">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Renting</button></span>
            </span>
            <span className="edit-supply-text14">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
            </span>
            <span className="edit-supply-text16">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
            </span>
          </div>
          <div className="edit-supply-group23">
            <img
              src="/playground_assets_editSupply/rectangle14button1901-7hn-200h.png"
              alt="Rectangle14button1901"
              className="edit-supply-rectangle14button"
            />
            <span className="edit-supply-text18">
              <span>Log Out</span>
            </span>
          </div>


          <img
            src="/playground_assets_editSupply/mdiaccount1901-hojg.svg"
            alt="mdiaccount1901"
            className="edit-supply-mdiaccount"
          />
          <div className="edit-supply-group21">
            <img
              src="/playground_assets_editSupply/rectangle29input1901-3dm-200h.png"
              alt="Rectangle29input1901"
              className="edit-supply-rectangle29input"
            />
            <input className='edit-supply-rectangle29input'  
            type="text"  
            value={supply.company_name} onChange={handleChange} 
            style={{ textAlign: 'center' }} />


            <img
              src="/playground_assets_editSupply/rectangle49input1901-gwk-200h.png"
              alt="Rectangle49input1901"
              className="edit-supply-rectangle49input"
            />
            <input className='edit-supply-rectangle49input' 
             type="text" name="Order_status"
             value={supply.Order_status} onChange={handleChange} 
             style={{ textAlign: 'center' }} />


            <img
              src="/playground_assets_editSupply/rectangle50input1901-16x-200h.png"
              alt="Rectangle50input1901"
              className="edit-supply-rectangle50input"
            />
            <input className='edit-supply-rectangle50input' 
            type="date" name="date"
             value={supply.date} onChange={handleChange} 
             style={{ textAlign: 'center' }} />
          </div>


          {/**group 19 */}
          <div className="edit-supply-group19">
            <span className="edit-supply-text20">
              <span>Item Name</span>
            </span>
            <span className="edit-supply-text22">
              <span>Item Quantity</span>
            </span>
            <span className="edit-supply-text24">
              <span>Unit Price(Rs.)</span>
            </span>
          </div>

          <img
            src="/playground_assets_editSupply/rectangle55input1901-f3y-200h.png"
            alt="Rectangle55input1901"
            className="edit-supply-rectangle55input"
          />
          <input className='edit-supply-rectangle55input'  type="text" name="quantity"
           value={supply.quantity} onChange={handleChange} 
            style={{ textAlign: 'center' }} />


          <img
            src="/playground_assets_editSupply/rectangle56input1901-uaki-200h.png"
            alt="Rectangle56input1901"
            className="edit-supply-rectangle56input"
          />
          <input className='edit-supply-rectangle56input'  type="text" name="price"
           value={supply.price} onChange={handleChange} 
            style={{ textAlign: 'center' }} />



          {/**group 20 */}
          <div className="edit-supply-group20">
           
           
            <img
              src="/playground_assets_editSupply/rectangle54input1901-rgo5-200h.png"
              alt="Rectangle54input1901"
              className="edit-supply-rectangle54input"
            />
            
            
           
            
            <input className='edit-supply-rectangle54input'  type="text" name="item_name"
             value={supply.item_name} onChange={handleChange} 
              style={{ textAlign: 'center' }} />

   

          </div>
          <div className="edit-supply-group22">
            <span className="edit-supply-text26">
              <span>Company Name:</span>
            </span>
            <span className="edit-supply-text28">
              <span>Order Status:</span>
            </span>
            <span className="edit-supply-text30">
              <span>Date:</span>
            </span>
          </div>

       
        <div className="edit-supply-group18">
          <span className="edit-supply-text32">
            <span>EDIT SUPPLY</span>
          </span>
        </div>
        </form>
      </div>
    </div>
  )
}

export default EditSupply
