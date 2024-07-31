import React, { useState } from "react";
import logo from './logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'; 

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <nav>
        <img src={logo} className="logo" alt="Logo" />
        <ul id="sidemenu" className={menuOpen ? "open" : ""}>
          <li><a href="#banner" onClick={closeMenu}>Home</a></li>
          <li><a href="#Offers" onClick={closeMenu}>Services</a></li>
          <li><a href="#Team" onClick={closeMenu}>About Us</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <FontAwesomeIcon icon={faTimes} className="menu-icon close" onClick={closeMenu} />
        </ul>
        <FontAwesomeIcon icon={faBars} className="menu-icon open" onClick={openMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
