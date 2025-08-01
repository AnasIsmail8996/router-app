import React, { useState } from 'react';
import './Header.css';
import './Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const getNavLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? 'blue' : 'white',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
  };
};
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <p className="logo">/A/N/A/S</p>
        <div className="auth-buttons">
          <NavLink to="#">Sign Up</NavLink>
          <NavLink to="#">Login</NavLink>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar-custom">
        <NavLink className="navbar-brand" to="/">Movies</NavLink>
        <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <NavLink style={getNavLinkStyle} to="/" >Home</NavLink>
          <NavLink style={getNavLinkStyle} to="/about">About</NavLink>
          <NavLink style={getNavLinkStyle} to="/movie">Movies</NavLink>
          <NavLink style={getNavLinkStyle} to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

