import React from 'react';
import LogoLink from 'components/Layouts/LogoLink';
import styles from './Header.scss';
import { useAuth0 } from '@auth0/auth0-react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLoginClick = async () => {
    await loginWithRedirect();
  };

  const handleLogoutClick = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <header className={styles.block}>
      <nav className={styles.nav}>
        <LogoLink className={styles.logoLink} href="/" format="full" />

        {children}

        {isAuthenticated ? (
          <button onClick={handleLogoutClick}>Log Out</button>
        ) : (
          <button onClick={handleLoginClick}>Log In</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
