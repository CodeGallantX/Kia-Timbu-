"use client";
import React from "react";
import SummaryItem from './SummaryItem'

// Define OrderSummary Component
const OrderSummary = ({ subtotal, shipping, total }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ fontFamily: 'Georgia', fontWeight: '700', fontSize: '24px', color: '#111111' }}>Order Summary</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SummaryItem label="Subtotal" value={subtotal} />
        <SummaryItem label="Shipping" value={shipping} />
        <SummaryItem label="Total" value={total} />
      </div>
      {/* Promo Code Input */}
      <div style={{
          display: 'flex',
          padding: '10px',
          alignItems: 'center',
          border: '0.5px solid #555555ff',
          borderRadius: '4px',
          position: 'relative'
        }}>
        <input type="text" placeholder="Promo code" style={{
          flex: 1,
          paddingLeft: '24px',
          fontFamily: 'Montserrat',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          color: '#555555ff',
          border: 'none',
          outline: 'none'
        }} />
        <button style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 52px',
          background: '#db6a18ff',
          color: '#fffffeff',
          fontFamily: 'Montserrat',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '22px',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          right: '0'
        }}>Apply</button>
      </div>
      {/* Cart Button */}
      <a href="/checkout" style={{textDecoration: 'none', color: '#fffffeff'}}>
      <button style={{
        width: '100%',
        padding: '17px 0',
        backgroundColor: '#0a0a0aff',
        color: '#fffffeff',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '30px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
      }}>
        Cart
      </button>
      </a>
    </div>
  );
  

export default OrderSummary;