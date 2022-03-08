import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

export default class ToFillTheAirAPI extends SQLDataSource {
    async getAllShows() {
        return await this.knex
            .select('*')
            .from('shows')
            .orderBy('date')
            .cache(MINUTE);
    }

    async getAllSongRefs() {
        return await this.knex
            .select('*')
            .from('song_refs')
            .orderBy('title')
            .cache(MINUTE);
    }

    async getAllVenues() {
        return await this.knex
            .select('*')
            .from('venues')
            .orderBy('name')
            .cache(MINUTE);
    }

    async getShowsFromVenue(venue_id) {
        return await this.knex
            .select('*')
            .from('shows')
            .where('venue_id', venue_id)
            .cache(MINUTE);
    }

    async getShowById(show_id) {
        const response = await this.knex
            .select('*')
            .from('shows')
            .where('show_id', show_id)
            .cache(MINUTE);
        return response[0];
    }

    async getSongRefById(song_ref_id) {
        const response = await this.knex
            .select('*')
            .from('song_refs')
            .where('song_ref_id', song_ref_id)
            .cache(MINUTE);
        return response[0];
    }

    async getVenueById(venue_id) {
        const response = await this.knex
            .select('*')
            .from('venues')
            .where('venue_id', venue_id)
            .cache(MINUTE);
        return response[0];
    }

    async getVenueForShow(show_id) {
        const response = await this.knex
            .select('*')
            .from('venues')
            .where('show_id', show_id)
            .cache(MINUTE);
        return response[0];
    }

    /* TODO: add reducer to convert field names to camelCase from snake_case */
}
