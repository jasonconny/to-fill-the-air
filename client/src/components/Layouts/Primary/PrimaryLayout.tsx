import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import Header from 'components/Layouts/Header';
import MainNav from 'components/Layouts/MainNav';
import Footer from 'components/Layouts/Footer';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayoutProps {
    children: React.ReactNode;
    className?: string;
    showLoading?: boolean;
    subNav?: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = props => {
    const { children, className, showLoading, subNav } = props;

    return showLoading ? (
        <Loading/>
    ) : (
        <ErrorBoundary fallback={<ErrorMessage errorMessageText={null}/>}>
            <a
                href={'#main-content'}
                className={styles.skipNavigation}
            >
				Skip to main content
            </a>

            <Header>
                <MainNav/>

                {subNav}
            </Header>

            <main
                id={'main-content'}
                className={classnames(
                    styles.main,
                    {[`${className}`] : className}
                )}
            >
                {children}
            </main>

            <Footer/>
        </ErrorBoundary>
    );
};

export default PrimaryLayout;
