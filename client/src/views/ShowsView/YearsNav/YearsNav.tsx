import * as React from 'react';
import styles from './YearsNav.scss';

const YearsNav: React.FC = () => (
	<nav className={styles.block}>
		<h3>Years</h3>

		<ul className={styles.list}>
			<li className={styles.listItem}>
				1969
			</li>

			<li className={styles.listItem}>
				1974
			</li>

			<li className={styles.listItem}>
				1978
			</li>

			<li className={styles.listItem}>
				1990
			</li>

			<li className={styles.listItem}>
				1995
			</li>

			<li className={styles.listItem}>
				2015
			</li>
		</ul>
	</nav>
);

export default YearsNav;
