import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './LogoLink.scss';

interface LogoLinkProps {
  className?: string;
  format: 'full' | 'logo';
  href: string;
}

export const LogoLink: React.FC<LogoLinkProps> = (props) => {
  const { className, format, href } = props;

  return (
    <Link
      to={href}
      className={classnames(
        styles.block,
        { [`${className}`]: className },
        { [styles.blockFull]: format === 'full' },
        { [styles.blockLogo]: format === 'logo' },
      )}
      aria-label={'Logo'}
    >
      <h1 className={styles.header}>To Fill The Air</h1>
    </Link>
  );
};
