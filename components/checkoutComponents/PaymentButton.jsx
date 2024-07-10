import React from 'react';

const PaymentButton = () => {
  return (
    <div style = {styles.container}>
    <div style={styles.button}>
      <div style={styles.buttonContent}>
        <span style={styles.text}>Proceed to payment</span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
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
