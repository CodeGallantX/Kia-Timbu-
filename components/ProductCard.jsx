"use client";
import React from 'react';
import '../styles/globals.css';

// Define the icon for the Add to Cart button
const CartPlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" stroke="#111111" stroke-width="1.5"/>
        <path d="M2.24902 2.29202C2.06125 2.22598 1.85493 2.23724 1.67546 2.32332C1.49599 2.4094 1.35806 2.56325 1.29202 2.75102C1.22598 2.9388 1.23724 3.14511 1.32332 3.32458C1.4094 3.50406 1.56325 3.64198 1.75102 3.70802L2.24902 2.29202ZM20.658 9.88302L21.392 10.034L21.393 10.03L20.658 9.88302ZM5.70802 9.76002V7.03802H4.20802V9.76002H5.70802ZM2.51002 2.38402L2.24902 2.29202L1.75102 3.70802L2.01202 3.79902L2.51002 2.38402ZM10.938 16.25H16.24V14.75H10.938V16.25ZM5.70802 7.03802C5.70802 6.33102 5.70902 5.74102 5.65802 5.26202C5.60302 4.76502 5.48802 4.31202 5.20602 3.90002L3.96702 4.74602C4.05702 4.87802 4.12702 5.06002 4.16602 5.42302C4.20702 5.80302 4.20802 6.29802 4.20802 7.03802H5.70802ZM2.01202 3.79902C2.68002 4.03402 3.11902 4.19002 3.44202 4.35002C3.74502 4.49802 3.87902 4.61802 3.96702 4.74702L5.20602 3.90002C4.92202 3.48402 4.54302 3.21802 4.10202 3.00102C3.68202 2.79502 3.14402 2.60702 2.51002 2.38402L2.01202 3.79902ZM4.20802 9.76002C4.20802 11.213 4.22202 12.26 4.35802 13.06C4.50502 13.914 4.79802 14.526 5.34302 15.102L6.43202 14.07C6.11202 13.732 5.93902 13.402 5.83702 12.807C5.72702 12.157 5.70802 11.249 5.70802 9.76002H4.20802ZM10.938 14.75C9.52102 14.75 8.53802 14.748 7.79702 14.643C7.08202 14.542 6.70502 14.358 6.43202 14.07L5.34302 15.102C5.93702 15.729 6.69002 16.002 7.58602 16.128C8.45602 16.252 9.56702 16.25 10.938 16.25V14.75ZM4.95802 6.87002H17.088V5.37002H4.95902L4.95802 6.87002ZM19.923 9.73102L19.423 12.156L20.893 12.458L21.392 10.034L19.923 9.73102ZM17.09 6.87002C17.946 6.87002 18.7 6.87102 19.295 6.93702C19.59 6.97102 19.812 7.01702 19.967 7.07102C20.128 7.12802 20.154 7.17102 20.141 7.15402L21.33 6.24002C21.095 5.93402 20.765 5.76102 20.464 5.65602C20.1385 5.54901 19.8021 5.47858 19.461 5.44602C18.766 5.36902 17.918 5.37002 17.09 5.37002V6.87002ZM21.393 10.03C21.563 9.18202 21.707 8.47002 21.742 7.90002C21.779 7.31402 21.712 6.73602 21.33 6.24002L20.141 7.15402C20.203 7.23502 20.271 7.38002 20.245 7.80802C20.218 8.25202 20.101 8.84502 19.923 9.73602L21.393 10.03ZM16.24 16.25C17.002 16.25 17.642 16.251 18.158 16.188C18.693 16.123 19.182 15.979 19.608 15.632L18.66 14.469C18.535 14.571 18.358 14.653 17.975 14.699C17.572 14.749 17.04 14.75 16.24 14.75V16.25ZM19.425 12.156C19.263 12.939 19.155 13.459 19.025 13.844C18.902 14.21 18.785 14.367 18.66 14.469L19.608 15.632C20.035 15.284 20.274 14.835 20.446 14.323C20.612 13.831 20.74 13.205 20.894 12.459L19.425 12.156Z" fill="#111111"/>
        <path d="M13 13V11M13 11V9M13 11H15M13 11H11" stroke="#111111" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
);


// Define the color icons
const greyColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#E0DFFE"/>
    </svg>
)

const purpleColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#5754BA"/>
    </svg>
)

const orangeColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#DEAE55"/>
    </svg>
)

const blueColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#007ECE"/>
    </svg>
)

const blackColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#1F130A"/>
    </svg>
)

const redColor = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="14" rx="7" fill="#471A1A"/>
    </svg>

)


// Define the ProductCard Component
const ProductCard = () => {
  return (
    <section style={styles.cardGrid}>
        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/stainless-steel-pots-pans-isolated-white.jpg?updatedAt=1720283849632" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Classic Non-stick Set
            </div>
            <div style={styles.price}>
                ₦190, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/bluepan.jpg?updatedAt=1720304132952" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Stain-Free Frying Pan
            </div>
            <div style={styles.price}>
                ₦190, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/transparent_jug.jpg?updatedAt=1720304094125" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Transparent Kettle
            </div>
            <div style={styles.price}>
                ₦100, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/redpots.jpg?updatedAt=1720304148887" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Superior Non-Stick Set
            </div>
            <div style={styles.price}>
                ₦290, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/copper_pan.jpg?updatedAt=1720304110112" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Non-Rust Frying Pan
            </div>
            <div style={styles.price}>
                ₦80, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.cardContainer}>
        {/* Section Image */}
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/whitepot.jpg?updatedAt=1720304126521" alt="Set Image" style={styles.image} />

        {/* Info Section */}
        <div style={styles.infoSection}>
            {/* Title and Price */}
            <div style={styles.titlePrice}>
            <div style={styles.title}>
                Double Coat Non-Stick
            </div>
            <div style={styles.price}>
                ₦100, 000
            </div>
            </div>

            {/* Description */}
            <div style={styles.description}>
            This 5-quart pot is crafted from high-quality, durable materials that ensure even heat distribut...
            </div>

            {/* Available Colors */}
            <div style={styles.availableColors}>
            <div style={styles.availableColorsTitle}>
                Available colors
            </div>
            <div style={styles.colorOptions}>
                <div style={styles.colorOption}>
                <greyColor/>
                </div>
                <div style={styles.colorOptionx}>
                <purpleColor/>
                </div>
                <div style={styles.colorOptionx}>
                <orangeColor/>
                </div>
                </div>
                </div>

                {/* Button and Sizes */}
                <div style={styles.buttonSizes}>
                    {/* Sizes in set */}
                    <div style={styles.sizesInSet}>
                            <div style={styles.sizesTitle}>
                                Sizes in set
                            </div>
                        <div style={styles.sizes}>
                            <div style={styles.size}>
                                12
                            </div>
                            <div style={styles.size}>
                                20
                            </div>
                            <div style={styles.size}>
                                24
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div style={styles.addToCart}>
                        <CartPlusIcon />
                        <div style={styles.addToCartText}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   );
};

// Styles
const styles = {
    cardGrid: {
        display: 'grid',
    },
  cardContainer: {
    maxWidth: '360px',
    border: '1px solid #e0dffeff',
    borderRadius: '4px',
    padding: '16px 24px',
    background: '#fffffeff',
  },
  image: {
    width: '100%',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  titlePrice: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lora',
    fontWeight: '700',
    fontSize: '18px',
    letterSpacing: '0.18px',
    color: '#111111',
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '30px',
    color: '#111111',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#3c3c3cff',
    textAlign: 'left',
  },
  
  availableColors: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  availableColorsTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111',
  },
  colorOptions: {
    display: 'flex',
    gap: '8px',
  },
  colorOption: {
    width: '18px',
    height: '18px',
    background: '#fffffeff',
    borderRadius: '50%',
    padding: '3px',
    border: '0.75px solid #0a0a0a',
  },
  colorOptionx: {
    width: '18px',
    height: '18px',
    background: '#fffffeff',
    borderRadius: '50%',
    padding: '3px',
    border: '0.75px solid #fffffeff',
  },
  colorImage: {
    width: '14px',
    height: '14px',
  },
  buttonSizes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCart: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '4px',
    border: '0.5px solid #0a0a0a',
    cursor: 'pointer',
  },
  addToCartText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#111111',
    marginLeft: '8px',
  },
  sizesInSet: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
  },
  sizesTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#111111',
  },
  sizes: {
    display: 'flex',
    gap: '16px',
  },
  size: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#555555',
  },
};

export default ProductCard;