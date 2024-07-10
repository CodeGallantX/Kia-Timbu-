import React from 'react';

const PurchaseInfo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.purchaseTitle}>
        <span style={styles.title}>Your Purchase</span>
        <div style={styles.editContainer}>
          <img style={styles.editIcon} src="./assets/solar-clapperboard-edit-linear.svg" alt="Edit" />
          <span style={styles.editText}>Edit</span>
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
          <img style={styles.productImage} src="./assets/img.svg" alt="Transparent Kettle" />
          <div style={styles.productInfo}>
            <div style={styles.productRow}>
              <span style={styles.productName}>Transparent Kettle</span>
              <span style={styles.productPrice}>N100, 000</span>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Color selected</span>
              <div style={styles.selectedColor}>
                <img style={styles.colorIcon} src="./assets/frame-58.svg" alt="Selected Color" />
              </div>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Quantity</span>
              <span style={styles.productValue}>1</span>
            </div>
          </div>
        </div>
        <div style={styles.cartItem}>
          <img style={styles.productImage} src="./assets/img-2.svg" alt="Non-Rust Frying Pan" />
          <div style={styles.productInfo}>
            <div style={styles.productRow}>
              <span style={styles.productName}>Non-Rust Frying Pan</span>
              <span style={styles.productPrice}>N80, 000</span>
            </div>
            <div style={styles.productRow}>
              <span style={styles.productLabel}>Color selected</span>
              <div style={styles.selectedColor}>
                <img style={styles.colorIcon} src="./assets/frame-58-2.svg" alt="Selected Color" />
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
    fontFamily: 'Georgia',
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
    gap: '16px',
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
    fontFamily: 'Georgia',
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
