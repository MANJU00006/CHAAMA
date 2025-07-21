import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading" id="loading">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;