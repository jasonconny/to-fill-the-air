import * as React from 'react';
import Show from '../../types/Show';
import { PrimaryLayout } from '../../components/Layouts';
import Select from '../../components/Select';
// import YearsNav from './YearsNav';
import ShowCard from '../../components/ShowCard'
import styles from './ShowsView.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as mockShows from './1975'

const years: Array<string> = ['1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975']

const ShowsView: React.FC = () => {
    const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
    const [shows, setShows] = React.useState<Array<Show> | null>(null);

    React.useEffect(() => {
        setShows(mockShows.default)
    }, []);

    const handleYearsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.currentTarget.value);
    }

    return (
        <PrimaryLayout className={styles.main}>
            <section className={styles.content}>
                <h1>Shows{selectedYear ? ` from ${selectedYear}` : null}</h1>

                {shows && shows.length > 0 ? (
                    <ul className={styles.showList}>
                        {shows.filter(show => !!show)
                            .map((show, index) => (
                                <li
                                    className={styles.showListItem}
                                    key={index}
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
                />
            </aside>
        </PrimaryLayout>
    );
};

export default ShowsView;
