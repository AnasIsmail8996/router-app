import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">Movies_App</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/movie">Movies</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} Movies_App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
