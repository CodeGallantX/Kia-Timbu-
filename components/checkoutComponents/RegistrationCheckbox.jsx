"use client";
import React from 'react';

const RegistrationCheckbox = () => {
  return (
    <div style={styles.container}>
      <img style={styles.checkboxIcon} src="./assets/solar-stop-linear.svg" alt="Checkbox" />
      <span style={styles.text}>Register for a free account, for better tracking</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
  },
  checkboxIcon: {
    width: '24px',
    height: '24px',
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

