import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ArtistData } from 'types/Artist';

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
    const { data } = useQuery<ArtistData>(GET_ARTIST, { variables: { artistId: '246650' }});

    return (
        <section>
            <h2>{data?.artist.name} were:</h2>

            {data && data.artist.members.length > 0 && (
                <ul>
                    {data.artist.members
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
