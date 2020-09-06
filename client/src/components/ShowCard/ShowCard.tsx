import * as React from 'react';
import Show from '../../types/Show';
import classNames from 'classnames';
import styles from './ShowCard.scss';

interface IShowCardProps {
    show: Show;
}

export const ShowCard: React.FC<IShowCardProps> = props => {
    const { date, sets, venue } = props.show;

    return (
        <div className={styles.block}>
            <p className={styles.date}>{date}</p>

            <h3 className={styles.venue}>{venue.name}</h3>

            <h4 className={styles.location}>{venue.city}, {venue.state}</h4>

            {sets.filter(set => !!set)
                .map((set, index) => (
                    <React.Fragment key={index}>
                        {sets.length > 1 && (
                            <h5 className={styles.setListLabel}>
                                {index + 1 < sets.length ? `set ${index + 1}` : `encore`}
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
    );
};
