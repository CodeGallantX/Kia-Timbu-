// pages/_app.jsx
import React from 'react';
// import ResponsiveNavbar from '../components/ResponsiveNavbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
//      <ResponsiveNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
