import * as React from 'react';
import styles from './ShowViewSets.scss';
import { Set } from 'types/Show';

interface ISetProps {
    sets: Set[]
}

const formatTime = (time: string) => {
    const splitTime = time.split(':') || [];
    if (splitTime[0] === '00') {
        splitTime.shift();
    }
    const joinedTime = splitTime.join(':');
    return joinedTime.startsWith('0') ? joinedTime.slice(1) : joinedTime;
}

export const ShowViewSets: React.FC<ISetProps> = ({ sets }) => (
    <>
        {sets.length === 1 ? (
            <p>loop over single set</p>
        ) : (
            <dl className={styles.setsContainer}>
                {sets.map(set => (
                    <React.Fragment key={set.set_id}>
                        <dt className={styles.setLabel}>
                            {set.name}
                        </dt>

                        <dd className={styles.setListContainer}>
                            <ul className={styles.list}>
                                {set.songs.map((song, index) => (
                                    <li
                                        className={styles.listItem}
                                        key={`${set.set_id}-${index}`}
                                    >
                                        {song.title}
                                        {song.length && <span> [{formatTime(song.length)}] </span>}
                                        {song.segue && ' >'}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        )}
    </>
);
