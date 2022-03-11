import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ArtistContext } from 'providers/ArtistProvider';

export const GET_ARTIST = gql`
    query GetArtist($artistId: ID!) {
        artist(artist_id: $artistId) {
            name
            members {
                firstName
                lastName
                name
                middleName
            }
        }
    }
`;

const BandView: React.FC = () => {
    const { data } = useQuery(GET_ARTIST, { variables: { artistId: '246650' }});
    const { artistData, setArtistIdToFetch } = React.useContext(ArtistContext);

    React.useEffect(() => {
        setArtistIdToFetch(246650);
    }, [setArtistIdToFetch]);

    React.useEffect(() => {
        console.log(data);
    }, [data]);

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
