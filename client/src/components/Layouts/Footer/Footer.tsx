import * as React from 'react';
import Copyright from 'components/Layouts/Copyright';
import styles from './Footer.scss';

interface Props {
  children?: React.ReactNode;
}

const Footer: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <footer className={styles.block}>
      {children}

      <Copyright />
    </footer>
  );
};

export default Footer;
