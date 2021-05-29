import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './SubNav.scss';

interface ISubNavProps {
    className?: string;
    links: Array<INavLink>;
}

const SubNav: React.FC<ISubNavProps> = (props) => {
    const { className, links } = props;

    return (
        <ul className={classnames(
            styles.block,
            {[`${className}`] : className}
        )}>
            {links && links.length > 0 && (
                links.map((link, index) => (
                    <li
                        className={styles.listItem}
                        key={index}
                    >
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.linkActive}
                            to={`/releases/${link.slug}`}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))
            )}
        </ul>
    )
};

export default SubNav;
