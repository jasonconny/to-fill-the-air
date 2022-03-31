import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ShowCard.scss';
import { IShow } from '../../types/Show';
import DateCard from '../DateCard';

interface IShowCardProps {
    dateLink?: string;
    show: IShow;
}

export const ShowCard: React.FC<IShowCardProps> = ({ dateLink, show }) => {
    const { date, sets, venue } = show;

    return (
        <div className={styles.block}>
            {dateLink ? (
                <Link
                    className={styles.dateLink}
                    to={dateLink}
                >
                    <DateCard date={date}/>
                </Link>
            ) : (
                <DateCard date={date}/>
            )}

            <div className={styles.content}>
                <h3 className={styles.venue}>{venue.name}</h3>

                <h4 className={styles.location}>
                    {venue.city}
                    {venue.state ? `, ${venue.state}` : null}
                    {venue.country !== 'USA' ? `, ${venue.country}` : null}
                </h4>

                {sets && sets.filter(set => !!set)
                    .map((set, index) => (
                        <React.Fragment key={index}>
                            {sets.length > 1 && (
                                <h5 className={styles.setListLabel}>
                                    {set.name}
                                </h5>
                            )}

                            <ul className={styles.setList}>
                                {set.songs.filter(song => !!song)
                                    .map((song, index) => (
                                        <li
                                            className={classNames(
                                                styles.songTitle,
                                                {[`${styles.songTitleSegues}`] : song.segue}
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
