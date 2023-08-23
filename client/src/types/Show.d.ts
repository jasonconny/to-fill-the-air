import { Venue } from './Venue';

type Set = {
  name: string;
  set_id: string;
  songs: Array<Song>;
};

interface Show {
  show_id: string;
  date: string;
  notes?: string;
  releases?: Array<any>;
  sets: Array<Set>;
  venue: Venue;
}

type ShowsData = {
  shows: Array<Show>;
};

type ShowData = {
  show?: Show;
  showByDate?: Show;
};
