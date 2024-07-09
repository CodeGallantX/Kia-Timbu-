"use client";
import React from 'react';

const SortIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15L8 11H16L12 15Z" fill="currentColor"/>
  </svg>
);

// Page Component
const FeaturedListHeader = () => {
  return (
    <div style={pageStyles.container}>
      {/* Items Found Section */}
      <div style={pageStyles.itemsFound}>
        6 items found
      </div>
      
      {/* Sort By Section */}
      <div style={pageStyles.sortBy}>
        <div style={pageStyles.sortByContent}>
          <SortIcon />
          <div style={pageStyles.sortByText}>
            Sort by: Popularity
          </div>
        </div>
      </div>
    </div>
  );
};

const pageStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px', // Adjusted padding to avoid overflow
    padding: 'auto 500px'
  },
  itemsFound: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '30px',
  },
  sortBy: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px', // Adjusted padding for better spacing
    borderRadius: '4px',
    border: '0.5px solid #0a0a0a',
    cursor: 'pointer',
  },
  sortByContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  sortByText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#FF6C00', // Orange color for text
    marginTop: '1px',
  },
};

export default FeaturedListHeader;