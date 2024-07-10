// pages/index.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedList from '../components/FeaturedList';
import Footer from '@/components/Footer';
// import Link from 'next/link';// 

const HomePage = () => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>CHEF - Timbu Store</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/logo.png'/>
        <link rel='stylesheet' type='text/css' media='screen' href='../styles/globals.css' />
      </Head>
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