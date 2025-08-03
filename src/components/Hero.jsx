// src/components/Hero.jsx
import React from 'react';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-subtitle">The NRKS presents</h2>
        <h1 className="hero-title">
          <span className="gradient-text">Hack Sphere</span>
        </h1>
        <p className="hero-date">10 Aug 2025</p>
        <p className="hero-time">9:00 AM - 5:00 PM</p>
      </div>
    </section>
  );
};

export default Hero;
