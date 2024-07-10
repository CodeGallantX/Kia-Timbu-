import React from 'react';

const ShippingDetails = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Shipping Information</h2>
      <div style={styles.center}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <div style={styles.inputWithIcon}>
              <span style={styles.icon}></span>
              <input style={styles.input} value="Nigeria" readOnly />
            </div>
            <label style={styles.label}>Country</label>
          </div>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="Nigeria" readOnly />
            <label style={styles.label}>City</label>
          </div>
        </div>
        
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <div style={styles.inputWithIcon}>
              <span style={styles.icon}></span>
              <input style={styles.input} value="Lagos" readOnly />
            </div>
            <label style={styles.label}>State/Province</label>
          </div>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="004" readOnly />
            <label style={styles.label}>Post Code</label>
          </div>
        </div>
        
        <div style={styles.inputGroup}>
          <input style={styles.singleInput} value="Ore Avenue" readOnly />
          <label style={styles.singleLabel}>Shipping Address 1</label>
        </div>
        <div style={styles.inputGroup}>
          <input style={styles.singleInput} value="" placeholder="Optional" />
          <label style={styles.singleLabel}>Shipping Address 2 (optional)</label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  },
  header: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#111111ff',
    lineHeight: '24px',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    width: '100%',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  },
  inputWithIcon: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: '16px',
    width: '24px',
    height: '24px',
    backgroundImage: 'url(./assets/solar-alt-arrow-down-linear.svg)', // Adjust the URL to the correct path of your icon
    backgroundSize: 'cover',
  },
  input: {
    height: '56px',
    padding: '0 16px',
    paddingRight: '40px', // Adjust padding to have space for the icon
    border: '0.5px solid #555555ff',
    borderRadius: '4px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#555555ff',
  },
  singleInput: {
    height: '56px',
    padding: '0 16px',
    border: '0.5px solid #555555ff',
    borderRadius: '4px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  singleLabel: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#555555ff',
  },
};

export default ShippingDetails;
