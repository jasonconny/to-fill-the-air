import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { PaginationVars } from 'types/Pagination';
import {  VenuesWithPaginationData } from 'types/Venue';
import styles from './VenuesView.scss';

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
}`;

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
                <ul className={styles.paginationList}>

                    {currentPage > 1 && (
                        <li className={styles.paginationListItem}>
                            <button onClick={() => setCurrentPage(currentPage - 1)}>
                                previous
                            </button>
                        </li>
                    )}

                    {data.venuesWithPagination.pagination.pages.map((page: number, index: number) => (
                        <li
                            className={styles.paginationListItem}
                            key={index}
                        >
                            <button
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    {currentPage < data.venuesWithPagination.pagination.totalPages && (
                        <li className={styles.paginationListItem}>
                            <button onClick={() => setCurrentPage(currentPage + 1)}>
                                next
                            </button>
                        </li>
                    )}

                </ul>
            )}

            {data && data.venuesWithPagination.venues ? (
                <>
                    <h3>{data.venuesWithPagination.venues.length} venues</h3>

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
