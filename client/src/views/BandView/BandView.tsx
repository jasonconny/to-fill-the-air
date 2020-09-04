import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './BandView.scss';

const BandView: React.FC = () => {
    return (
        <PrimaryLayout>
            <section className={styles.content}>
                <h2>Band</h2>
            </section>
        </PrimaryLayout>
    );
};

export default BandView;
