import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'

import './view-invent-item.css'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';


function ViewInventItem  ()  {

  const location = useLocation();
  const inventItemView = location.state.inventView;

  useEffect(() =>{
    //fetch item details
    fetch(`http://localhost:5000/api/InventoryItems/getAll/${inventItemView._id}`)
    .then(response =>{
      if (!response.ok) {
        throw new Error ("Network Response was not ok")
      }
      return response.json();
    })
    .then(data =>{
      console.log('Item details fetch Success', data);
    })
    .catch(error =>{
      console.error('Error fetching Item Details:' , error);
    });
  },[]);


  return (
    <div className="view-invent-item-container">
      <Helmet>
        <title>viewInventItem - exported project</title>
      </Helmet>
      <div className="view-invent-item-view-invent-item">
        <img
          src="/playground_assets/blurredbackground7312-yz3-1600w.png"
          alt="blurredBackground7312"
          className="view-invent-item-blurred-background"
        />
        <img
          src="/playground_assets/rectangle787312-ydfr-200h.png"
          alt="Rectangle787312"
          className="view-invent-item-rectangle78"
        />
        <div className="view-invent-item-menubar">
          <img
            src="/playground_assets/rectangle3i731-ok5d-1100h.png"
            alt="Rectangle3I731"
            className="view-invent-item-rectangle3"
          />
          <img
            src="/playground_assets/pnglogoimage1i731-orr-200h.png"
            alt="PNGLogoimage1I731"
            className="view-invent-item-pn-logoimage1"
          />
          <img
            src="/playground_assets/rectangle10i731-pa67-200h.png"
            alt="Rectangle10I731"
            className="view-invent-item-rectangle10"
          />
          <img
            src="/playground_assets/rectangle15i731-b19m-200h.png"
            alt="Rectangle15I731"
            className="view-invent-item-rectangle15"
          />
          <img
            src="/playground_assets/rectangle16i731-cbbm-200h.png"
            alt="Rectangle16I731"
            className="view-invent-item-rectangle16"
          />
          <img
            src="/playground_assets/rectangle17i731-4ph-200h.png"
            alt="Rectangle17I731"
            className="view-invent-item-rectangle17"
          />
          <img
            src="/playground_assets/rectangle18i731-vq8g-200h.png"
            alt="Rectangle18I731"
            className="view-invent-item-rectangle18"
          />
          <img
            src="/playground_assets/rectangle19i731-36v4-200h.png"
            alt="Rectangle19I731"
            className="view-invent-item-rectangle19"
          />
          <img
            src="/playground_assets/rectangle20i731-pftl-200h.png"
            alt="Rectangle20I731"
            className="view-invent-item-rectangle20"
          />
          <img
            src="/playground_assets/rectangle21i731-r584-200h.png"
            alt="Rectangle21I731"
            className="view-invent-item-rectangle21"
          />
          <span className="view-invent-item-text">
            <span>Employee</span>
          </span>
          <span className="view-invent-item-text02">
            <span>Customer</span>
          </span>
          <span className="view-invent-item-text04">
            <span>Supplier</span>
          </span>
          <span className="view-invent-item-text06">
            <span>Payment</span>
          </span>
          <span className="view-invent-item-text08">
            <span>Store Items</span>
          </span>
          <span className="view-invent-item-text10">
            <span>Renting</span>
          </span>
          <span className="view-invent-item-text12">
            <span>Inventory</span>
          </span>
          <span className="view-invent-item-text14">
            <span>Utility Bills</span>
          </span>
        </div>
        <div className="view-invent-item-topbar">
          <img
            src="/playground_assets/rectangle2i731-ykbs9-200h.png"
            alt="Rectangle2I731"
            className="view-invent-item-rectangle2"
          />
          <img
            src="/playground_assets/rectangle14i731-s7v4-200h.png"
            alt="Rectangle14I731"
            className="view-invent-item-rectangle14"
          />
          <span className="view-invent-item-text16">
            <span>Log Out</span>
          </span>
          <img
            src="/playground_assets/mdiaccounti731-84xp.svg"
            alt="mdiaccountI731"
            className="view-invent-item-mdiaccount"
          />
        </div>
        <span className="view-invent-item-text18">
          <span>ITEM DETAILS</span>
        </span>
        <div className="view-invent-item-itemdetailsview">
          <img
            src="/playground_assets/rectangle517313-uikf-900h.png"
            alt="Rectangle517313"
            className="view-invent-item-rectangle51"
          />

          {/*Item Details Display */}


          <span className="view-invent-item-text22">
            <span>SKU Number</span>
          </span>
          <span >
              <input type='text' name='sku' readOnly value={inventItemView.sku}
                  className="view-invent-item-rectangle52" >
              </input>      
          </span>

          <span className="view-invent-item-text24">
            <span>Item Name</span>
          </span>
          <span >
              <input type='text' name='itemName' readOnly value={inventItemView.itemName}
                  className="view-invent-item-rectangle53" >
              </input>      
          </span>

          <span className="view-invent-item-text26">
            <span>Item Condition</span>
          </span>
          <span >
              <input type='text' name='condition' readOnly value={inventItemView.condition}
                  className="view-invent-item-rectangle54" >
              </input>      
          </span>

          <span className="view-invent-item-text28">
            <span>Item Category</span>
          </span>
          <span >
              <input type='text' name='category' readOnly value={inventItemView.category}
                  className="view-invent-item-rectangle55" >
              </input>      
          </span>

          <span className="view-invent-item-text34">
            <span>Available Quantity</span>
          </span>
          <span >
              <input type='text' name='quantityAvailable' readOnly value={inventItemView.quantityAvailable}
                  className="view-invent-item-rectangle61" >
              </input>      
          </span>

          <span className="view-invent-item-text36">
            <span>Total Price</span>
          </span>
          <span >
              <input type='text' name='totalPrice' readOnly value={inventItemView.totalPrice}
                  className="view-invent-item-rectangle63" >
              </input>      
          </span>

          <span className="view-invent-item-text38">
            <span>Supplier</span>
          </span>
          <span >
              <input type='text' name='supplier' readOnly value={inventItemView.supplier}
                  className="view-invent-item-rectangle62" >
              </input>      
          </span>

          <span className="view-invent-item-text40">
            <span>Brand</span>
          </span>
          <span >
              <input type='text' name='brand' readOnly value={inventItemView.brand}
                  className="view-invent-item-rectangle56" >
              </input>      
          </span>

          <span className="view-invent-item-text42">
            <span>Initial Price (per item)</span>
          </span>
          <span >
              <input type='text' name='initialPrice' readOnly value={inventItemView.initialPrice}
                  className="view-invent-item-rectangle57" >
              </input>      
          </span>

          <span className="view-invent-item-text44">
            <span>Initial Quantity</span>
          </span>
          <span >
              <input type='text' name='initialQuantity' readOnly value={inventItemView.initialQuantity}
                  className="view-invent-item-rectangle58" >
              </input>      
          </span>
   
          <div className="view-invent-item-cancelbutton">
            <span className="view-invent-item-text46">
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/invent-dashboard'>BACK</Link>
                </button>
              </span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewInventItem
