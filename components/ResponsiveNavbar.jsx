// components/ResponsiveNavbar.jsx
import React, { useState, useEffect } from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
    </>
  );
};

export default ResponsiveNavbar;
