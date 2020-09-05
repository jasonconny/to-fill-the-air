import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IArtistContext {
    artistData: Artist | null;
    fetching: boolean;
}

interface IArtistProviderProps {
    artistId: number;
    children: React.ReactNode;
}

export const ArtistContext = React.createContext<IArtistContext>({artistData: null, fetching: false});
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IArtistProviderProps> = props => {
    const { artistId, children } = props;
    const [artistData, setArtistData] = React.useState<Artist | null>(null);
    const [fetching, setFetching] = React.useState<boolean>(false);

    React.useEffect(() => {
        (async () => {
            setFetching(true);

            try {
                const response: Artist = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
                setArtistData(response);
                setFetching(false);
            } catch (error) {
                console.log(error);
                setFetching(false);
            }
        })();
    }, [artistId]);

    return (
        <ArtistContext.Provider
            value={{
                artistData: artistData,
                fetching: fetching
            }}
        >
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
