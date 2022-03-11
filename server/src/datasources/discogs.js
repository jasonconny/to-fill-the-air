import { RESTDataSource } from 'apollo-datasource-rest';

export default class DiscogsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.discogs.com/';
    }

    async getArtist(artistId) {
        const response = await this.get(`artists/${artistId}`);
        return this.artistReducer(response);
    }

    artistReducer(artist) {
        const newMembers = artist.members.map(member => {
            const splitName = member.name.split(' ');
            const newMember = {
                firstName: splitName[0],
                lastName: splitName[splitName.length - 1],
                middleName: splitName.length > 2 ? splitName[1] : null
            };
            return Object.assign({}, member, newMember);
        });
        return Object.assign({}, artist, { members: newMembers });
    }
}
