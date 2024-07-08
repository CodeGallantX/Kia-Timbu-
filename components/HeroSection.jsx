"use client";
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
      <div style={styles.heroContainer}>
      <img
        src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/hero-bg.jpg"
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
        <div style={styles.heroTextContainer}>
          <h1 style={styles.heroTitle}>Built to last, Cook with Confidence</h1>
          <p style={styles.heroSubtitle}>
            Limited edition! Get yours before they’re gone again, shop the collection now!
          </p>
        </div>
      </div>
    );
  };

const styles = {
    heroContainer: {
        position: 'relative',
        width: '100%',
        height: '618px',
      },
      heroTextContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%',
        color: '#fffffe',
      },
      heroTitle: {
        fontFamily: 'Lora, serif',
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '48px',
        letterSpacing: '0.44px',
      },
      heroSubtitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '30px',
        marginTop: '16px',
      },
}
  
export default HeroSection;