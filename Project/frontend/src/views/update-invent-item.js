import React, { useState,useEffect } from 'react'

import { Helmet } from 'react-helmet'

import './update-invent-item.css'

import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const UpdateInventItem = (props) => {

  //const location = useLocation();

  const [editItem, setEditItem] = useState(props.location.state.inventUpdate);
  const [availableQuantity, setAvailableQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const history = useHistory();

  // Calculate availableQuantity and totalPrice whenever initialQuantity or quantityOut changes
  useEffect(() => {
    const calculatedAvailableQuantity = editItem.initialQuantity - editItem.quantityOut;
    const calculatedTotalPrice = calculatedAvailableQuantity * editItem.initialPrice;

    setAvailableQuantity(calculatedAvailableQuantity);
    setTotalPrice(calculatedTotalPrice);
  }, [editItem.initialQuantity, editItem.quantityOut]);

  //handle other form input changes
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setEditItem({...editItem, [name]: value});
  }

  //handle totalPrice input in th form
  const handleTotalPriceChange = (e) => {
    const { value } = e.target;
    setTotalPrice(value);
  };

  //handle form submission
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try {
      //update item data in backend
      const response = await fetch(`http://localhost:5000/api/InventoryItems/updateInventDetails/${editItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editItem)
      });

      if (response.ok) {
        const updatedItem = await response.json();
        
        // Redirect to Invent Item details page after successful update
        history.push(`/invent-dashboard`);
      } else {
        console.error('Error updating Inventory Item:', response.statusText);
      }

    } catch (error) {
      console.log (error);
    }
  }


  return (
    <div className="update-invent-item-container">
      <Helmet>
        <title>update Invent Item </title>
        <meta
          property="og:title"
          content="updateInventItem - exported project"
        />
      </Helmet>
      <div className="update-invent-item-update-inventitem">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/6eacb837-bd6a-44dc-94db-ab6ee4cd14ac?org_if_sml=1329687"
          alt="blurredBackground1383"
          className="update-invent-item-blurred-background"
        />
        <div className="update-invent-item-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/e7097f1f-f2b1-4af0-beac-ef71b0128440?org_if_sml=13179"
            alt="Rectangle3I138"
            className="update-invent-item-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/4823eee0-ddcd-448f-b4eb-e20fdd08e036?org_if_sml=18959"
            alt="PNGLogoimage1I138"
            className="update-invent-item-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/cde86218-1f14-4a8c-9abc-c3a895088d39?org_if_sml=1677"
            alt="Rectangle10I138"
            className="update-invent-item-rectangle10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/a38a332b-449e-4825-bc49-49f5f4d1c789?org_if_sml=1677"
            alt="Rectangle15I138"
            className="update-invent-item-rectangle15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/1a32319f-67ec-4ed6-bf29-d5a076c6a72f?org_if_sml=1677"
            alt="Rectangle16I138"
            className="update-invent-item-rectangle16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/629fdacc-9dc3-4a5f-921a-ab9f33d31f69?org_if_sml=1677"
            alt="Rectangle17I138"
            className="update-invent-item-rectangle17"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/fe373a11-5a8c-4f72-a6a2-b27b7edae596?org_if_sml=1677"
            alt="Rectangle18I138"
            className="update-invent-item-rectangle18"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/d89e189b-4b12-47ac-a089-723ca709d317?org_if_sml=1677"
            alt="Rectangle19I138"
            className="update-invent-item-rectangle19"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/5cad6b9a-f4bf-4c8e-98c5-3dc59b52d111?org_if_sml=1677"
            alt="Rectangle20I138"
            className="update-invent-item-rectangle20"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/4cce44a1-6ce3-459f-bd69-d7da61502e3f?org_if_sml=1677"
            alt="Rectangle21I138"
            className="update-invent-item-rectangle21"
          />
          <span className="update-invent-item-text">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Employee</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text02">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Customer</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text04">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Supplier</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text06">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Payment</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text08">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Store Items</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text10">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Renting</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text12">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Inventory</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="update-invent-item-text14">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Utility Bills</Link>
                </button>
              </span>
            </span>
          </span>
        </div>
        <div className="update-invent-item-addsalesitemform">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/1550c4b6-fcaf-4b5f-8157-554d6a3ef84a?org_if_sml=1135223"
            alt="Rectangle491399"
            className="update-invent-item-rectangle49"
          />

          <form onSubmit={handleSubmit} >

            <span className="update-invent-item-text22">
              <span>Item Name</span>
            </span>
            <input type="text" className="update-invent-item-rectangle39" name='itemName'
            value={editItem.itemName} onChange={handleChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>


            <span className="update-invent-item-text20">
              <span>SKU Number</span>
            </span>
            <input type="text" className="update-invent-item-rectangle51" name='sku' 
              value={editItem.sku} onChange={handleChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>
              

            <span className="update-invent-item-text16">
              <span>item Condition</span>
            </span>
            <select id="condition" type="text"  className="update-invent-item-rectangle531"  name='condition' 
              value={editItem.condition} onChange={handleChange}
              style={{textAlign:'center',fontWeight:'bold'}}>
                  <option></option>
                  <option value="New">New</option>
                  <option value="Tobe Purchase">To be Purchase</option>
                  <option value="Purchase">Purchase</option>
                  <option value="Tobe Sold">To be Sold</option>
                  <option value="Sold">Sold</option>    
            </select>

            <span className="update-invent-item-text28">
              <span>Initial Quantity</span>
            </span>
            <input type="number" className="update-invent-item-rectangle57" name='initialQuantity' 
              value={editItem.initialQuantity} onChange={handleChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>


            <span className="update-invent-item-text26">
              <span>Quantity Out</span>
            </span>
            <input type="number" className="update-invent-item-rectangle53" name='quantityOut' 
              value={editItem.quantityOut} onChange={handleChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>

            
            <span className="update-invent-item-text24">
              <span>Available Quantity</span>
            </span>
            <input type="number" className="update-invent-item-rectangle54" name='quantityAvailable' 
              value={availableQuantity} onChange={handleChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>


            <span className="update-invent-item-text30">
              <span>Total Price</span>
            </span>
            <input type="number" className="update-invent-item-rectangle55" name='totalPrice' 
              value={totalPrice} onChange={handleTotalPriceChange}
            style={{textAlign:'center',fontWeight:'bold'}}/>

            
            <div className="update-invent-item-editbtn">
              <span className="update-invent-item-text34">
                <span>
                <button type='submit'  style={{ color: 'white', fontWeight: 'bold' }}>EDIT</button>
                </span>
              </span>
            </div>

            <div className="update-invent-item-cancelbtn">
              <span className="update-invent-item-text36">
                <span>
                <button type='submit'  style={{ color: 'white', fontWeight: 'bold' }}>CANCEL</button>
                </span>
              </span>
            </div>


          </form>
      
        </div>
        <div className="update-invent-item-title-inventory-management">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/36820a5a-c9b1-4265-9e1f-5709e9e22b2a?org_if_sml=1352"
            alt="Rectangle761523"
            className="update-invent-item-rectangle76"
          />
          <span className="update-invent-item-text38">
            <span>EDIT ITEM</span>
          </span>
        </div>
        <div className="update-invent-item-topbar">
          <div className="update-invent-item-topbar1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/69c60023-bad6-46b4-b46f-1c96818cd1b7?org_if_sml=1557"
              alt="Rectangle2I101"
              className="update-invent-item-rectangle2"
            />
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/2de6e6ff-0893-4203-91af-219fd4ae2280?org_if_sml=1523"
              alt="Rectangle14I101"
              className="update-invent-item-rectangle14"
            />
            <span className="update-invent-item-text40">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti101-6qas.svg"
              alt="mdiaccountI101"
              className="update-invent-item-mdiaccount"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateInventItem
