import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerLinksContainer}>
        <img src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/logo.png" alt="logo" style={styles.logo} />
        <div style={styles.navLinks}>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Kitchen appliances</span>
          </div>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Cookware</span>
          </div>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Bakeware</span>
          </div>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Knives</span>
          </div>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Cutlery</span>
          </div>
          <div style={styles.navLink}>
            <span style={styles.navLinkText}>Contact us</span>
          </div>
        </div>
        <div style={styles.signUpButton}>
          <span style={styles.signUpButtonText}>Sign up</span>
        </div>
      </div>

      <div style={styles.footerContactContainer}>
        <div style={styles.contactInfo}>
          <div style={styles.contactColumn}>
            <span style={styles.contactText}>41 plot 5, Port-Harcourt, Nigeria</span>
            <span style={styles.contactTitle}>Address</span>
          </div>
          <div style={styles.contactColumn}>
            <span style={styles.contactText}>Chefword@gmail.com</span>
            <span style={styles.contactTitle}>Email</span>
          </div>
          <div style={styles.contactColumn}>
            <span style={styles.contactText}>+948-924-567-77-642</span>
            <span style={styles.contactTitle}>Contact</span>
          </div>
        </div>
        <div style={styles.backToTop}>
          <div style={styles.backToTopButton}>
            <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20V4M12 4L18 10M12 4L6 10" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>

          </div>
        </div>
      </div>

      <hr style={styles.line} />

      <div style={styles.footerBottomContainer}>
        <span style={styles.bottomText}>© 2023 — Copyright</span>
        <span style={styles.bottomText}>Privacy</span>
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#0a0a0a',
    paddingTop: '80px',
    paddingRight: '64px',
    paddingBottom: '16px',
    paddingLeft: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  },
  footerLinksContainer: {
    width: '100%',
    height: '54px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    gap: '16px',
  },
  navLink: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  navLinkText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
    color: '#fffffeff',
    textAlign: 'center'
  },
  signUpButton: {
    background: '#db6a18ff',
    padding: '8px 24px',
    borderRadius: '4px'
  },
  signUpButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
    color: '#fffffeff',
  },
  footerContactContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '80px',
    marginBottom: '16px'
  },
  contactInfo: {
    display: 'flex',
    gap: '80px',
  },
  contactColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  contactText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#fffffeff'
  },
  contactTitle: {
    fontFamily: 'Lora',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.12px',
    color: '#fffffeff',
    opacity: 0.4
  },
  backToTop: {
    display: 'flex',
    alignItems: 'center'
  },
  backToTopButton: {
    width: '40px',
    height: '40px',
    backgroundColor: '#db6a18ff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backToTopIcon: {
    width: '24px',
    height: '24px',
  },
  line: {
    width: '100%',
    border: '1px solid #333'
  },
  footerBottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '16px',
    color: '#9d9d9dff',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '140%'
  },
  bottomText: {
    textAlign: 'center'
  },
  logo: {
    width: '104px',
    height: '24px',
  }
};

export default Footer;
