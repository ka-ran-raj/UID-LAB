import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link); // Set the active link
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={activeLink === '/' ? 'clicked' : ''}
        onClick={() => handleClick('/')}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={activeLink === '/about' ? 'clicked' : ''}
        onClick={() => handleClick('/about')}
      >
        About
      </Link>
      <Link
        to="/services"
        className={activeLink === '/services' ? 'clicked' : ''}
        onClick={() => handleClick('/services')}
      >
        Services
      </Link>
      <Link
        to="/contact"
        className={activeLink === '/contact' ? 'clicked' : ''}
        onClick={() => handleClick('/contact')}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
