import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './VenuesView.scss';

const VenuesView: React.FC = () => {
	return (
		<PrimaryLayout>
			<section className={styles.content}>
				<h2>Venues</h2>
			</section>
		</PrimaryLayout>
	);
};

export default VenuesView;
