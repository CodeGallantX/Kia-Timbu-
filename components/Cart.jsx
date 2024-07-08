"use client";
import React from 'react';
import CartItem from './cartComponent/CartItem';
import OrderSummary from './cartComponent/OrderSummary';
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

// Define the Cart Component
const Cart = () => {
  return (
    <div style={{ maxWidth: '1248px', margin: '0 auto', padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      {/* Title Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ fontFamily: 'Georgia', fontWeight: '700', fontSize: '32px', color: '#111111' }}>Cart Items</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#111111' }}>
          <CartIcon />
          <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '18px', lineHeight: '30px' }}>Back to shopping</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', gap: '56px' }}>
        {/* Cart Items */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Cart Item 1 */}
          <CartItem
            imgSrc="./assets/img.svg"
            title="Classic Non-Stick Set"
            price="N100, 000"
            colors={['#111', '#FFF', '#0a0a0a']}
          />
          {/* Cart Item 2 */}
          <CartItem
            imgSrc="./assets/img-2.svg"
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



// https://www.figma.com/design/vST4s0InBnSD84euZNp28e/Stage-2-task?node-id=168-3107&t=xuq6K4QS8dmk2nTQ-4