import React from 'react';
import Button from '../components/Button';
import Container from '../layouts/Container';
import useFeather from '../hooks/useFeatherIcons';
import Navbar from '../components/Navbar/Navbar';

const ButtonPage = () => {
    useFeather();
  return (
    <>
    <Navbar />
    <Container>
      <h1>Button</h1>
      <h2>Variants:</h2>
      <h3>Default</h3>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="transparent">Transparent</Button>
      <h3>Full width</h3>
      <Button fullWidth variant="primary">Primary</Button>
      <Button fullWidth variant="secondary">Secondary</Button>
      <Button fullWidth variant="tertiary">Tertiary</Button>
      <Button fullWidth variant="transparent">Transparent</Button>
      <h3>Disabled states</h3>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="transparent" disabled>Transparent</Button>
    </Container>
    </>
  );
};

export default ButtonPage;