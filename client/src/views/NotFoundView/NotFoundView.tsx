import * as React from 'react';
import { PrimaryLayout } from 'components/Layouts';
import styles from './NotFoundView.scss';

const NotFoundView: React.FC = () => {
    return (
        <PrimaryLayout>
            <section className={styles.content}>
                <h2>Not Found</h2>
            </section>
        </PrimaryLayout>
    );
};

export default NotFoundView;
