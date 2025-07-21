import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticlesBackground from './components/particles/ParticlesBackground';
import Slideshow from './components/slideshow/Slideshow';
import Fab from './components/ui/Fab';
import LoadingScreen from './components/layout/LoadingScreen';
import slides from './components/data/slidesData'; // Should be exactly this
import './styles/global.css';
import './styles/animations.css';
import './styles/variables.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && <LoadingScreen isLoading={isLoading} />}
      
      <ParticlesBackground />
      <Header />
      
      <main>
        <div className="container">
          <div className="content-wrapper">
            <h1 className="fade-in">🌟 Experience Our Stunning Gallery</h1>
            <p className="fade-in">Immerse yourself in a world of visual excellence with cutting-edge effects and animations</p>
            
            <Slideshow slides={slides} />
          </div>
        </div>
      </main>
      
      <Fab />
      <Footer />
    </div>
  );
}

export default App;