import React from 'react';
import useFeather from '../hooks/useFeatherIcons';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Button from '../components/Button';

const Documentation = () => {
    useFeather();
  return (
    <>
    <Navbar />
    <Container>
      <h1>Documentation</h1>
      <h2>Components</h2>
    </Container>
    </>
  );
  
};

export default Documentation;