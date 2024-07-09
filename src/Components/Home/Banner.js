import React from 'react';
import './Banner.css';
import slide1 from './slide1.png';
import slide2 from './slide2.png'; 
import slide3 from './slide3.png'; 

const Banner = () => {
  return (
    <div className="banner">
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

      <div className="banner-content">
        <h1>Develop your Enterprise With Internet Of Things</h1>
        <p>We have developed top-notch IOT devices and assisted numerous organizations in achieving economic success.</p>
        <button className="contact-btn">Contact Us</button>
      </div>

      <div className="slider">
        <div className="slides">
          <img src={slide1} alt="Slide 1" />
          <img src={slide2} alt="Slide 2" />
          <img src={slide3} alt="Slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
