import React from 'react';


// Available Colors component
const AvailableColors = () => {
  return (
    <div style={styles.colorsContainer}>
      <span style={styles.title}>Available colors</span>
      <div style={styles.colors}>
        <div style={styles.colorWrapper}>
          <div style={styles.colorCircle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.375" y="0.375" width="19.25" height="19.25" rx="9.625" fill="white"/>
<rect x="0.375" y="0.375" width="19.25" height="19.25" rx="9.625" stroke="#0A0A0A" stroke-width="0.75"/>
<rect x="3" y="3" width="14" height="14" rx="7" fill="#E0DFFE"/>
</svg>

          </div>
        </div>
        <div style={styles.colorWrapper}>
          <div style={styles.colorCircle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="10" fill="white"/>
<rect x="3" y="3" width="14" height="14" rx="7" fill="#5754BA"/>
</svg>

          </div>
        </div>
        <div style={styles.colorWrapperActive}>
          <div style={styles.colorCircleActive}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="10" fill="white"/>
<rect x="3" y="3" width="14" height="14" rx="7" fill="#DEAE55"/>
</svg>

          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  colorsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '24px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#111111ff'
  },
  colors: {
    display: 'flex',
    gap: '8px'
  },
  colorWrapper: {
    padding: '3px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorWrapperActive: {
    padding: '3px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.75px solid #0a0a0a',
    boxSizing: 'border-box',
  },
  colorCircle: {
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  colorCircleActive: {
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  color: {
    width: '14px',
    height: '14px'
  }
};

export default AvailableColors;
