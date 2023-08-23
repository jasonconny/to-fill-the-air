import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage, Loading } from 'components';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface PrimaryLayoutProps {
  className?: string;
  showLoading?: boolean;
  subNav?: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  className,
  showLoading,
  subNav,
}) => {
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

      <Footer />
    </ErrorBoundary>
  );
};

export default PrimaryLayout;
