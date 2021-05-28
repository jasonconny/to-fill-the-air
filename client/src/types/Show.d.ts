import ISong from './Song';
import IVenue from './Venue';

export default interface IShow {
    date: string;
    notes?: string;
    releases?: Array<any>;
    sets: Array<Array<ISong>>;
    venue: IVenue;
}
