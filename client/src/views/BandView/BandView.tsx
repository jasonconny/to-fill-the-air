import * as React from 'react';
import { ArtistContext } from 'providers/ArtistProvider';
import { PrimaryLayout } from 'components/Layouts';

const BandView: React.FC = () => {
    const { artistData, fetching, setArtistIdToFetch } = React.useContext(ArtistContext);

    React.useEffect(() => {
        setArtistIdToFetch(246650);
    }, [setArtistIdToFetch]);

    return (
        <PrimaryLayout showLoading={fetching}>
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
        </PrimaryLayout>
    );
};

export default BandView;
