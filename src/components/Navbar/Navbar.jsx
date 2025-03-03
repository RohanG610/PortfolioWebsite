import React from "react";
import "./style/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links top-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
