import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import NotFoundView from '../NotFoundView';
import { DateCard } from 'components';
import { ShowViewSets } from './components';
import styles from './ShowView.scss';
import { ShowData } from 'types/Show';

export const GET_SHOW_BY_DATE = gql`
  query GetShow($date: LocalDate!) {
    showByDate(date: $date) {
      date
      show_id
      venue {
        city
        country
        name
        state
      }
      sets {
        set_id
        name
        songs {
          length
          segue
          title
        }
      }
    }
  }
`;

const ShowView: React.FC = () => {
  const { year, month, date } = useParams();
  const { data: { showByDate } = {} } = useQuery<ShowData>(GET_SHOW_BY_DATE, {
    variables: { date: `${year}-${month}-${date}` },
  });

  return (
    <>
      {showByDate ? (
        <>
          <section className={styles.section}>
            <DateCard date={showByDate.date} />

            <header className={styles.sectionHeader}>
              <h3 className={styles.venue}>{showByDate.venue.name}</h3>

              <h4 className={styles.location}>
                {showByDate.venue.city}
                {showByDate.venue.state ? `, ${showByDate.venue.state}` : null}
                {showByDate.venue.country !== 'USA'
                  ? `, ${showByDate.venue.country}`
                  : null}
              </h4>
            </header>
          </section>

          <section className={styles.section}>
            {showByDate.sets.length > 0 ? (
              <ShowViewSets sets={showByDate.sets} />
            ) : (
              <h2>no set list</h2>
            )}
          </section>
        </>
      ) : (
        <NotFoundView />
      )}
    </>
  );
};

export default ShowView;
