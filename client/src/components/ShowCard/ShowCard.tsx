import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ShowCard.scss';
import { IShow } from '../../types/Show';

interface IShowCardProps {
    dateLink?: string;
    show: IShow;
}

type DateContainerProps = {
    date: string
};

const DateContainer: React.FC<DateContainerProps> = ({ date }) => {
    const utcDate = new Date(date);
    const formattedDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);

    return (
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
    );
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
                    <DateContainer date={date}/>
                </Link>
            ) : (
                <DateContainer date={date}/>
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
