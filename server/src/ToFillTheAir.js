import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

export default class ToFillTheAir extends SQLDataSource {
    getAllShows() {
        return this.knex
            .select('*')
            .from('shows')
            .orderBy('date')
            .cache(MINUTE);
    }

    getAllSongRefs() {
        return this.knex
            .select('*')
            .from('song_refs')
            .orderBy('name')
            .cache(MINUTE);
    }

    getAllVenues() {
        return this.knex
            .select('*')
            .from('venues')
            .orderBy('name')
            .cache(MINUTE);
    }

    getVenueByName(venueName) {
        return this.knex
            .select('*')
            .from('venues')
            .where({
                name: venueName
            })
            .cache(MINUTE)
    }
}
