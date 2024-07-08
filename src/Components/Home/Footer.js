import IOTlogo1 from './Home_imgs/IOTlogo1.png';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";


import React, { useState } from 'react';

import "./Footer.css";


export const Footer = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div class="c">
  <div class="row">
    <div class="col-sm">
    <img className="logo2" src={IOTlogo1} alt=""/>
    <p className="footer-p">We are pioneers in utilizing the potential of IoT technology to transform how organizations and people engage with the real world.</p>
    <div className="footer-icon">
        <a href="info@iotsolutions.lk" target="_blank" rel="noopener noreferrer"><FaEnvelope className="icon1" /></a>
        <a href="https://www.linkedin.com/company/av-iot/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icon2" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><GrInstagram className="icon3" /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className="icon4" /></a>
      </div>
    </div>

    <div class="col-sm">
      <p className="mblue">Quick links</p>
      <div class = "footerNav" >
      <p><a href="/"
          className={activeLink === '/' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('/')} > Home </a></p>
      <p><a href="Service"
          className={activeLink === 'Service' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Service')} > Services </a></p>
      <p><a href="Abouthome"
          className={activeLink === 'Abouthome' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Abouthome')} > About Us </a></p>
      <p><a href="Blog"
          className={activeLink === 'Blog' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Blog')} > Blog </a></p>
      <p><a href="Contact"
          className={activeLink === 'Contact' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Contact')} > Contact </a></p>
      </div>
    </div>
    
    <div class="col-sm">
    <p className="blue">Address</p>
      <a href="https://www.google.com/maps/dir//298A+Borella+Road,+Habarakada/@6.864384,79.9273699,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae250d422ae0c6d:0x2867f2400c54e42b!2m2!1d80.0097718!2d6.864391?entry=ttu" className="white1">298A, Borella Road, Habarakada, Homagama</a>
    <p className="green">Phone</p>
      <a href="tel:+94777371118" className="white1">+94777371118</a>
    <p className="blue">Email</p>
      <a href="mailto:info@iotsolutions.lk" className="white1">info@iotsolutions.lk</a>
    </div>
  </div>
</div>
  )
}

export default Footer; 


