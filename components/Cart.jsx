"use client";
import React from 'react';
import CartItem from './cartComponent/CartItem';
import OrderSummary from './cartComponent/OrderSummary';

import Link from 'next/link';

// Define the CartIcon Component
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3L2.265 3.088C3.585 3.528 4.245 3.748 4.622 4.272C5 4.796 5 5.492 5 6.883V9.5C5 12.328 5 13.743 5.879 14.621C6.757 15.5 8.172 15.5 11 15.5H19" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5 6H16.45C18.505 6 19.533 6 19.978 6.674C20.422 7.349 20.018 8.293 19.208 10.182L18.779 11.182C18.401 12.064 18.212 12.504 17.837 12.752C17.461 13 16.981 13 16.022 13H5M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" stroke="#FFFFFE" stroke-width="1.5"/>
  </svg>
);

const RightArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

// Define the Cart Component
const Cart = () => {
  return (
    <div style={{ maxWidth: '1248px', margin: '0 auto', padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      {/* Title Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ fontFamily: 'Lora', fontWeight: '700', fontSize: '32px', color: '#111111' }}>Cart Items</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#111111' }}>
          <CartIcon />
          <span style={{ display: 'flex', fontFamily: 'Montserrat', fontWeight: '500', fontSize: '18px', lineHeight: '30px',}}>
            <Link href="/" style = {{textDecoration: 'none', fontFamily: 'Montserrat', color: '#111111'}}>Back to shopping</Link>
            <RightArrow/>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', gap: '56px' }}>
        {/* Cart Items */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Cart Item 1 */}
          <CartItem
            imgSrc="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/stainless-steel-pots-pans-isolated-white.jpg?updatedAt=1720283849632"
            title="Classic Non-Stick Set"
            price="N100, 000"
            colors={['#111', '#FFF', '#0a0a0a']}
          />
          {/* Cart Item 2 */}
          <CartItem
            imgSrc="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/bluepan.jpg?updatedAt=1720304132952"
            title="Non-Rust Frying Pan"
            price="N80, 000"
            colors={['#111', '#FFF', '#0a0a0a']}
          />
        </div>

        {/* Order Summary */}
        <OrderSummary subtotal="N180, 000" shipping="N10, 000" total="N190, 000" />
      </div>
    </div>
  );
};

export default Cart;