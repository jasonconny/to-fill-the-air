import * as React from 'react';
import classNames from 'classnames';
import styles from './ShowCard.scss';

interface IShowCardProps {
    city: string;
    date: string;
    state: string;
    venue: string;
}

export const ShowCard: React.FC<IShowCardProps> = props => {
    const { city, date, state, venue } = props;
    return (
        <div className={styles.block}>
            <p className={styles.date}>{date}</p>

            <h3 className={styles.venue}>{venue}</h3>

            <h4 className={styles.location}>{city}, {state}</h4>

            <h5 className={styles.setListLabel}>set 1</h5>

            <ul className={styles.setList}>
                <li
                    className={classNames(
                        styles.songTitle,
                        styles.songTitleSegues
                    )}
                >
                    Help On The Way
                </li>

                <li
                    className={classNames(
                        styles.songTitle,
                        styles.songTitleSegues
                    )}
                >
                    Slipknot!
                </li>

                <li
                    className={styles.songTitle}
                >
                    Franklin's Tower
                </li>

                <li
                    className={styles.songTitle}
                >
                   The Music Never Stopped
                </li>
            </ul>
        </div>
    );
};
