import React from 'react';
import logo from "./logo.png";
import './Navigation.css'; // Assuming you will have a separate CSS file for Navigation

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">AV IOT SOLUTIONS</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
