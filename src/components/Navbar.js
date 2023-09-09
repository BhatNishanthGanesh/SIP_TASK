import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success p-2">
      <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
        GoFood
      </Link>
      <button
        className={`navbar-toggler ${isMobileMenuOpen ? '' : 'collapsed'}`}
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup" onClick={closeMobileMenu}>
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/model" onClick={closeMobileMenu}>
              Modal
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
