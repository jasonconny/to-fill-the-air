import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Select } from 'components';
// import YearsNav from './YearsNav';
import { ShowCard } from 'components';
import styles from './ShowsView.scss';
import { ShowsData } from 'types/Show';

const GET_SHOWS = gql`
  query GetShows($year: String) {
    shows(year: $year) {
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
          segue
          title
        }
      }
    }
  }
`;

const years: Array<string> = [
  '1969',
  '1972',
  '1974',
  '1975',
  '1978',
  '1990',
  '2015',
];

const ShowsView: React.FC = () => {
  const navigate = useNavigate();
  const { year } = useParams();
  const { data } = useQuery<ShowsData>(GET_SHOWS, {
    variables: { year: year },
  });

  // const [shows, setShows] = React.useState<Array<IShow> | null>(null);

  const handleYearsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/shows/${event.currentTarget.value}`);
  };

  return (
    <>
      <section className={styles.section}>
        <h1>Shows{year ? ` from ${year}` : null}</h1>

        {data && data.shows.length > 0 ? (
          <ul className={styles.showList}>
            {data.shows
              .filter((show) => !!show)
              .map((show) => {
                const dateLink = `/shows/${show.date
                  .split('T')[0]
                  .replaceAll('-', '/')}`;
                return (
                  <li className={styles.showListItem} key={show.show_id}>
                    <ShowCard dateLink={dateLink} show={show} />
                  </li>
                );
              })}
          </ul>
        ) : null}
      </section>

      <aside className={styles.sidebar}>
        <h2>Filters</h2>

        <Select
          label={'Years:'}
          name={'years-filter'}
          onChange={handleYearsSelect}
          options={years}
          selectedOption={year ? year : ''}
        />
      </aside>
    </>
  );
};

export default ShowsView;
