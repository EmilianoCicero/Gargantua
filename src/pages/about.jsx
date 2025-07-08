import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import { useTheme } from '../main';

const About = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
    <Navbar toggleTheme={toggleTheme} />
    <Container>
      <h1>About</h1>
      <p>Gargantua is a scalable, opinionated design system built to power digital products with clarity, consistency, and character. It’s more than just components or tokens — it’s a shared language for designers and developers to build fast, accessible, and beautiful experiences across platforms.

Born from real product needs and refined through iteration, Gargantua helps teams stay aligned without killing creativity.</p>
    </Container>
    </>
  );
  
};

export default About;