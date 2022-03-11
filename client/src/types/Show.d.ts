import { IVenue } from './Venue';

interface IShow {
    show_id: string;
    date: string;
    notes?: string;
    releases?: Array<any>;
    sets: Array<Array<ISong>>;
    venue: IVenue;
}

type ShowsData = {
    shows: Array<IShow>
}
