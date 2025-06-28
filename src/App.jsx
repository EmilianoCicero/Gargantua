import React from 'react';
import Button from './components/Button';
import './styles/tokens.css';

import Container from './layouts/Container';

const App = () => {
  return (
    <Container>
      <h1>Welcome to Gargantua</h1>
      <p>Imagine you could take that component back in time to a team member. Well that's almost impossible, but we're here so next time you won't need time traveling.</p>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
      <Button variant="transparent">Click me</Button>
      <Button variant="primary" disabled>Click me</Button>
      <Button variant="secondary" disabled>Click me</Button>
      <Button variant="tertiary" disabled>Click me</Button>
      <Button variant="transparent" disabled>Click me</Button>
    </Container>
  );
};

export default App;