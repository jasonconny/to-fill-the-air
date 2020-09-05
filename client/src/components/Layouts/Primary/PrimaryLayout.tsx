import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Header from '../Header';
import MainNav from '../MainNav';
import Footer from '../Footer';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayout {
    children: React.ReactNode;
    className?: string;
    loading?: boolean;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = props => {
    const { children, className, loading } = props;

    return loading ? (
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
