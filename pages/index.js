// pages/index.js

import React from 'react';
import Navbar from '@/components/NavbarHome';
import HeroSection from '@/components/HeroSection';
import FeaturedList from '@/components/FeaturedList';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <title>CHEF - Timbu Store</title>
      <Navbar />
      <HeroSection />
      <FeaturedList />
      <Footer />
    </div>
  );
};

export default HomePage;