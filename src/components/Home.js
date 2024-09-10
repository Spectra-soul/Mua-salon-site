import React from 'react';
import { HomeContainer, Banner, Button } from '../styles/HomeStyles';

const Home = () => {
  return (
    <HomeContainer>
      <Banner>
        <h1>Welcome to Priyanka's Beauty Box</h1>
        <p>Your one-stop beauty destination</p>
        <Button href="/booking">Book Now</Button>
      </Banner>
    </HomeContainer>
  );
};

export default Home;
