import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { Navbar, Nav } from 'react-bootstrap';

const Navx = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <Navbar bg="dark" expand="md" className="navbar-dark" style={{ padding: '20px' }}>
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNav} />
      <Navbar.Collapse id="basic-navbar-nav" className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} justify-content-end`}>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/about" className="nav-link">
            À propos
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <SearchBar />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navx;