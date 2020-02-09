import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './ShowsView.scss';

const ShowsView: React.FC = () => {
	return (
		<PrimaryLayout>
			<section className={styles.content}>
				<h2>Shows</h2>
			</section>
		</PrimaryLayout>
	);
};

export default ShowsView;
