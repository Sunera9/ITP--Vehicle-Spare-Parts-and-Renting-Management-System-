import React from 'react';

import './item-page.css'
import './global.css'
//import './bootstrap.min.js'
//import './font-awesome.min.css'
import './bootstrap.min.css'
import { Link } from 'react-router-dom';

const TopSection = () =>  {
  return (

                      
     <nav className="navbar nav_t" style={{top:"80px",width:"1000px"}}>
                              
      <div className="container" style={{justifyContent:"center"}}>
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
            <Link to="/home-page" className="m_tag">
      Home
          </Link>
            </li>
            <li >
            <Link to="/item-page" className="m_tag">
      Product
          </Link>
             
            </li>
            <li >
            <Link to="/" className="m_tag">
      Rent a Vehicle
          </Link>
            </li>
           
            <li>
            <Link to="/" className="m_tag">
      About Us
          </Link>
            </li>
            <li>
            <Link to="/" className="m_tag">
      Contact Us
          </Link>
            </li>
            
                </ul>
                </div>
                </div>
                </nav>
                
                       
                  
  );
}

export default TopSection;