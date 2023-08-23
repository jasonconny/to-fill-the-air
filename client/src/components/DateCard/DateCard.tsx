import React from 'react';
import styles from './DateCard.scss';

interface DateCardProps {
  date: string;
}

export const DateCard: React.FC<DateCardProps> = ({ date }) => {
  const utcDate = new Date(date);
  const formattedDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000,
  );

  return (
    <div className={styles.block}>
      <span className={styles.weekday}>
        {formattedDate.toLocaleString('en-US', { weekday: 'long' })}
      </span>

      <span className={styles.month}>
        {formattedDate.toLocaleString('en-US', { month: 'short' })}
      </span>

      <span className={styles.date}>
        {formattedDate.toLocaleString('en-US', { day: 'numeric' })}
      </span>

      <span className={styles.year}>
        {formattedDate.toLocaleString('en-US', { year: 'numeric' })}
      </span>
    </div>
  );
};
