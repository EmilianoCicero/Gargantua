import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Container from './layouts/Container';
import './styles/tokens.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set the data-theme attribute on the HTML element directly
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Button variant="secondary" onClick={toggleTheme}>Change Theme</Button>
      <Container>
        <h1>Welcome to Gargantua</h1>
        <p>
        Bend time and space with Gargantua. Build faster. Launch sooner. Reach further.
        </p>
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="tertiary">Click me</Button>
        <Button variant="transparent">Click me</Button>
        <Button variant="primary" disabled>Click me</Button>
        <Button variant="secondary" disabled>Click me</Button>
        <Button variant="tertiary" disabled>Click me</Button>
        <Button variant="transparent" disabled>Click me</Button>
      </Container>
    </>
  );
}

export default App;