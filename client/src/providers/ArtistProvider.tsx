import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IArtistContext extends IContext {
    artistData: IArtistData | null;
    setArtistIdToFetch: (artistId: number) => void;
}

export const ArtistContext = React.createContext<IArtistContext>({
    artistData: null,
    fetching: false,
    hasError: false,
    setArtistIdToFetch: () => { return null }
});
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IProviderProps> = props => {
    const { children } = props;
    const [artistData, setArtistData] = React.useState<IArtistData | null>(null);
    const [artistId, setArtistId] = React.useState<number | null>(null);
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [hasError, setHasError] = React.useState<boolean>(false);

    const fetchArtistData = async (artistId: number) => {
        setFetching(true);

        try {
            const response: IArtistData = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
            return response;
        } catch (error) {
            return error;
        }
    }

    const setArtistIdToFetch = (artistId: number) => {
        setArtistId(artistId);
    };

    React.useEffect(() => {
        if (!artistData && artistId) {
            fetchArtistData(artistId)
                .then(data => {
                    setFetching(false);
                    setArtistData(data);
                }).catch(error => {
                    console.log(error);
                    setFetching(false);
                    setHasError(true);
                });
        }
    }, [artistData, artistId]);

    return (
        <ArtistContext.Provider
            value={{
                artistData,
                fetching,
                hasError,
                setArtistIdToFetch
            }}
        >
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
