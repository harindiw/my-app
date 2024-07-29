import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './logo.png';
import "./Navigation.css";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('services')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};