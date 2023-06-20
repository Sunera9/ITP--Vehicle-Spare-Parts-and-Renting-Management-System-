import React from 'react';
import  { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {useHistory} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './product-details.css'
import './global.css'
//import './bootstrap.min.js'
import './font-awesome.min.css'
//import './bootstrap.min.css'
import TopSection from './navbar';
import Navbar from './header';
import Component8 from './footer';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


function ProductDetails(){

    
    const location = useLocation();
    const productToView = location.state.productToView;
    const [imagePreview] = useState(null);
    //const [inStock, setInStock] = useState(false);
    

    useEffect(() => {
        // Fetch item details including the image from the backend
        axios.get(`http://localhost:5000/api/products/${productToView._id}`) // Replace with your API endpoint for fetching item details
          .then(response => {
            setProductToView(response.data);
            //setInStock(response.data.quantity > 0);
          })
          .catch(error => {
            console.error('Error fetching item details:', error);
          });
      }, []);
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onloadend = () => {
          setImagePreview(reader.result);
        }
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

      const [pquantity, setQuantity] = useState(1);
      const inStock = productToView.quantity > 0;


      function handleQuantityChange(event) {
        setQuantity(parseInt(event.target.value));
      }
    
      function increaseQuantity() {
        setQuantity(pquantity + 1);
      }
    
      function decreaseQuantity() {
        if (pquantity > 1) {
          setQuantity(pquantity - 1);
        }
      }
    return (

      <div >
   
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <section id="top">
      <Navbar />
      </section>
  
      <section id="#header">
        <TopSection/>
      </section>
      
<section id="shop_detail">
      <div className="container">
        <div className="row">
          <div className="shop_detail_1 clearfix">
            <div className="col-sm-6">
              <div className="center_detail_2_left clearfix">
                <div
                  id="article-photo-carousel"
                  className="carousel slide article-slide"
                  data-ride="carousel"
                >
                  {/* Wrapper for slides */}
                  <div className="">
                  <div className="item active">
                        <div className="mag">
                          <div className="magnify">
                            <div className="magnify">
                            
                              <img
                                src={`http://localhost:5000/${productToView?.image}`} alt={productToView.name}
                                style={{ boxShadow: "#ADA4BF" }}
                              />
                              <div
                                className="magnify-large"
                               
                              ></div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    
                  </div>

                  
                 
                 
                </div>
   
              </div>
            </div>
            <div className="col-sm-6">
  <div className="center_detail_2_right clearfix">
    <h3 className="mgt">{productToView .name}</h3>
    
    <h4>
      
      <span className="span_2 col_1">Rs.{productToView .price}</span>
    </h4>
    <p>
     <li>
     {productToView .description}
     </li>
    </p>
    <hr />
    <h4>Availablity</h4>
    <span className={`stock-label ${inStock ? 'in-stock' : 'out-of-stock'}`}>
  {inStock ? 'In Stock' : 'Out of Stock'}
</span>
    
    <h4>Quantity:</h4>
    <div className="input-group number-spinner">
      <span className="input-group-btn">
        <button onClick={decreaseQuantity}  className="btn btn-default" data-dir="dwn">
          <span className="glyphicon glyphicon-minus"></span>
        </button>
      </span>
      <input
        type="number" value={pquantity} onChange={handleQuantityChange}
        className="form-control text-center"
        style={{color:"black"}}
      />
      <span className="input-group-btn">
        <button onClick={increaseQuantity}  className="btn btn-default" data-dir="up">
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </span>
    </div>
    <div className="pd_n1 clearfix">
      <h4><a className="button" style={{backgroundColor:"#321375",fontFamily: "Inter",fontWeight: "bold"}}>ADD TO CART</a></h4>
     
    </div>
    
  </div>
</div>

          </div>
        </div>
        
      </div>
    </section>

    <section id='footer'>
      <Component8 />
    </section>
    </div>
    )
}
export default ProductDetails