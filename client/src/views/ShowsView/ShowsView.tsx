import * as React from 'react';
import { ShowsContext } from 'providers/ShowsProvider';
import { PrimaryLayout } from 'components/Layouts';
import Select from 'components/Select';
// import YearsNav from './YearsNav';
import ShowCard from '../../components/ShowCard'
import styles from './ShowsView.scss';

const years: Array<string> = ['1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975']

const ShowsView: React.FC = () => {
    const { fetching, showsData, setShowYearToFetch } = React.useContext(ShowsContext);

    const [selectedYear, setSelectedYear] = React.useState<string | null>(null);
    // const [shows, setShows] = React.useState<Array<IShow> | null>(null);

    React.useEffect(() => {
        if (selectedYear) {
            setShowYearToFetch(selectedYear)
        }
    }, [selectedYear, setShowYearToFetch]);

    const handleYearsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.currentTarget.value);
    }

    return (
        <PrimaryLayout className={styles.main} showLoading={fetching}>
            <section>
                <h1>Shows{selectedYear ? ` from ${selectedYear}` : null}</h1>

                {showsData && showsData.length > 0 ? (
                    <ul className={styles.showList}>
                        {showsData.filter(show => !!show)
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
                    selectedOption={selectedYear ? selectedYear : ''}
                />
            </aside>
        </PrimaryLayout>
    );
};

export default ShowsView;
