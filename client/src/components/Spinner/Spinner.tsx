import React from 'react';
import classNames from 'classnames';
import styles from './Spinner.scss';

interface SpinnerProps {
  small?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ small }) => {
  return (
    <div
      className={classNames(styles.block, { [`${styles.blockSmall}`]: small })}
    >
      <div className={styles.dot1} />
      <div className={styles.dot2} />
    </div>
  );
};
