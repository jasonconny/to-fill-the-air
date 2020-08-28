import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './HomeView.scss';

const HomeView: React.FC = () => {
    return (
        <PrimaryLayout>
            <section className={styles.content}>
                <p>Grateful Dead set lists.</p>
            </section>
        </PrimaryLayout>
    );
};

export default HomeView;
