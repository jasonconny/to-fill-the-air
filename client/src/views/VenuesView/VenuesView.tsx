import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Pagination from '../../components/Pagination';
import { PaginationVars } from 'types/Pagination';
import {  VenuesWithPaginationData } from 'types/Venue';

const GET_VENUES_WITH_PAGINATION = gql`
    query GetVenuesWithPagination($currentPage: Int!, $maxPagesToShow: Int) {
        venuesWithPagination(currentPage: $currentPage, maxPagesToShow: $maxPagesToShow) {
            pagination {
                currentPage
                pages
                totalItems
                totalPages
            }
            venues {
                name
                city
                state
            }
        }
    }
`

const VenuesView: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const { data } = useQuery<VenuesWithPaginationData, PaginationVars>(
        GET_VENUES_WITH_PAGINATION
        , { variables: {
            currentPage: currentPage,
            maxPagesToShow: 5
        }}
    );

    return (
        <section>
            <h2>Venues</h2>

            {data && data.venuesWithPagination.pagination && (
                <Pagination
                    currentPage={currentPage}
                    handlePaginationClick={setCurrentPage}
                    pages={data.venuesWithPagination.pagination.pages}
                    totalPages={data.venuesWithPagination.pagination.totalPages}
                />
            )}

            {data && data.venuesWithPagination.venues ? (
                <>
                    <h3>
                        {data.venuesWithPagination.venues.length}
                        {' of '}
                        {data.venuesWithPagination.pagination.totalItems}
                        {' venues'}
                    </h3>

                    <ul>
                        {data.venuesWithPagination.venues.map((venue) => (
                            <li key={venue.venue_id}>
                                <h4>{venue.name}</h4>
                                <p>{venue.city}, {venue.state}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>no venues</p>
            )}
        </section>
    );
};

export default VenuesView;
