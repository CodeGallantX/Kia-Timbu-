import React from 'react';

const ContactInfo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact information</h2>
      <div style={styles.contactCenter}>
        <div style={styles.nameSection}>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="Ore" readOnly />
            <label style={styles.label}>First Name</label>
          </div>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="Godson" readOnly />
            <label style={styles.label}>Last Name</label>
          </div>
        </div>
        <div style={styles.contactSection}>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="Ore@gmail.com" readOnly />
            <label style={styles.label}>Email address</label>
          </div>
          <div style={styles.inputGroup}>
            <input style={styles.input} value="+23468000" readOnly />
            <label style={styles.label}>Phone Number</label>
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
  contactCenter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
  nameSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    width: '100%',
  },
  contactSection: {
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
  input: {
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
  label: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#555555ff',
  },
};

export default ContactInfo;
