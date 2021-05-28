interface IShow {
    date: string;
    notes?: string;
    releases?: Array<any>;
    sets: Array<Array<ISong>>;
    venue: IVenue;
}
