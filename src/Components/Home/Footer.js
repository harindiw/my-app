import React, { useState } from 'react';
import './Footer.css';
import {FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from './logo.png';

export const Footer = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img src={logo} alt="AV IOT Solutions Logo" className="footer-logo" />
          <p className="footer-description">
          We are pioneers in utilizing the potential of IoT technology <p> to transform how organizations 
          and people engage with the real world.</p>
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/share/UpGDsZWdKfheW3RQ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/av-iot//" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
               <FaYoutube />
            </a>
          </div>
        </div>
        <div class="col-sm">
      <p className="footer-links">Quick links</p>
      <div class = "footerNav" >
      <p><a href="/"
          className={activeLink === '/' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('/')} > Home </a></p>
      <p><a href="Services"
          className={activeLink === 'Offer' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Offer')} > Services </a></p>
      <p><a href="AboutUs"
          className={activeLink === 'Team' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Team')} > About Us </a></p>
      <p><a href="Portfolio"
          className={activeLink === 'Projects' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('Projects')} > Portfolio </a></p>
      <p><a href="Contact"
          className={activeLink === 'SendAMsg' ? 'footer-link active' : 'footer-link'}
          onClick={() => onUpdateActiveLink('SendAMsg')} > Contact </a></p>
      </div>
    </div>

        <div className="footer-right">
          <div className="footer-contact">
            <h4>Address</h4>
            <p>298A, Borella Road, Habarakada, Homagama, Western 10204, LK</p>
            <h4>Phone</h4>
            <p>+94777371118</p>
            <h4>Email</h4>
            <p>info@iotsolutions.lk</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 AV IOT Solutions. All Rights Reserved</p>
        <div className="footer-bottom-links">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );

}
export default Footer;

