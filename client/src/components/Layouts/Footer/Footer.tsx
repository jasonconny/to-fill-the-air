import React from 'react';
import Copyright from 'components/Layouts/Copyright';
import styles from './Footer.scss';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className={styles.block}>
      {children}

      <Copyright />
    </footer>
  );
};

export default Footer;
