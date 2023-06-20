import React from "react";
import Navbar from "../navigationbar/navbar";
import { useState,useEffect } from "react";
import styles from "./home.css"

// import { Parallax } from "../parallax-2/Parallax";


 const Home = () => {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="logo">
          <img src="https://i.ibb.co/jZy04FJ/wave-haikei-3.png" alt="Icon Image" />
        </div>
          <h1 className="heading">
            Your <span className="home">Home</span> Word{" "}
            <span className="container">Container</span>
          </h1>
          <p className="subheading">
            Some words describing your product or service
          </p>
          <div className="buttons">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Home;
