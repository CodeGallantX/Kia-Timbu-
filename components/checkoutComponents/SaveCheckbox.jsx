"use client";
import React from 'react';

const RegistrationCheckbox = () => {
  return (
    <div style={styles.container}>
      <input type="checkbox" name="Register" id="registerBox" />
      <span style={styles.text}>Save this information for next time.</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    marginBottom: '40px',
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
};

export default RegistrationCheckbox;

