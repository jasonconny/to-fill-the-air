import * as React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundary';
import MainNav from '../MainNav';
import Footer from '../Footer';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayout {
    children: React.ReactNode;
    className?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = props => {
    const { children, className } = props;

    return (
        <ErrorBoundary>
            <a
                href={'#main-content'}
                className={styles.skipNavigation}
            >
				Skip to main content
            </a>

            <header className={styles.header}>
                <Link
                    className={styles.homeLink}
                    to={'/'}
                >
                    <h1>To Fill The Air</h1>
                </Link>

                <MainNav/>
            </header>

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
