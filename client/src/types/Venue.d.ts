import { Pagination } from './Pagination';

export interface Venue {
  city: string;
  country?: string;
  name: string;
  state?: string;
  venue_id: string;
}

type VenuesData = {
  venues: Array<Venue>;
};

type VenuesWithPaginationData = {
  venuesWithPagination: {
    pagination: Pagination;
    venues: Array<Venue>;
  };
};
