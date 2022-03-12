import { RESTDataSource } from 'apollo-datasource-rest';

export default class DiscogsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.discogs.com/';
        this.consumerKey = process.env.DISCOGS_CONSUMER_KEY;
        this.consumerSecret = process.env.DISCOGS_CONSUMER_SECRET;
    }

    async getArtist(artistId) {
        const response = await this.get(`artists/${artistId}`);
        return this.artistReducer(response);
    }

    async getArtistReleases(artistId) {
        const response =  await this.get(`artists/${artistId}/releases?key=${this.consumerKey}&secret=${this.consumerSecret}`);
        console.log(response[0]);
        return [];
    }

    artistReducer(artist) {
        const additionalMembers = [
            {
                id: "305837",
                name: "Trey Anastasio",
                resource_url: "https://api.discogs.com/artists/305837",
                active: false
            },
            {
                id: "541772",
                name: "Jeff Chimenti",
                resource_url: "https://api.discogs.com/artists/541772",
                active: false
            }
        ];

        artist.members.push(additionalMembers[0], additionalMembers[1]);

        const newMembers = artist.members.map(member => {
            const splitName = member.name.split(' ');
            const newMember = {
                firstName: splitName[0],
                lastName: splitName[splitName.length - 1],
                middleName: splitName.length > 2 ? splitName[1] : null
            };
            return Object.assign({}, member, newMember);
        }).sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
        return Object.assign({}, artist, { members: newMembers });
    }
}
