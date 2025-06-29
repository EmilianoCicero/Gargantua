import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Container from './layouts/Container';
import Card from './components/Card';
import useFeather from './hooks/useFeatherIcons';
import './styles/tokens.css';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set the data-theme attribute on the HTML element directly
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useFeather();

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar />
      <Button variant="transparent" onClick={toggleTheme}>Change Theme</Button>
      <Container>
      <h1>Welcome to Gargantua</h1>
      <p>Bend time and space with Gargantua. Build faster. Launch sooner. Reach Further.</p>
      <Card 
  image="https://images.unsplash.com/photo-1750688651440-6e485ae16bc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
      <Card title="Explore the Universe" paragraph="Discover the vastness of space with our cutting-edge tools and resources."
   image="https://images.unsplash.com/photo-1743756618181-99a77edf8eab?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>
<Button variant="transparent"><i data-feather="feather"></i></Button>
<Button variant="transparent"><i data-feather="smile"></i></Button>
<Button variant="transparent"><i data-feather="camera"></i></Button>
<Button variant="transparent"><i data-feather="more-vertical"></i></Button>
      </Card>
      <Card
  title="Join the Community" paragraph="Connect with like-minded individuals and share your journey.">
<Button variant="transparent"><i data-feather="feather"></i></Button>
<Button variant="transparent"><i data-feather="smile"></i></Button>
<Button variant="transparent"><i data-feather="camera"></i></Button>
<Button variant="transparent"><i data-feather="more-vertical"></i></Button>
      </Card>
      <Card>
<Button variant="transparent"><i data-feather="feather"></i></Button>
<Button variant="transparent"><i data-feather="smile"></i></Button>
<Button variant="transparent"><i data-feather="camera"></i></Button>
<Button variant="transparent"><i data-feather="more-vertical"></i></Button>
      </Card>
      <Button variant="primary">Primary Garg</Button>
      <Button variant="primary"><i data-feather="feather"></i>Primary Garg<i data-feather="smile"></i></Button>
      <Button variant="primary"><i data-feather="feather"></i></Button>
      <i data-feather="feather"></i>
      <i data-feather="camera"></i>
      <i data-feather="smile"></i>
      <i data-feather="home"></i>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary"><i data-feather="home"></i>Tertiary</Button>
      <Button variant="transparent"><i data-feather="home"></i>Transparent</Button>
      </Container>
    </>
  );
}

export default App;