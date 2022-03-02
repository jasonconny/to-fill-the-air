import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

export default class ToFillTheAir extends SQLDataSource {
    getAllSongRefs() {
        return this.knex
            .select('*')
            .from('song_refs');
    }
}
