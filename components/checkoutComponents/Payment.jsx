"use client";
import React, { useState } from 'react';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>2. Payment</h1>
      </div>
      <div style={styles.paymentCenter}>
        <div style={styles.paymentHeader}>
          <span style={styles.payWithText}>Pay with</span>
          <img style={styles.logoMasterCard} src="./assets/logos-mastercard.svg" alt="Mastercard" />
          <img style={styles.logoVisa} src="./assets/logos-visaelectron.svg" alt="Visa" />
        </div>
        <div style={styles.paymentInfo}>
          <div style={styles.paymentText}>
            After clicking “Proceed to payment”, you will be redirected to Paystack to complete your purchase securely.
          </div>
        </div>
      </div>
      
      <div style={styles.billingAddressSection}>
        <h3 style={styles.billingAddressHeader}>Billing address</h3>
        <div style={styles.optionContainer}>
          <div
            style={{
              ...styles.option,
              borderColor: selectedOption === 'option1' ? '#db6a18ff' : '#e0dffeff',
              borderWidth: selectedOption === 'option1' ? '1px' : '0.5px',
            }}
            onClick={() => handleOptionChange('option1')}
          >
            <span style={styles.sameAsBillingAddressText}>Same as billing address</span>
            <img
              style={styles.radioIcon}
              src={selectedOption === 'option1' ? './assets/akar-icons-radio-fill.svg' : './assets/solar-record-linear.svg'}
              alt="Radio Icon"
            />
          </div>
          <div
            style={{
              ...styles.option,
              borderColor: selectedOption === 'option2' ? '#db6a18ff' : '#e0dffeff',
              borderWidth: selectedOption === 'option2' ? '1px' : '0.5px',
            }}
            onClick={() => handleOptionChange('option2')}
          >
            <span style={styles.useDifferentBillingAddressText}>Use a different billing address</span>
            <img
              style={styles.radioIcon}
              src={selectedOption === 'option2' ? './assets/akar-icons-radio-fill.svg' : './assets/solar-record-linear-2.svg'}
              alt="Radio Icon"
            />
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
    gap: '24px',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'Georgia',
    fontWeight: 700,
    fontSize: '24px',
    letterSpacing: '0.24px',
    textTransform: 'uppercase',
    lineHeight: '30px',
    color: '#111111ff',
  },
  paymentCenter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '56px',
    paddingBottom: '56px',
    borderBottom: '1px solid #e0dffeff',
    marginBottom: '32px',
  },
  paymentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#db6a18ff',
    padding: '16px 24px',
    borderRadius: '4px',
  },
  payWithText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#fffffeff',
  },
  logoMasterCard: {
    width: '32px',
    height: '24px',
  },
  logoVisa: {
    width: '53.9px',
    height: '24px',
  },
  paymentInfo: {
    paddingLeft: '80px',
    paddingRight: '80px',
  },
  paymentText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#3c3c3cff',
    textAlign: 'center',
  },
  billingAddressSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  billingAddressHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    borderRadius: '4px',
    borderStyle: 'solid',
    cursor: 'pointer',
  },
  sameAsBillingAddressText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  useDifferentBillingAddressText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff',
  },
  radioIcon: {
    width: '24px',
    height: '24px',
  },
};

export default Payment;
