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
            <label style={styles.label}>Country</label>
              <input style={styles.input} value="Nigeria" readOnly />
            </div>
          </div>
          <div style={styles.inputGroup}>
          <label style={styles.label}>City</label>
            <input style={styles.input} value="Nigeria" readOnly />
          </div>
        </div>
        
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <div style={styles.inputWithIcon}>
              <span style={styles.icon}></span>
            <label style={styles.label}>State/Province</label>
              <input style={styles.input} value="Lagos" readOnly />
            </div>
          </div>
          <div style={styles.inputGroup}>
          <label style={styles.label}>Post Code</label>
            <input style={styles.input} value="004" readOnly />
          </div>
        </div>
        
        <div style={styles.inputGroup}>
        <label style={styles.singleLabel}>Shipping Address 1</label>
          <input style={styles.singleInput} value="Ore Avenue" readOnly />
        </div>
        <div style={styles.inputGroup}>
        <label style={styles.singleLabel}>Shipping Address 2 (optional)</label>
          <input style={styles.singleInput} value="" placeholder="Optional" />
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
    marginBottom: '40px',
    paddingLeft: '4rem',
    paddingRight: '4rem',
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
    justifyContent: 'space-between',
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
    justifyContent: 'flex-start',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: '16px',
    width: '24px',
    height: '24px',
    top: '50%', // Center the icon vertically
    transform: 'translateY(-50%)', // Adjust for vertical centering
    backgroundImage: 'url(https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/keyboard_arrow_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz40.png?updatedAt=1720583148129)', // Adjust the URL to the correct path of your icon
    backgroundSize: 'contain',

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
