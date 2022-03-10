import { RESTDataSource } from 'apollo-datasource-rest';

export default class DiscogsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.discogs.com/';
    }

    async getArtist(artistId) {
        return await this.get(`artists/${artistId}`);
    }
}
