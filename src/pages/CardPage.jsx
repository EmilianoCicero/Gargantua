import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Container from '../layouts/Container';
import useFeather from '../hooks/useFeatherIcons';

const CardPage = () => {
    useFeather();
  return (
    <Container>
      <h1>Card</h1>
      <h2>Variants:</h2>
      <h3>Default</h3>
      <Card title="Default Card" paragraph="This is a default card with a title and paragraph." />
      <h3>Image</h3>
      <Card
        image="https://images.unsplash.com/photo-1750688651440-6e485ae16bc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      <h3>Image Description</h3>
      <Card title="Explore the Universe" paragraph="Discover the vastness of space with our cutting-edge tools and resources."
        image="https://images.unsplash.com/photo-1743756618181-99a77edf8eab?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
      </Card>
      <h3>Image File</h3>
      <Card title="Explore the Universe" paragraph="Discover the vastness of space with our cutting-edge tools and resources."
        image="https://images.unsplash.com/photo-1743756618181-99a77edf8eab?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
        <Button variant="transparent"><i data-feather="feather"></i></Button>
        <Button variant="transparent"><i data-feather="smile"></i></Button>
        <Button variant="transparent"><i data-feather="camera"></i></Button>
        <Button variant="transparent"><i data-feather="more-vertical"></i></Button>
      </Card>
      <h3>Content</h3>
      <Card
        title="Join the Community" paragraph="Connect with like-minded individuals and share your journey.">
        <Button variant="transparent"><i data-feather="feather"></i></Button>
        <Button variant="transparent"><i data-feather="smile"></i></Button>
        <Button variant="transparent"><i data-feather="camera"></i></Button>
        <Button variant="transparent"><i data-feather="more-vertical"></i></Button>
      </Card>
    </Container>
  );
  
};

export default CardPage;