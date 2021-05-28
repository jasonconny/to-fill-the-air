import * as React from 'react';
import { Fetcher } from 'fetcher';
import IShow from 'types/Show';

interface IShowsContext extends IContext {
    setShowYearToFetch: (year: string) => void;
    showsData: Array<IShow> | null;
}

export const ShowsContext = React.createContext<IShowsContext>({
    fetching: false,
    hasError: false,
    setShowYearToFetch: () => null,
    showsData: null
});
ShowsContext.displayName = 'Shows';

const ShowsProvider: React.FC<IProviderProps> = props => {
    const { children } = props;
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [hasError, setHasError] = React.useState<boolean>(false);
    const [showsData, setShowsData] = React.useState<Array<IShow> | null>(null);
    const [showYear, setShowYear] = React.useState<string | null>(null);

    const fetchShowsData = async (showYear: string) => {
        setFetching(true);

        try {
            const response: Array<any> = await Fetcher(`/json/shows/${showYear}.json`);
            return response;
        } catch (error) {
            return error;
        }
    }

    const setShowYearToFetch = (year: string) => {
        setShowYear(year);
    }

    React.useEffect(() => {
        if (showYear) {
            fetchShowsData(showYear)
                .then(data => {
                    setFetching(false);
                    setShowsData(data);
                }).catch(error => {
                    console.log(error);
                    setFetching(false);
                    setHasError(true);
                })
        }
    }, [showYear]);

    return (
        <ShowsContext.Provider
            value={{
                fetching,
                hasError,
                setShowYearToFetch,
                showsData
            }}
        >
            {children}
        </ShowsContext.Provider>
    )
};

export default ShowsProvider;
