import * as React from 'react';
import styles from './Copyright.scss';

export const Copyright: React.FC = () => {
    const [currentYear, setCurrentYear] = React.useState<number | null>(null);

    React.useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className={styles.block}>
            <p>&copy; 2020 - {currentYear} To Fill The Air, LLC. All rights reserved.</p>
        </div>
    );
};
