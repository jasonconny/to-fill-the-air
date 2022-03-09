import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { IVenue } from 'types/Venue';

export const GET_VENUES = gql`
    query GetVenues {
        venues {
            name,
            city,
            state
            venue_id
        }
    }
`;

const VenuesView: React.FC = () => {
    const { data } = useQuery(GET_VENUES);

    return (
        <section>
            <h2>Venues</h2>

            {data && data.venues ? (
                <ul>
                    {data.venues.map((venue: IVenue) => (
                        <li key={venue.venue_id}>
                            <h4>{venue.name}</h4>
                            <p>{venue.city}, {venue.state}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>no venues</p>
            )}
        </section>
    );
};

export default VenuesView;
