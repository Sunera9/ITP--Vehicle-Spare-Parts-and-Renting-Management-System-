import React, {useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './update-invent-item.css'
import{Link, useHistory} from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectinventItem, updateInvent} from '../redux/features/invent/inventSlice'


const UpdateInventItem = (props) => {

  
  const [inventUpdate, setUpdateItem] = useState(props.location.state.inventUpdate);
  const history = useHistory();

  //function to handle form input changes
  const handleChange = (event) =>{

    const {name, value} = event.target;
    setUpdateItem({...inventUpdate, [name]: value});
  }

  //function to handle form submission
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try {
      //update invent item data on backend
      const response = await fetch(`http://localhost:5000/api/InventoryItems/updateInventDetails/${inventUpdate._id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inventUpdate)
      });
      if (response.ok) {
        const updateInventItem = await response.json();
        // Redirect to Invent Item details page after successful update
        history.push(`/invent-dashboard/${updateInventItem._id}`)
        
      } else {
        console.error('Error in Updating Inventory Item:', response.statusText);
      }
      
    } catch (error) {
      console.error('Error in Updating Inventory Item:', error);   
    }
  }


  



  /*const location = useLocation();
  const history = useHistory();

  const [inventItem, setInventItem] = useState({
    id:null,
    itemName:'',
    sku: '',
    condition: '',
    tax: '',
    newPrice: '',
    initialQuantity: '',
    quantityOut: '',
    availableQuantity: '',
    totalPrice:''
  });

  useEffect(() => {
    if (location.state) {
      setInventItem
      
    }
  }, [location]);

  const handleUpdate = (e) =>{
    const{name,value} = e.target;
    setInventItem(prevState =>({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const response = await axios.put (`http://localhost:5000/api/InventoryItems/updateInventDetails/${inventItem.id}`, inventItem);
      console.log(response.data);
      history.push('./views/invent-dashboard');

    } catch (error) {
      console.log(error);
    }
  };*/




  return (
    <div className="update-invent-item-container">
      <Helmet>
        <title>updateInventItem</title>
        <meta
          property="og:title"
          content="updateInventItem - exported project"
        />
      </Helmet>
      <div className="update-invent-item-updateitem">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/5ea81c77-8e3b-4ef3-a05e-f610416556a9?org_if_sml=1329716"
          alt="blurredBackground1383"
          className="update-invent-item-blurred-background"
        />
        <div className="update-invent-item-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/2d35e8e4-1ad4-4947-955f-1d7f5053adb6?org_if_sml=13208"
            alt="Rectangle3I138"
            className="update-invent-item-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/a4c80fa4-f4c5-4ea0-9761-244cd2a29a80?org_if_sml=18988"
            alt="PNGLogoimage1I138"
            className="update-invent-item-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/92f3f218-b5db-4a82-b148-350653369b37?org_if_sml=1706"
            alt="Rectangle10I138"
            className="update-invent-item-rectangle10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/2edaa05e-dbdb-48ee-be97-db67ff69109a?org_if_sml=1706"
            alt="Rectangle15I138"
            className="update-invent-item-rectangle15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/1b2d1fca-e06a-41dc-8ef4-f86af9a93b9a?org_if_sml=1706"
            alt="Rectangle16I138"
            className="update-invent-item-rectangle16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/af0a9529-d2a6-4fdb-b7aa-8b5c6f92957a?org_if_sml=1706"
            alt="Rectangle17I138"
            className="update-invent-item-rectangle17"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/a64b6b5a-4d14-4c91-bfa6-71d0020f53b6?org_if_sml=1706"
            alt="Rectangle18I138"
            className="update-invent-item-rectangle18"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/560592bf-63ce-47d6-a43f-a56685b77942?org_if_sml=1706"
            alt="Rectangle19I138"
            className="update-invent-item-rectangle19"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/f8593bcd-10cc-41bf-9326-7f76c3a1b69c?org_if_sml=1706"
            alt="Rectangle20I138"
            className="update-invent-item-rectangle20"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/38e5148a-b795-4539-8e47-01c0cd84ffd9?org_if_sml=1706"
            alt="Rectangle21I138"
            className="update-invent-item-rectangle21"
          />

          <span className="update-invent-item-text">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Employee</Link>
              </button>
            </span>
          </span>
          
          <span className="update-invent-item-text02">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Customer</Link>
              </button>
            </span>
          </span>

          <span className="update-invent-item-text04">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Supplier</Link>
              </button>
            </span>
          </span>
          
          
          <span className="update-invent-item-text06">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Payment</Link>
              </button>
            </span>
          </span>

           <span className="update-invent-item-text08">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Store Items</Link>
              </button>
            </span>
          </span>

          <span className="update-invent-item-text10">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Renting</Link>
              </button>
            </span>
          </span>

          <span className="update-invent-item-text12">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Inventory</Link>
              </button>
            </span>
          </span>

          <span className="update-invent-item-text14">
            <span>
              <button style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to='/'>Utility Bills</Link>
              </button>
            </span>
          </span> 
        </div>


          
        <div className="update-invent-item-topbar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/b2e97fcb-ad93-40f0-81fe-70c317d740fb?org_if_sml=1612"
            alt="Rectangle2I138"
            className="update-invent-item-rectangle2"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/c433ceba-8ede-400c-a8c2-3ff43bcc77d4?org_if_sml=1552"
            alt="Rectangle14I138"
            className="update-invent-item-rectangle14"
          />
          
          <span className="update-invent-item-text16">
            <span>
              <button style={{color:'black' , fontWeight:'bold'}}> Log Out</button>
            </span>
          </span>

          <img
            src="/playground_assets/mdiaccounti138-mg3v.svg"
            alt="mdiaccountI138"
            className="update-invent-item-mdiaccount"
          />
        </div>
        <div className="update-invent-item-addsalesitemform">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/ae21863d-6edb-4c97-ade9-bfda403a8be6?org_if_sml=1135252"
            alt="Rectangle491399"
            className="update-invent-item-rectangle49"
          />

          <form onSubmit={handleSubmit} >
            <input type="text" className="update-invent-item-rectangle39" name='itemName' value={inventUpdate.itemName} onChange={handleChange} style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text24">
                    <span>Item Name</span>
            </span>

            <input type="text" className="update-invent-item-rectangle51" name='sku' value={inventUpdate.sku} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text22">
                  <span>SKU Number</span>
            </span>

            <select id="condition"  className="update-invent-item-rectangle531"  name='condition' value={inventUpdate.condition} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}>
                <option></option>
                <option value="New">New</option>
  	            <option value="Tobe Purchase">To be Purchase</option>
  	            <option value="Purchase">Purchase</option>
  	            <option value="Tobe Sold">To be Sold</option>
                <option value="Sold">Sold</option>    
            </select>
            <span className="update-invent-item-text18">
                  <span>Inventory Condition</span>
            </span>

            <input type="text" className="update-invent-item-rectangle56" name='tax' value={inventUpdate.tax} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text20">
                  <span>Tax</span>
            </span>

            <input type="text" className="update-invent-item-rectangle52" name='newPrice' value={inventUpdate.newPrice} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text34">
                  <span>New Price (per item)</span>
            </span>

            <input type="text" className="update-invent-item-rectangle57" name='initialQuantity' value={inventUpdate.initialQuantity} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text30">
                  <span>Initial Quantity</span>
            </span>

            <input type="text" className="update-invent-item-rectangle53" name='quantityOut' value={inventUpdate.quantityOut} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text28">
                  <span>Quantity Out</span>
            </span>

            <input type="text" className="update-invent-item-rectangle54" name='quantityAvailable' value={inventUpdate.quantityAvailable} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text26">
                  <span>Available Quantity </span>
            </span>

            <input type="text" className="update-invent-item-rectangle55" name='totalPrice' value={inventUpdate.totalPrice} onChange={handleChange}  style={{textAlign:'center',fontWeight:'bold'}}/>
            <span className="update-invent-item-text32">
                  <span>Total Price </span>
            </span>


                
            <div className="update-invent-item-editbtn">
              <span className="update-invent-item-text36">
                <span>
                  <button type='submit' style={{color:'white' , fontWeight:'bold'}}> 
                    <Link to='/invent-dashboard'>SAVE</Link>
                  </button>
                </span>
              </span>
            </div>

            <div className="update-invent-item-cancelbtn">
              <span className="update-invent-item-text38">
                <span>
                  <button style={{color:'white' , fontWeight:'bold'}}> 
                    <Link to ='./views/invent-dashboard'>CANCEL</Link>
                  </button>
                </span>
              </span>
            </div>
          </form>

          
        </div>
        <div className="update-invent-item-title-inventory-management" >
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/75207159-8841-42c5-b56b-7a2a65d434db?org_if_sml=1381"
            alt="Rectangle761523"
            className="update-invent-item-rectangle76"
          />
          <span className="update-invent-item-text40">
            <span>
              <button style={{color:'white', fontWeight:'bold'}}>
                {/** <Link to ='./views/invent-dashboard'>EDIT ITEM</Link>*/}
              </button>
            </span>
          </span>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/5aa7abff-86d1-4040-ace4-94f33fa4254d?org_if_sml=1621"
          alt="Rectangle66114"
          className="update-invent-item-rectangle6"
        />
        
          {/*Search Bar */}
        <span >
          <span> 
            <input type="text" className="update-invent-item-rectangle6" name="search" placeholder='Search here by ID/ Condition' style={{textAlign:'center'}}>
            </input>
          </span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/c485d871-e81b-49a5-a560-302a41baf156?org_if_sml=11096"
          alt="icons8search2416114"
          className="update-invent-item-icons8search241"
        />
      </div>
    </div>
  )
}

export default UpdateInventItem
