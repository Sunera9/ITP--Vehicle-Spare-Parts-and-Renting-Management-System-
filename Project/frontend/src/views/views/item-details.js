import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './item-details.css'
//import { useParams } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ItemDetails () {

  const location = useLocation();
  const inventView = location.state.inventView;

  useEffect(() => {
    //fetch invent item details
    axios.get(`http://localhost:5000/api/InventoryItems/getAll/${inventView._id}`)
    .then(response =>{
      setInventView (response.data);

    })
    .catch(error =>{
      console.error('Error fetching Item Details:' , error);
    });
  },[]);

  

  /*const location = useLocation();
  const inventItemToView = location.state.inventItemToView;

  useEffect(() => {
    // Fetch invent item details
    //API endpoint for fetch item details
    axios.get(`http://localhost:5000/api/InventoryItems/getInventItemDetails/${inventItemToView._id}`)
    .then(response => {
      setProductToView(response.data);
    })
    .catch(error => {
      console.error('Error fetching Invent Item Details:', error);
    });

  },[]);*/


  return (
    <div className="item-details-container">
      <Helmet>
        <title>ItemDetails </title>
        <meta property="og:title" content="ItemDetails - exported project" />
      </Helmet>
      <div className="item-details-inventoryitem-detailed-report">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/8047963b-37ea-4a9c-b687-0a82e94cf4f9?org_if_sml=1329716"
          alt="blurredBackground1122"
          className="item-details-blurred-background"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/9482cee2-f094-4178-ba96-e07ed031cb6c?org_if_sml=1403"
          alt="Rectangle781526"
          className="item-details-rectangle78"
        />
        <div className="item-details-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/be75e219-6cd8-4fa7-8dab-9ffec68a44d5?org_if_sml=13208"
            alt="Rectangle3I112"
            className="item-details-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/082973fe-8fdb-43b9-97d0-58c4a3d1ba6e?org_if_sml=18988"
            alt="PNGLogoimage1I112"
            className="item-details-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/01437dfb-195d-4da1-a879-2e170858f3db?org_if_sml=1706"
            alt="Rectangle10I112"
            className="item-details-rectangle10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/60802655-dfed-4094-a0b0-b1914f52c6dd?org_if_sml=1706"
            alt="Rectangle15I112"
            className="item-details-rectangle15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/74832faf-012e-407f-868b-4776095226d6?org_if_sml=1706"
            alt="Rectangle16I112"
            className="item-details-rectangle16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/a3273fd0-2623-483a-8f14-f187e1539200?org_if_sml=1706"
            alt="Rectangle17I112"
            className="item-details-rectangle17"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/df260ec9-b150-470a-9fea-7a951af4f788?org_if_sml=1706"
            alt="Rectangle18I112"
            className="item-details-rectangle18"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/37d6902b-c72a-4727-bbfb-572d59ded2e2?org_if_sml=1706"
            alt="Rectangle19I112"
            className="item-details-rectangle19"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/dd65c535-c745-437e-8b63-d489d902c295?org_if_sml=1706"
            alt="Rectangle20I112"
            className="item-details-rectangle20"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/ac1f3abb-4bc9-4b84-a0f9-1b6cd76b39e0?org_if_sml=1706"
            alt="Rectangle21I112"
            className="item-details-rectangle21"
          />
          <span className="item-details-text">
            <span>
            <button style={{color: 'black',fontWeight: 'bold'}}>Employee</button>
            </span>
          </span>
          <span className="item-details-text02">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Customer</button>
            </span>
          </span>
          <span className="item-details-text04">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Supplier</button>
            </span>
          </span>
          <span className="item-details-text06">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Payement</button>
            </span>
          </span>
          <span className="item-details-text08">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Store Items</button>
            </span>
          </span>
          <span className="item-details-text10">
            <span><button style={{color:'black',fontWeight: 'bold'}}>Renting</button></span>
          </span>
          <span className="item-details-text12">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>
                <Link to='/invent-dashboard'>Inventory</Link>
            </button>
            </span>
          </span>
          <span className="item-details-text14">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Utility Bills</button>
            </span>
          </span>
        </div>
        <div className="item-details-topbar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/90d35beb-c4b1-442e-ac76-7b164a91f16f?org_if_sml=1612"
            alt="Rectangle2I112"
            className="item-details-rectangle2"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/773f931e-072e-4cfb-81a4-619ab9211ac2?org_if_sml=1531"
            alt="Rectangle14I112"
            className="item-details-rectangle14"
          />
          <span className="item-details-text16">
            <span>
            <button style={{color:'black',fontWeight: 'bold'}}>Log Out</button>
            </span>
          </span>
          <img
            src="/playground_assets/mdiaccounti112-ufew.svg"
            alt="mdiaccountI112"
            className="item-details-mdiaccount"
          />
        </div>

        <span className="item-details-text18">
          <span>ITEM DETAILS</span>
        </span>
        <div className="item-details-itemdetailsview">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a3d75bee-97df-4a92-b0a1-8a0f28cd7ef7/75078530-8d09-484b-9829-6432cecd3edb?org_if_sml=1139796"
            alt="Rectangle511138"
            className="item-details-rectangle51"
          />
          
          {/*Item Details Display */}

              <span className="item-details-text20">
                <span >Item Id</span>
              </span>
              <span >
                <input type='text' name='id' value={inventView ._id}
                  className="item-details-group19" >
                </input>      
              </span>
          
              <span className="item-details-text22">
                <span>SKU Number</span>
              </span>
              <span >
                <input type='text'  name='sku' value={inventView .sku}
                  className="item-details-group20" >
                </input>
                </span>


              <span className="item-details-text24">
                <span>Item Name</span>
              </span>
              <span >
                <input type='text'  name='itemName' value={inventView .itemName}
                  className="item-details-rectangle53" >
                </input>
              </span>
              


              <span className="item-details-text26">
                <span>Item Condition</span>
              </span>
              <span >
                <input type='text'  name='condition' value={inventView .condition}
                  className="item-details-itemconditionanswer" >
                </input>
              </span>


              <span className="item-details-text28">
                <span>Item Category</span>
              </span>
              <span >
                <input type='text'  name='category' value={inventView .category}
                  className="item-details-rectangle55" >
                </input>
                </span>
              


              <span className="item-details-text30">
                <span>Tax</span>
              </span>
              <span >
                <input type='text'  name='tax' value={inventView .tax}
                  className="item-details-rectangle59" >
                </input>
              </span>
              

              <span className="item-details-text32">
                <span>New Price</span>
              </span>
              <span >
                <input type='text'  name='newPrice' value={inventView .newPrice}
                  className="item-details-rectangle60" >
                </input>
              </span>
              

              <span className="item-details-text34">
                <span>Quantity Out</span>
              </span>
              <span >
                <input type='text'  name='qunatityOut' value={inventView .qunatityOut}
                  className="item-details-rectangle61" >
                </input>
              </span>
              

              <span className="item-details-text36">
                <span>Available Quantity</span>
              </span>
              <span >
                <input type='text'  name='quantityAvailable' value={inventView .quantityAvailable}
                  className="item-details-rectangle63" >
                </input>
              </span>
              

              <span className="item-details-text38">
                <span>Total Price</span>
              </span>
              <span  >
                <input type='text'  name='totalPrice' value={inventView .totalPrice}
                  className="item-details-rectangle62" >
                </input>
              </span>
              

              <span className="item-details-text40">
                <span>Brand</span>
              </span>
              <span >
                <input type='text'  name='brand' value={inventView .brand}
                  className="item-details-rectangle56">
                </input>
              </span>
              

              <span className="item-details-text42">
                <span>Initial Price (per item)</span>
              </span>
              <span >
                <input type='text'  name='initialPrice' value={inventView .initialPrice}
                  className="item-details-rectangle57" >
                </input>
              </span>
              

              <span className="item-details-text44">
                <span>Initial Quantity</span>
              </span>
              <span >
                <input type='text'  name='initialQuantity' value={inventView .initialQuantity}
                  className="item-details-rectangle58" >
                </input>
              </span>
              
              {/*qunatityOut */}

              <span className="item-details-text50">
                <span>Supplier</span>
              </span>
              <span >
                <input type='text'  name='supplier' value={inventView .supplier}
                  className="item-details-rectangle64" >
                </input>
              </span>

              
              
              <div className="item-details-cancelbutton">
                <span className="item-details-text46">
                  <span>
                  <button style={{color:'white' , fontWeight:'bold'}}> CANCEL</button>
                  </span>
                </span>
              </div>
              <div className="item-details-savebutton">
                <span className="item-details-text48">
                  <span>
                  <button style={{color:'white' , fontWeight:'bold'}}> EDIT</button>
                  </span>
                </span>
              </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
