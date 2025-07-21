import React from 'react';
import Slideshow from '../slideshow/Slideshow';
import Dots from '../slideshow/Dots';
import slides from '../../data/slidesData';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="content-wrapper">
      <h1 className="fade-in">🌟 Experience Our Stunning Gallery</h1>
      <p className="fade-in">Immerse yourself in a world of visual excellence with cutting-edge effects and animations</p>
      
      <Slideshow slides={slides} />
      
      <Dots count={slides.length} />
    </div>
  );
};

export default HeroSection;