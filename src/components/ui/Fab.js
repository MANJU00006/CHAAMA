import React from 'react';
import './Fab.css';

const Fab = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fab" onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default Fab;