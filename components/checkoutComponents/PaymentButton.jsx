import React from 'react';

const PaymentButton = () => {
  return (
    <div style={styles.button}>
      <div style={styles.buttonContent}>
        <span style={styles.text}>Proceed to payment</span>
        <img style={styles.icon} src="./assets/solar-arrow-right-linear.svg" alt="Arrow Right" />
      </div>
    </div>
  );
};

const styles = {
  button: {
    width: '100%',
    height: '64px',
    backgroundColor: '#0a0a0aff',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '30px',
    color: '#fffffeff',
  },
  icon: {
    width: '24px',
    height: '24px',
  }
};

export default PaymentButton;
