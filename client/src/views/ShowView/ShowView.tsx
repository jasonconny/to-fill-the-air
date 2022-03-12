import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ShowCard from '../../components/ShowCard'
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
                    title
                    segue
                }
            }
        }
    }
`

const ShowView: React.FC = () => {
    const { year, month, date } = useParams();
    const { data } = useQuery<ShowData>(GET_SHOW_BY_DATE, { variables: { date: `${year}-${month}-${date}` }});

    return (
        <section className={styles.section}>
            {data && data.showByDate ? (
                <ShowCard show={data.showByDate}/>
            ) : (
                <h2>Not Found</h2>
            )}
        </section>
    );
};

export default ShowView;
