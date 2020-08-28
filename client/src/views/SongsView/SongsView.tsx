import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './SongsView.scss';

const SongsView: React.FC = () => {
    return (
        <PrimaryLayout>
            <section className={styles.content}>
                <h2>Songs</h2>
            </section>
        </PrimaryLayout>
    );
};

export default SongsView;
