import React from 'react';
import './Dots.css';

const Dots = ({ count, activeIndex, onClick }) => {
  return (
    <div className="dots-container fade-in">
      {Array.from({ length: count }).map((_, index) => (
        <span 
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;