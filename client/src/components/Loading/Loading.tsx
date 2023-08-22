import * as React from 'react';
import Spinner from 'components/Spinner';
import styles from './Loading.scss';

const Loading: React.FC = () => (
  <main className={styles.block}>
    <Spinner />
  </main>
);

export default Loading;
