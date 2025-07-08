import React from 'react';
import './Hero.css';
import Button from '../Button';

const Hero = ({
  title = 'Welcome to Gargantua',
  description = 'Bend time and space with Gargantua. Build faster. Launch sooner. Reach Further.',
  primaryButton = 'Get Started',
  secondaryButton = 'Learn More',
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="hero-buttons">
        <Button variant="primary" onClick={onPrimaryClick}>{primaryButton}</Button>
        <Button variant="secondary" onClick={onSecondaryClick}>{secondaryButton}</Button>
      </div>
    </section>
  );
};

export default Hero;
