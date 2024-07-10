import React from 'react';

const Header = () => {
  return (
    <div style={styles.navBar}>
      <div style={styles.navCenter}>
        <div style={styles.logoSearchBar}>
          <div style={styles.logo}>CHEF</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  navBar: {
    background: '#0a0a0aff',
    paddingTop: '24px',
    paddingBottom: '16px',
    width: '100%',
  },
  navCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1248px',
    margin: '0 auto',
  },
  logoSearchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '104px',
    height: '24px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  }
};

export default Header;
