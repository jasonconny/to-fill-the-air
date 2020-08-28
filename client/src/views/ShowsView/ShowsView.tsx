import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import YearsNav from './YearsNav';
import styles from './ShowsView.scss';

const ShowsView: React.FC = () => {
    return (
        <PrimaryLayout>
            <YearsNav/>

            <section className={styles.content}>
                <h2>Shows</h2>
            </section>
        </PrimaryLayout>
    );
};

export default ShowsView;
