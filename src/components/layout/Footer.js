import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="fade-in">
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#help">Help Center</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Your Stunning Website. All rights reserved. ✨ Made with love and cutting-edge technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;