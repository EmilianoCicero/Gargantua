import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Container from './layouts/Container';
import './styles/tokens.css';
import Card from './components/Card';

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
      <Button variant="tertiary" onClick={toggleTheme}>Change Theme</Button>
      <Container>
      <Card title="Card Title">
        <p>This is a reusable Card component. Great for grouping content!</p>
      </Card>
      </Container>
    </>
  );
}

export default App;