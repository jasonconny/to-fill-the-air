import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './LogoLink.scss';

interface Props {
    className?: string;
    format: 'full' | 'logo',
    href: string
}

export const LogoLink: React.FC<Props> = props => {
    const { className, format, href } = props;

    return (
        <Link
            to={href}
            className={classnames(
                styles.block,
                {[`${className}`] : className},
                {[styles.blockFull] : format === 'full'},
                {[styles.blockLogo] : format === 'logo'}
            )}
            aria-label={'Logo'}
        >
            <h1 className={styles.header}>To Fill The Air</h1>
        </Link>
    );
};
