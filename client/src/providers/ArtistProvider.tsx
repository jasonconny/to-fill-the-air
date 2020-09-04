import * as React from 'react';
import { Fetcher } from '../fetcher';

interface IArtistProviderProps {
    artistId: number;
    children: React.ReactNode;
}

export const ArtistContext = React.createContext<Artist | null>(null);
ArtistContext.displayName = 'Artist';

const ArtistProvider: React.FC<IArtistProviderProps> = props => {
    const { artistId, children } = props;
    const [artistData, setArtistData] = React.useState<Artist | null>(null);

    React.useEffect(() => {
        (async () => {
            try {
                const response: Artist = await Fetcher(`https://api.discogs.com/artists/${artistId}`);
                setArtistData(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [artistId]);

    return (
        <ArtistContext.Provider
            value={artistData}
        >
            {children}
        </ArtistContext.Provider>
    )
};

export default ArtistProvider;
