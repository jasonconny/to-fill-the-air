type Member = {
    active: boolean;
    id: number;
    name: string;
    resourceUrl: string;
}

interface Artist {
    aliases: Array<Record<string, unknown>>;
    id: number;
    data_quality: 'Needs Vote';
    members: Array<Member>;
    name: string;
    namevariations: Array<string>;
    profile: string;
    releases_url: string;
    urls: Array<string>;
}
