import { IPagination } from './Pagination';

export interface IVenue {
    city: string;
    country?: string;
    name: string;
    state?: string;
    venue_id: string;
}

type VenuesData = {
    venues: Array<IVenue>
}

type VenuesWithPaginationData = {
    venuesWithPagination: {
        pagination: IPagination,
        venues: Array<IVenue>
    }
}
