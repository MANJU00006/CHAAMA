import React, { useEffect } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 10 + 5 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 15 + 10 + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particlesContainer.appendChild(particle);
    }
    
    return () => {
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);

  return <div className="particles-container" id="particles"></div>;
};

export default ParticlesBackground;