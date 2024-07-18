import React from 'react';
import './Footer.css';
import { FaGooglePlusG, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="logo.png" alt="AV IOT Solutions Logo" className="footer-logo" />
          <p className="footer-description">
            We are pioneers in utilizing the potential of IoT technology to transform how organizations and people engage with the real world.
          </p>
          <div className="footer-icons">
            <FaGooglePlusG />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
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
};

export default Footer;
