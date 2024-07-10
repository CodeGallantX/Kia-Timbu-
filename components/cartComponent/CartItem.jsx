"use client";
import React from "react";
import ActionItem from "./ActionItem";


// Define the CartIcon Component
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3L2.265 3.088C3.585 3.528 4.245 3.748 4.622 4.272C5 4.796 5 5.492 5 6.883V9.5C5 12.328 5 13.743 5.879 14.621C6.757 15.5 8.172 15.5 11 15.5H19" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5 6H16.45C18.505 6 19.533 6 19.978 6.674C20.422 7.349 20.018 8.293 19.208 10.182L18.779 11.182C18.401 12.064 18.212 12.504 17.837 12.752C17.461 13 16.981 13 16.022 13H5M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" stroke="#FFFFFE" stroke-width="1.5"/>
  </svg>
);

// Define the DeleteIcon Component (placeholder)
const DeleteIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17 3.00001C7.3766 2.41448 7.75974 1.90744 8.2666 1.5488C8.77346 1.19015 9.37909 0.997559 10 0.997559C10.6209 0.997559 11.2265 1.19015 11.7334 1.5488C12.2403 1.90744 12.6234 2.41448 12.83 3.00001M18.5 5.00001H1.5M16.833 7.50001L16.373 14.4C16.196 17.054 16.108 18.381 15.243 19.19C14.378 20 13.047 20 10.387 20H9.613C6.953 20 5.622 20 4.757 19.19C3.892 18.381 3.803 17.054 3.627 14.4L3.167 7.50001M7.5 10L8 15M12.5 10L12 15" stroke="#111111" stroke-width="1.5" stroke-linecap="round"/>
</svg>

);

// Define the WishlistIcon Component (placeholder)
const WishlistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99984 4.58332L9.54984 5.01666C9.60814 5.07714 9.67804 5.12526 9.75535 5.15812C9.83267 5.19098 9.91582 5.20792 9.99984 5.20792C10.0838 5.20792 10.167 5.19098 10.2443 5.15812C10.3216 5.12526 10.3915 5.07714 10.4498 5.01666L9.99984 4.58332ZM7.85484 15.2683C6.5915 14.2725 5.21067 13.3 4.11484 12.0667C3.0415 10.8567 2.2915 9.44582 2.2915 7.61416H1.0415C1.0415 9.83582 1.9665 11.5308 3.18067 12.8967C4.37234 14.2383 5.89234 15.3133 7.08067 16.25L7.85484 15.2683ZM2.2915 7.61416C2.2915 5.82249 3.304 4.31915 4.6865 3.68666C6.02984 3.07249 7.83484 3.23499 9.54984 5.01666L10.4498 4.15082C8.4165 2.03666 6.05317 1.68749 4.1665 2.54999C2.3215 3.39416 1.0415 5.35416 1.0415 7.61416H2.2915ZM7.08067 16.25C7.50817 16.5867 7.9665 16.945 8.43067 17.2167C8.89484 17.4875 9.42484 17.7083 9.99984 17.7083V16.4583C9.7415 16.4583 9.43817 16.3583 9.0615 16.1375C8.684 15.9175 8.29317 15.6142 7.85484 15.2683L7.08067 16.25ZM12.919 16.25C14.1073 15.3125 15.6273 14.2392 16.819 12.8967C18.0332 11.53 18.9582 9.83582 18.9582 7.61416H17.7082C17.7082 9.44582 16.9582 10.8567 15.8848 12.0667C14.789 13.3 13.4082 14.2725 12.1448 15.2683L12.919 16.25ZM18.9582 7.61416C18.9582 5.35416 17.679 3.39416 15.8332 2.54999C13.9465 1.68749 11.5848 2.03666 9.54984 4.14999L10.4498 5.01666C12.1648 3.23582 13.9698 3.07249 15.3132 3.68666C16.6957 4.31915 17.7082 5.82166 17.7082 7.61416H18.9582ZM12.1448 15.2683C11.7065 15.6142 11.3157 15.9175 10.9382 16.1375C10.5615 16.3575 10.2582 16.4583 9.99984 16.4583V17.7083C10.5748 17.7083 11.1048 17.4875 11.569 17.2167C12.034 16.945 12.4915 16.5867 12.919 16.25L12.1448 15.2683Z" fill="#111111"/>
  </svg> 
);


// Define CartItem Component
const CartItem = ({ imgSrc, title, price, colors }) => (
    <div style={{ display: 'flex', gap: '10px', padding: '24px 18px', border: '0.5px solid #e0dffeff', borderRadius: '4px', backgroundColor: '#ffffff' }}>
      <img src={imgSrc} alt="Product Image" style={{ width: '200px', height: '150px', borderRadius: '4px' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Lora', fontWeight: '700', fontSize: '18px', color: '#111111' }}>{title}</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '18px', color: '#111111' }}>{price}</div>
        </div>
        <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px'}}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '16px', color: '#111111', }}>Available colors</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {colors.map((color, index) => (
              <div key={index} style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'red' }}></div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ActionItem icon={<DeleteIcon />} label="Delete" />
          <ActionItem icon={<WishlistIcon />} label="Move to wishlist" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '14px', color: '#111111' }}> Quantity</span>
            <div style={{ border: '0.5px solid #555555', borderRadius: '2px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CartIcon />
              <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '16px', color: '#555555' }}>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default CartItem;