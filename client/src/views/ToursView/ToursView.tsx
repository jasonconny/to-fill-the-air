import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './ToursView.scss';

const ToursView: React.FC = () => {
	return (
		<PrimaryLayout>
			<section className={styles.content}>
				<h2>Tours</h2>
			</section>
		</PrimaryLayout>
	);
};

export default ToursView;
