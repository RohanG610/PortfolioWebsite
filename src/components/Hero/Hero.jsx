import React from "react";
import "./style/Hero.css"; // Go up one level to find App.css

const Hero = () => {
    return (
        <div className="hero-section">
          <div className="hero-left">
            <h1 className="hero-heading">OzyCreates</h1>
            <p className="hero-description">
              Hello, myself Ozy. I love to code and learn new stuff! I am active on <a href="https://x.com/OzyBehindScreen" style={{fontWeight:1000}}>X</a>, where I post about my learnings daily.
            </p>
            
            <h2 className="hero-tinkered">Here are some of things I have tinkered with</h2>
          </div>
          <div className="hero-right"></div>
        </div>
    );
  };
  
  export default Hero;