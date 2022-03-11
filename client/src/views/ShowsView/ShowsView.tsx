import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Select from 'components/Select';
// import YearsNav from './YearsNav';
import ShowCard from '../../components/ShowCard'
import styles from './ShowsView.scss';
import { ShowsData } from 'types/Show';

export const GET_SHOWS = gql`
    query GetShows($year: String) {
        shows(year: $year) {
            date
            show_id
            venue {
                city
                name
                state
            }
        }
    }
`

const years: Array<string> = ['1969', '1972', '1974', '1975', '1978', '1990', '2015']

const ShowsView: React.FC = () => {
    const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
    const { data } = useQuery<ShowsData>(GET_SHOWS, { variables: { year: selectedYear }});

    // const [shows, setShows] = React.useState<Array<IShow> | null>(null);

    const handleYearsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.currentTarget.value);
    }

    return (
        <>
            <section className={styles.section}>
                <h1>Shows{selectedYear ? ` from ${selectedYear}` : null}</h1>

                {data && data.shows.length > 0 ? (
                    <ul className={styles.showList}>
                        {data.shows.filter(show => !!show)
                            .map((show) => (
                                <li
                                    className={styles.showListItem}
                                    key={show.show_id}
                                >
                                    <ShowCard show={show}/>
                                </li>
                            ))
                        }
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
                    selectedOption={selectedYear ? selectedYear : ''}
                />
            </aside>
        </>
    );
};

export default ShowsView;
