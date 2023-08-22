import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNav.scss';
import classNames from 'classnames';

const MainNav: React.FC = () => (
  <ul className={styles.block}>
    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/band'}
      >
        Band
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/shows'}
      >
        Shows
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/tours'}
      >
        Tours
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/songs'}
      >
        Songs
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/venues'}
      >
        Venues
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/releases'}
      >
        Releases
      </NavLink>
    </li>

    <li className={styles.listItem}>
      <NavLink
        className={(isActive) =>
          classNames(styles.link, { [styles.linkActive]: isActive })
        }
        to={'/stats'}
      >
        Stats
      </NavLink>
    </li>
  </ul>
);

export default MainNav;
