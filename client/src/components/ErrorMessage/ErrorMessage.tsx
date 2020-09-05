import * as React from 'react';
import classNames from 'classnames';
import styles from './ErrorMessage.scss';

interface Props {
    classname?: string,
    errorMessageText: string | null;
}

export const ErrorMessage: React.FC<Props> = props => {
    const { classname, errorMessageText } = props;

    return (
        <section
            className={classNames(
                styles.block,
                {[`${classname}`]: classname}
            )}
        >
            {errorMessageText ? (
                <p className={styles.text}>
                    {errorMessageText}
                </p>
            ) : (
                <p className={styles.text}>
                    An error occurred.
                </p>
            )}
        </section>
    );
};
