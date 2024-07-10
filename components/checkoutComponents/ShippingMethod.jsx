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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" fill="#DB6A18"/>
</svg>

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#111111" stroke-width="1.5"/>
</svg>

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#111111" stroke-width="1.5"/>
</svg>

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