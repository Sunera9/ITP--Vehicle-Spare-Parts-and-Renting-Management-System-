import React from 'react';

import './item-page.css'
import './global.css'
//import './bootstrap.min.js'
//import './font-awesome.min.css'
import './bootstrap.min.css'

const TopSection = () =>  {
  return (

                      
     <nav className="navbar nav_t" style={{top:"110px",width:"1000px"}}>
                              
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
              <a className="m_tag" href="index.html">
                Home
              </a>
            </li>
            <li >
              <a
                className="m_tag"
                href="#"
              >
                Product
              </a>
             
            </li>
            <li >
              <a
                className="m_tag"
                href="#"
              >
               Rent a Vehicle
              </a>
            </li>
           
            <li>
              <a className="m_tag" href="services.html">
                About Us
              </a>
            </li>
            <li>
              <a className="m_tag" href="contact.html">
                Contact Us
              </a>
            </li>
            
                </ul>
                </div>
                </div>
                </nav>
                
                       
                  
  );
}

export default TopSection;