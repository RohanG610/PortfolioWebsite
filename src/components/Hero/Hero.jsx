import React from "react";
import "./style/Hero.css"; // Go up one level to find App.css

const Hero = () => {
    return (
        <div className="hero-section">
          <div className="hero-left">
            <h1 className="hero-heading">OzyCreates</h1>
            <p className="hero-description">
              Hello, myself Rohan aka Ozy. I am passionate programmer. I am all for all things tech, finance, and movies.
            </p>
            
            <h2 className="hero-tinkered">Here are some of things I have tinkered with</h2>
          </div>
          <div className="hero-right"></div>
        </div>
    );
  };
  
  export default Hero;