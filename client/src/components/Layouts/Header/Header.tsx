import * as React from 'react';
import LogoLink from '../LogoLink';
import styles from './Header.scss';

interface Props {
    children?: React.ReactNode;
}

const Header: React.FC<Props> = props => {
    const { children } = props;

    return (
        <header className={styles.block}>
            <nav className={styles.nav}>
                <LogoLink
                    href={'/home'}
                    format={'full'}
                />

                {children}
            </nav>
        </header>
    );
};

export default Header;
