type Member = {
  active: boolean;
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  middleName: string;
  resourceUrl: string;
};

export interface Artist {
  id: number;
  members: Array<Member>;
  name: string;
  profile: string;
  releases_url: string;
  urls: Array<string>;
}

type ArtistData = {
  artist: Artist;
};
