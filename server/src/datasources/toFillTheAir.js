import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

export class ToFillTheAirAPI extends SQLDataSource {
    async getShows(year) {
        if (year) {
            return await this.knex
                .select('*')
                .from('shows')
                .whereRaw('YEAR(date) = ?', year)
                .orderBy('date')
                .cache(MINUTE);
        } else {
            return await this.knex
                .select('*')
                .from('shows')
                .orderBy('date')
                .cache(MINUTE);
        }
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

    async getSetsByShowId(show_id) {
        return await this.knex
            .select('*')
            .from('sets')
            .where('show_id', show_id)
            .orderBy('order')
            .cache(MINUTE);
    }

    async getShowsFromVenue(venue_id) {
        return await this.knex
            .select('*')
            .from('shows')
            .where('venue_id', venue_id)
            .cache(MINUTE);
    }

    async getShowByDate(date) {
        const response = await this.knex
            .select('*')
            .from('shows')
            .where('date', date)
            .cache(MINUTE);
        return response[0];
    }

    async getShowById(show_id) {
        const response = await this.knex
            .select('*')
            .from('shows')
            .where('show_id', show_id)
            .cache(MINUTE);
        return response[0];
    }

    async getSongsBySetId(set_id) {
        return await this.knex
            .select('*')
            .from('songs')
            .where('set_id', set_id)
            .orderBy('order')
            .cache(MINUTE);
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

    async getVenueByName(name) {
        const response = await this.knex
            .select('*')
            .from('venues')
            .where('name', name)
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
