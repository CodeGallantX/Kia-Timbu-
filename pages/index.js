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
      <link rel='icon' src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/logo.png"/>
      <Navbar />
      <HeroSection />
      <FeaturedList />
      <Footer />
    </div>
  );
};

export default HomePage;