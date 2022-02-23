import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';

const BandView: React.FC = () => {
    const { artistData, setArtistIdToFetch } = React.useContext(ArtistContext);

    React.useEffect(() => {
        setArtistIdToFetch(246650);
    }, [setArtistIdToFetch]);

    return (
        <section>
            <h2>{artistData?.name} were:</h2>

            {artistData && artistData.members.length > 0 && (
                <ul>
                    {artistData.members
                        .filter(member => !!member)
                        .map((member, index) => (
                            <li key={index}>
                                {member.name}
                            </li>
                        ))
                    }
                </ul>
            )}
        </section>
    );
};

export default BandView;
