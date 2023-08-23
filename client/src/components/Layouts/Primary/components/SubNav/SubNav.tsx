import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubNav.scss';
import classNames from 'classnames';

interface SubNavProps {
  className?: string;
  links: Array<NavLink>;
}

const SubNav: React.FC<SubNavProps> = ({ className, links }) => {
  return (
    <ul className={classNames(styles.block, { [`${className}`]: className })}>
      {links &&
        links.length > 0 &&
        links.map((link, index) => (
          <li className={styles.listItem} key={index}>
            <NavLink
              className={(isActive) =>
                classNames(styles.link, { [styles.linkActive]: isActive })
              }
              to={`/releases/${link.slug}`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default SubNav;
