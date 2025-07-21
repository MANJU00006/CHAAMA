import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">✨ Your Stunning Website</div>
        <nav>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#data">Data</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;