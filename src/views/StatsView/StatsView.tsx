import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './StatsView.scss';

const StatsView: React.FC = () => {
	return (
		<PrimaryLayout>
			<section className={styles.content}>
				<h2>Stats</h2>
			</section>
		</PrimaryLayout>
	);
};

export default StatsView;
