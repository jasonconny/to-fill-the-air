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
