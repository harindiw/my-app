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
              className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('/')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Services"
              className={activeLink === '/Services' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Services')}
            >
             Services
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              className={activeLink === 'aboutUs' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('aboutUs')}
            >
              About Us
            </Nav.Link>
            
            <Nav.Link
              href="/Portfolio"
              className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/Contact"
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