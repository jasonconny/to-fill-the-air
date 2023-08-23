import React from 'react';
import classNames from 'classnames';
import styles from './ErrorMessage.scss';

interface Props {
  classname?: string;
  errorMessageText: string | null;
}

export const ErrorMessage: React.FC<Props> = ({
  classname,
  errorMessageText,
}) => {
  return (
    <section
      className={classNames(styles.block, { [`${classname}`]: classname })}
    >
      {errorMessageText ? (
        <p className={styles.text}>{errorMessageText}</p>
      ) : (
        <p className={styles.text}>An error occurred.</p>
      )}
    </section>
  );
};
