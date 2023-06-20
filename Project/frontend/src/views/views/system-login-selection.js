import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './system-login-selection.css'

const SystemLoginSelection = (props) => {
  return (
    <div className="system-login-selection-container">
      <Helmet>
        <title>Shantha Motors - Login</title>
      </Helmet>
      <div className="system-login-selection-system-login-selection">
        <img
          src="/playground_assets/signinbackground31891-c7ce-800h.png"
          alt="signinbackground31891"
          className="system-login-selection-signinbackground3"
        />
        <img
          src="/playground_assets/rectangle29162-q8kr-400h.png"
          alt="Rectangle29162"
          className="system-login-selection-rectangle29"
        />
        <img
          src="/playground_assets/rectangle31118-f1t-200h.png"
          alt="Rectangle31118"
          className="system-login-selection-rectangle3"
        />
        <img
          src="/playground_assets/rectangle21119-z4z8.svg"
          alt="Rectangle21119"
          className="system-login-selection-rectangle2"
        />
        <img
          src="/playground_assets/pnglogoimage2163-ulmu-200h.png"
          alt="PNGLogoimage2163"
          className="system-login-selection-pn-logoimage2"
        />
        <span className="system-login-selection-text">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        <img
          src="/playground_assets/rectangle27button1132-7rh-200h.png"
          alt="Rectangle27button1132"
          className="system-login-selection-rectangle27button"
        />
        <img
          src="/playground_assets/rectangle30button164-lzwq-200h.png"
          alt="Rectangle30button164"
          className="system-login-selection-rectangle30button"
        />
       
        <span className="system-login-selection-text2">
         <span>< Link to='/admin-login' >System Admin Login</Link></span>
        </span>
     
        <span className="system-login-selection-text4">
          <span><Link to='/employee-login'>Employee Login</Link></span>
        </span>
      </div>
    </div>
  )
}

export default SystemLoginSelection
