import React from 'react';

const PurchaseInfo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.purchaseTitle}>
        <span style={styles.title}>Your Purchase</span>
        <div style={styles.editContainer}>
        <span style={styles.editText}>Edit</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.998 10.5C21.982 6.768 21.836 4.765 20.535 3.464C19.072 2 16.714 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12C2 16.714 2 19.071 3.464 20.535C4.705 21.776 6.587 21.965 10 21.995M21.5 8H2.5M10.5 2.5L7 8M17 2.5L13.5 8" stroke="#111111" stroke-width="1.5" stroke-linecap="round"/>
<path d="M18.5624 13.935L18.9794 13.518C19.1431 13.3506 19.3383 13.2174 19.5539 13.126C19.7694 13.0346 20.0009 12.9868 20.235 12.9855C20.4692 12.9842 20.7012 13.0293 20.9177 13.1183C21.1343 13.2073 21.331 13.3384 21.4966 13.5039C21.6621 13.6694 21.7932 13.8662 21.8821 14.0827C21.9711 14.2993 22.0163 14.5313 22.015 14.7654C22.0136 14.9995 21.9659 15.231 21.8745 15.4466C21.7831 15.6621 21.6498 15.8574 21.4824 16.021L21.0654 16.438M18.5624 13.935C18.5624 13.935 18.6144 14.822 19.3964 15.604C20.1784 16.386 21.0654 16.438 21.0654 16.438M18.5624 13.935L14.7274 17.77C14.4674 18.03 14.3374 18.16 14.2274 18.303C14.0953 18.4719 13.9819 18.6546 13.8894 18.848C13.8114 19.012 13.7534 19.186 13.6374 19.534L13.2654 20.65L13.1454 21.01L13.9904 21.855M21.0654 16.438L17.2304 20.273C16.9704 20.533 16.8404 20.663 16.6974 20.773C16.5286 20.9052 16.3458 21.0185 16.1524 21.111C15.9884 21.189 15.8144 21.247 15.4664 21.363L14.3504 21.735L13.9904 21.855M13.9904 21.855L13.6284 21.975C13.5444 22.0032 13.4542 22.0073 13.3679 21.9871C13.2816 21.9668 13.2027 21.9229 13.14 21.8603C13.0773 21.7977 13.0332 21.7188 13.0128 21.6326C12.9924 21.5463 12.9964 21.4561 13.0244 21.372L13.1444 21.011" stroke="#111111" stroke-width="1.5"/>
</svg>

        </div>
      </div>
      
      <div style={styles.orderDetails}>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Subtotal</span>
          <span style={styles.detailValue}>N180, 000</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Shipping</span>
          <span style={styles.detailValue}>N10, 000</span>
        </div>
        <div style={styles.detailsDivider} />
        <div style={styles.totalRow}>
          <span style={styles.totalLabel}>Total</span>
          <span style={styles.totalValue}>N190, 000</span>
        </div>
      </div>
      
      <div style={styles.cartItems}>
        <div style={styles.cartItem}>
          <img style={styles.productImage} src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/transparent_jug.jpg?updatedAt=1720304094125" alt="Transparent Kettle" />
          <div style={styles.productInfo}>
            <div style={styles.productRow}>
              <span style={styles.productName}>Transparent Kettle</span>
              <span style={styles.productPrice}>N100, 000</span>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Color selected</span>
              <div style={styles.selectedColor}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" fill="white"/>
<rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#E0DFFE" stroke-width="1.5"/>
<rect x="5" y="5" width="14" height="14" rx="7" fill="#F4F4FA"/>
</svg>

              </div>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Quantity</span>
              <span style={styles.productValue}>1</span>
            </div>
          </div>
        </div>
        <div style={styles.cartItem}>
          <img style={styles.productImage} src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/copper_pan.jpg?updatedAt=1720304110112" alt="Non-Rust Frying Pan" />
          <div style={styles.productInfo}>
            <div style={styles.productRow}>
              <span style={styles.productName}>Non-Rust Frying Pan</span>
              <span style={styles.productPrice}>N80, 000</span>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Color selected</span>
              <div style={styles.selectedColor}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E0DFFE"/>
<rect x="5" y="5" width="14" height="14" rx="7" fill="#0A0A0A"/>
</svg>
              </div>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Quantity</span>
              <span style={styles.productValue}>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%',
  },
  purchaseTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Lora',
    fontWeight: 700,
    fontSize: '24px',
    letterSpacing: '0.24px',
    lineHeight: '30px',
    color: '#111111ff',
  },
  editContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  editText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#111111ff',
  },
  editIcon: {
    width: '24px',
    height: '24px',
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  detailLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#3c3c3cff',
  },
  detailValue: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#3c3c3cff',
    textAlign: 'right',
  },
  detailsDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#e0dffeff',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderTop: '1px solid #e0dffeff',
  },
  totalLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#3c3c3cff',
  },
  totalValue: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#3c3c3cff',
    textAlign: 'right',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    width: '100%',
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    width: '100%',
    padding: '24px 0',
  },
  productImage: {
    width: '88px',
    height: '88px',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productName: {
    fontFamily: 'Lora',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '0.18px',
    textTransform: 'capitalize',
    color: '#111111ff',
  },
  productPrice: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '30px',
    color: '#555555ff',
    textAlign: 'center',
  },
  productLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  productValue: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#555555ff',
    textAlign: 'right',
  },
  selectedColor: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  colorIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '1.5px solid #e0dffeff',
  },
};

export default PurchaseInfo;
