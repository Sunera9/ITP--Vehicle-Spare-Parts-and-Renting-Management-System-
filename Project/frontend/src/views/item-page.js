import React from 'react';
import  { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {useHistory} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './item-page.css'
import './global.css'
//import './bootstrap.min.js'
//import './font-awesome.min.css'
import './bootstrap.min.css'
import TopSection from './navigation';
import Navbar from './navigationbar/navbar';
import Component8 from './footer';
//import './jquery-2.1.1.min.js'


const ItemPage = () =>  {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);

        const counts = {};
        data.forEach((product) => {
          const category = product.category;
          counts[category] = (counts[category] || 0) + 1;
        });
        setCounts(counts);
      });
  }, []);
  const history = useHistory();
  const handleviewProduct = (productToView) => {
    //navigate to view product page
    history.push({
      pathname:`/item-discription/${productToView._id}`,
      state: {productToView}
    });

    
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
    
  
     
 
    <section id="shop" >
    
      <div className="container" >
        <div className="row">
       
          <div className="shop_1 clearfix">
            <div className="col-sm-3">
              <div className="shop_1lm clearfix">
                <div className="product_1l mgt clearfix">
                  <h4 className="mgt" style={{ color: "rgba(50, 19, 117, 1)",fontWeight: "bold" ,fontFamily: "Inter"}}>
                    Our Partners</h4>
                  <hr />
                  <h5 style={{fontFamily: "Inter"}}> 
                    TOYOTA
                  </h5 >
                  <h5 style={{fontFamily: "Inter"}}>
                    NISSAN
                  </h5>
                  <h5 style={{fontFamily: "Inter"}}>
                    HONDA
                  </h5>
                  <h5 style={{fontFamily: "Inter"}}>
                    KIA
                  </h5>
                  <h5 style={{fontFamily: "Inter"}}>
                    SUZUKI
                  </h5>
                </div>
                <div className="product_1l clearfix">
      <h4 className="mgt" style={{ color: "rgba(50, 19, 117, 1)",fontWeight: "bold" ,fontFamily: "Inter"}}>
                    Categories</h4>
      <hr />
      <h5>
      <div>
                    {Object.entries(counts).map(([category, count]) => (
                      <div key={category} style={{ marginBottom: '10px',fontSize:'16px' ,fontFamily: "Inter"}}>
                        {category}   ({count})
                      </div>
                       ))}
    </div>
    </h5>
    </div>
              </div>
            </div>
            <div className="col-sm-9">
      <div className="product_1rm clearfix">
        <div className="product_1r clearfix">
        <h1 className="mgt" style={{ color: "white",fontFamily: "Inter" }}>Welcome To Shantha Motors</h1>

         
        </div>
        
        <div className="sell_o_1 clearfix">
        {products.map(product => (
          <div className="col-sm-4" >
          
            <div className="arriv_2m clearfix" style={{ margin: '10px' }}>
              <div key={product.id} className="arriv_2m1 clearfix">
                <a onClick={() => handleviewProduct (product)}><img src={`http://localhost:5000/${product?.image}`} alt={product.name} className="iw" /></a>
              </div>
              <div className="arriv_2m2n clearfix">
                <h5 className="text-center mgt">Sale</h5>
              </div>
              <div className="arriv_2m3 clearfix">
                <h4 className="bold mgt white-text" >{product.name}</h4>
            
                <h3 className="normal">
                  <span className="span_3 col_1" style={{fontWeight:"bold",color:"white"}}>Rs.{product.price}.00</span>
                </h3>
              </div>
            </div>
           
          </div>
          ))}
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
  );
}

export default ItemPage;