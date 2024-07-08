// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedList from '../components/FeaturedList';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedList />
    </div>
  );
};

export default HomePage;


/*I want to start a new next.js web app with react how do i do it?
Its a store app with productlisting page and cart page.
I won't be using typescript and tailwind.

Give me code for the components and all the directory files*/