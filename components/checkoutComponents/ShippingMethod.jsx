import React from 'react';

const ShippingMethod = ({ selectedOption, handleOptionChange }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Shipping method</h2>
      <div style={styles.options}>
        <div
          style={{
            ...styles.option,
            borderColor: selectedOption === 'option1' ? '#db6a18ff' : '#e0dffeff',
            borderWidth: selectedOption === 'option1' ? '1px' : '0.5px',
          }}
          onClick={() => handleOptionChange('option1')}
        >
          <div style={styles.optionContent}>
            <div style={styles.textGroup}>
              <span style={styles.company}>Everday transport company</span>
              <span style={styles.description}>Delivers within 1-2 business days</span>
            </div>
            <span style={styles.price}>N10,000</span>
            <img style={styles.radioIcon} src="./assets/akar-icons-radio-fill.svg" alt="Radio Filled" />
          </div>
        </div>
        <div
          style={{
            ...styles.option,
            borderColor: selectedOption === 'option2' ? '#db6a18ff' : '#e0dffeff',
            borderWidth: selectedOption === 'option2' ? '1px' : '0.5px',
          }}
          onClick={() => handleOptionChange('option2')}
        >
          <div style={styles.optionContent}>
            <div style={styles.textGroup}>
              <span style={styles.company}>ABC transport company</span>
              <span style={styles.description}>Delivers within 3-4 business days</span>
            </div>
            <span style={styles.price}>N6,500</span>
            <img style={styles.radioIcon} src="./assets/solar-record-linear.svg" alt="Radio Unfilled" />
          </div>
        </div>
        <div
          style={{
            ...styles.option,
            borderColor: selectedOption === 'option3' ? '#db6a18ff' : '#e0dffeff',
            borderWidth: selectedOption === 'option3' ? '1px' : '0.5px',
          }}
          onClick={() => handleOptionChange('option3')}
        >
          <div style={styles.optionContent}>
            <div style={styles.textGroup}>
              <span style={styles.company}>Goodtour bus company</span>
              <span style={styles.description}>Delivers within 3-5 business days</span>
            </div>
            <span style={styles.price}>N4,000</span>
            <img style={styles.radioIcon} src="./assets/solar-record-linear-2.svg" alt="Radio Unfilled" />
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
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    borderStyle: 'solid',
    cursor: 'pointer',
  },
  optionContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: '10px',
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  company: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    color: '#111111ff',
    lineHeight: '24px',
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '14px',
    color: '#3c3c3cff',
    lineHeight: '22px',
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#111111ff',
    lineHeight: '24px',
  },
  radioIcon: {
    width: '24px',
    height: '24px',
  },
};

export default ShippingMethod;