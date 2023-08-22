import * as React from 'react';
import LogoLink from 'components/Layouts/LogoLink';
import styles from './Header.scss';

interface Props {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <header className={styles.block}>
      <nav className={styles.nav}>
        <LogoLink className={styles.logoLink} href={'/home'} format={'full'} />

        {children}
      </nav>
    </header>
  );
};

export default Header;
