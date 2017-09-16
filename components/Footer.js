import { Component } from 'react';

const Footer = () =>
  (<footer style={styles.footerStyle}>
    <div>
      Made with &#10084; in San Francisco by{' '}
      <a style={styles.linkStyle} href="https://github.com/danishmughal">
        @danishmughal
      </a>{' '}
      and{' '}
      <a style={styles.linkStyle} href="https://github.com/KaranPhadnisNaik">
        @karanphadnisnaik
      </a>.
    </div>
  </footer>);

const styles = {
  footerStyle: {
    alignSelf: 'center',
    fontSize: '12px',
    color: '#dfebff',
    paddingBottom: '20px',
    textAlign: 'center',
  },
  linkStyle: {
    color: 'white',
  },
};

export default Footer;
