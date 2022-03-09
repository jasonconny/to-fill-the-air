import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_SONG_REFS = gql`
    query GetSongRefs {
        songRefs {
            song_ref_id
            title
            composer
        }
    }
`;

const SongsView: React.FC = () => {
    const { data } = useQuery(GET_SONG_REFS);
    return (
        <section>
            <h2>Songs</h2>

            {data && data.songRefs ? (
                <ul>
                    {data.songRefs.map((songRef: any) => (
                        <li key={songRef.song_ref_id}>
                            {songRef.title}<br/>
                            {songRef.composer}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>no songs</p>
            )}
        </section>
    );
};

export default SongsView;
