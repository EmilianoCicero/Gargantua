import React from 'react';
import useFeather from '../hooks/useFeatherIcons';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Button from '../components/Button';
import { useTheme } from '../main';

const Documentation = () => {
    useFeather();
    const { toggleTheme } = useTheme();
  return (
    <>
    <Navbar toggleTheme={toggleTheme} />
    <Container>
      <h1>Documentation</h1>
      <h2>Components</h2>
    </Container>
    </>
  );
  
};

export default Documentation;