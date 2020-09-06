import Song from './Song';
import Venue from './Venue';

export default interface Show {
    date: string;
    notes?: string;
    releases?: Array<any>;
    sets: Array<Array<Song>>;
    venue: Venue;
}
