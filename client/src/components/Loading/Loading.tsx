import React from 'react';
import { Spinner } from '../Spinner';
import styles from './Loading.scss';

export const Loading: React.FC = () => (
  <main className={styles.block}>
    <Spinner />
  </main>
);
