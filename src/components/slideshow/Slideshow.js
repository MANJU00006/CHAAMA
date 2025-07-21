import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './Slideshow.css';

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id} 
            slide={slide} 
            isActive={index === currentSlide} 
          />
        ))}
      </div>
      
      <button 
        className="prev" 
        onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
      >
        ❮
      </button>
      
      <button 
        className="next" 
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;