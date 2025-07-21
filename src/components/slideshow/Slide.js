import React, { useEffect, useRef } from 'react';
import './Slide.css';

const Slide = ({ slide, isActive }) => {
  const slideRef = useRef(null);

  useEffect(() => {
    if (isActive && slideRef.current) {
      // Force reflow to trigger animation
      void slideRef.current.offsetWidth;
    }
  }, [isActive]);

  return (
    <div 
      ref={slideRef}
      className={`slide ${isActive ? 'active' : ''}`}
    >
      {slide.image && (
        <img 
          src={slide.image} 
          alt={slide.alt || slide.title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.innerHTML = `
              <div class="image-error">
                <p>Failed to load image</p>
                <p>${slide.title}</p>
              </div>
            `;
          }}
        />
      )}
      <div className="slide-details">
        <div className="slide-title">{slide.title}</div>
        <div className="slide-description">{slide.description}</div>
      </div>
    </div>
  );
};

export default Slide;