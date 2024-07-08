"use client";
import React from "react";
import ActionItem from "./ActionItem";


// Define the CartIcon Component
const CartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15L8 11H16L12 15Z" fill="currentColor" />
    </svg>
  );
  
  // Define the DeleteIcon Component (placeholder)
  const DeleteIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M ... your delete icon path data ..." fill="currentColor" />
    </svg>
  );
  
  // Define the WishlistIcon Component (placeholder)
  const WishlistIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M ... your wishlist icon path data ..." fill="currentColor" />
    </svg>
  );
  



// Define CartItem Component
const CartItem = ({ imgSrc, title, price, colors }) => (
    <div style={{ display: 'flex', gap: '10px', padding: '24px 16px', border: '0.5px solid #e0dffeff', borderRadius: '4px', backgroundColor: '#ffffff' }}>
      <img src={imgSrc} alt="Product Image" style={{ width: '104px', height: '104px', borderRadius: '4px' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Georgia', fontWeight: '700', fontSize: '18px', color: '#111111' }}>{title}</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '18px', color: '#111111' }}>{price}</div>
        </div>
        <div style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '16px', color: '#111111' }}>Available colors</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {colors.map((color, index) => (
            <div key={index} style={{ width: '16px', height: '16px', borderRadius: '50%', background: color }}></div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ActionItem icon={<DeleteIcon />} label="Delete" />
          <ActionItem icon={<WishlistIcon />} label="Move to wishlist" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '14px', color: '#111111' }}>Quantity</span>
            <div style={{ border: '0.5px solid #555555', borderRadius: '2px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CartIcon />
              <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '16px', color: '#555555' }}>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  