import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IArtistContext {
    artistData: Artist | null;
    fetching: boolean;
    hasError: boolean;
    setArtistIdState: (artistId: number) => void;
}

interface IArtistProviderProps {
    children: React.ReactNode;
}

export const ArtistContext = React.createContext<IArtistContext>({
    artistData: null,
    fetching: false,
    hasError: false,
    setArtistIdState: () => { return null }
});
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IArtistProviderProps> = props => {
    const { children } = props;
    const [artistData, setArtistData] = React.useState<Artist | null>(null);
    const [artistId, setArtistId] = React.useState<number | null>(null);
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [hasError, setHasError] = React.useState<boolean>(false);

    const setArtistIdState = (artistId: number) => {
        setArtistId(artistId);
    };

    React.useEffect(() => {
        (async () => {
            if (!artistData && artistId) {
                setFetching(true);
                setHasError(false);

                try {
                    const response: Artist = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
                    setArtistData(response);
                    setFetching(false);
                } catch (error) {
                    console.log(error);
                    setFetching(false);
                    setHasError(true);
                }
            }
        })();
    }, [artistData, artistId]);

    return (
        <ArtistContext.Provider
            value={{
                artistData: artistData,
                fetching: fetching,
                hasError: hasError,
                setArtistIdState: setArtistIdState
            }}
        >
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
