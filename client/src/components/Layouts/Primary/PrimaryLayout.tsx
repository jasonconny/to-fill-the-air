import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import Header from 'components/Layouts/Header';
import MainNav from 'components/Layouts/MainNav';
import Footer from 'components/Layouts/Footer';
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
