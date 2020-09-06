import * as React from 'react';
import { PrimaryLayout } from '../../components/Layouts';
import Select from '../../components/Select';
// import YearsNav from './YearsNav';
import styles from './ShowsView.scss';

const years: Array<string> = ['1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975']

const ShowsView: React.FC = () => {
    const [selectedYear, setSelectedYear] = React.useState<string | null>(null);

    const handleYearsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.currentTarget.value);
    }

    return (
        <PrimaryLayout className={styles.main}>
            <section className={styles.content}>
                <h1>Shows{selectedYear ? ` from ${selectedYear}` : null}</h1>
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
