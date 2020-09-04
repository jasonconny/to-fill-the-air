import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNav.scss';

const MainNav: React.FC = () => (
    <nav className={styles.block}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/band'}
                >

                    Band
                </NavLink>
            </li>

            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/shows'}
                >
                    Shows
                </NavLink>
            </li>

            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/tours'}
                >
					Tours
                </NavLink>
            </li>

            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/songs'}
                >
					Songs
                </NavLink>
            </li>

            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/venues'}
                >
					Venues
                </NavLink>
            </li>

            <li className={styles.listItem}>
                <NavLink
                    activeClassName={styles.linkActive}
                    className={styles.link}
                    to={'/stats'}
                >
					Stats
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default MainNav;
