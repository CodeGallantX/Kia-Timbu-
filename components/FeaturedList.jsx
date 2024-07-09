"use client";
import React from 'react';
import Image from 'next/image';
import FeaturedListHeader from './FLHeader';
import ProductCard from './ProductCard';

const FeaturedList = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.featuredListContainer}>
        <h2 style={styles.featuredListTitle}>
          Cookware Collection
        </h2>
        <hr style={styles.featuredListLine} />
        <FeaturedListHeader />
        <ProductCard />
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    padding: '25px 105px',  // Fixed padding value
  },
  featuredListContainer: {
    textAlign: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
  },
  featuredListTitle: {
    fontFamily: 'Lora, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '30px',
    color: '#0a0a0a',
  },
  featuredListLine: {
    width: '110px',
    margin: '5px auto',
    height: '3px',
    backgroundColor: '#DB6A18',
    border: 'none',  // Removed border as backgroundColor already covers this
  },
};

export default FeaturedList;