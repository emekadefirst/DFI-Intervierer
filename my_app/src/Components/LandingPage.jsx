import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <main className="landing-hero">
        <h1 className="logolanding">Bollax</h1>
        <h2 className="hero-title">Future of Crypto Starts Here</h2>
        <p className="hero-subtitle">
          Bollax makes it simple to invest, trade, and grow your digital assets securely.
        </p>
        <button className="hero-button">Join the Revolution</button>
      </main>
    </div>
  );
};

export default LandingPage;
 