import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavItem } from '../styles/NavBarStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
  return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light fixed-top">
        <Link to="/">
          <img src="/images/gallery-image.jpeg" alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavItem className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/reviews">Reviews</Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/booking">Booking</Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
          </ul>
        </div>
      
    </NavbarContainer>
  );
};

export default NavBar;
