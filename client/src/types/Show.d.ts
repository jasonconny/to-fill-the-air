import { IVenue } from './Venue';

type Set = {
  name: string;
  set_id: string;
  songs: Array<ISong>;
};

interface IShow {
  show_id: string;
  date: string;
  notes?: string;
  releases?: Array<any>;
  sets: Array<Set>;
  venue: IVenue;
}

type ShowsData = {
  shows: Array<IShow>;
};

type ShowData = {
  show?: IShow;
  showByDate?: IShow;
};
