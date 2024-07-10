// pages/index.js
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/NavbarHome';
import HeroSection from '@/components/HeroSection';
import FeaturedList from '@/components/FeaturedList';
import Footer from '@/components/Footer';
// import Link from 'next/link';// 

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



/*I want to start a new next.js web app with react how do i do it?
Its a store app with productlisting page and cart page.
I won't be using typescript and tailwind.

Give me code for the components and all the directory files*/