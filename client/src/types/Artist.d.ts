type Member = {
    active: boolean;
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    middleName: string;
    resourceUrl: string;
}

export interface IArtist {
    id: number;
    members: Array<Member>;
    name: string;
    profile: string;
    releases_url: string;
    urls: Array<string>;
}

type ArtistData = {
    artist: IArtist
}
