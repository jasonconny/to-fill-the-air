import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import Header from 'components/Layouts/Header';
import MainNav from 'components/Layouts/MainNav';
import Footer from 'components/Layouts/Footer';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayoutProps {
  className?: string;
  showLoading?: boolean;
  subNav?: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({
  className,
  showLoading,
  subNav,
}) => {
  const { isAuthenticated, logout } = useAuth0();

  return showLoading ? (
    <Loading />
  ) : (
    <ErrorBoundary fallback={<ErrorMessage errorMessageText={null} />}>
      <a href={'#main-content'} className={styles.skipNavigation}>
        Skip to main content
      </a>

      <Header>
        <MainNav />

        {subNav}
      </Header>

      <main
        id={'main-content'}
        className={classnames(styles.main, { [`${className}`]: className })}
      >
        <Outlet />
      </main>

      <Footer>
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : null}
      </Footer>
    </ErrorBoundary>
  );
};

export default PrimaryLayout;
