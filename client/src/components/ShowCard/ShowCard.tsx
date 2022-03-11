import * as React from 'react';
import classNames from 'classnames';
import styles from './ShowCard.scss';
import { IShow } from '../../types/Show';

interface IShowCardProps {
    show: IShow;
}

export const ShowCard: React.FC<IShowCardProps> = ({ show }) => {
    const { date, sets, venue } = show;
    const utcDate = new Date(date);
    const formattedDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);

    return (
        <div className={styles.block}>
            <div className={styles.dateContainer}>
                <span className={styles.dateContainerWeekday}>
                    {formattedDate.toLocaleString('en-US', {weekday: 'long'})}
                </span>

                <span className={styles.dateContainerMonth}>
                    {formattedDate.toLocaleString('en-US', {month: 'short'})}
                </span>

                <span className={styles.dateContainerDate}>
                    {formattedDate.toLocaleString('en-US', {day: 'numeric'})}
                </span>

                <span className={styles.dateContainerYear}>
                    {formattedDate.toLocaleString('en-US', {year: 'numeric'})}
                </span>
            </div>

            <div className={styles.content}>
                <h3 className={styles.venue}>{venue.name}</h3>

                <h4 className={styles.location}>{venue.city}, {venue.state}</h4>

                {sets && sets.filter(set => !!set)
                    .map((set, index) => (
                        <React.Fragment key={index}>
                            {sets.length > 1 && (
                                <h5 className={styles.setListLabel}>
                                    {index + 1 < sets.length ? `set ${index + 1}` : 'encore'}
                                </h5>
                            )}

                            <ul className={styles.setList}>
                                {set.filter(song => !!song)
                                    .map((song, index) => (
                                        <li
                                            className={classNames(
                                                styles.songTitle,
                                                {[`${styles.songTitleSegues}`] : song.segues}
                                            )}
                                            key={index}
                                        >
                                            {song.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};
