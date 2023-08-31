import gql from 'graphql-tag';

export const typeDefs = gql`
  #graphql

  scalar Latitude
  scalar LocalDate
  scalar Longitude
  scalar Time
  scalar URL

  # The "Artist" type represents the band.
  type Artist {
    id: ID!
    members: [Member]!
    name: String
    profile: String
    releases_url: URL
    urls: [URL]
  }

  # The "Member" type represents an individual band member.
  type Member {
    id: ID!
    active: Boolean
    firstName: String
    lastName: String
    name: String
    middleName: String
    resource_url: URL
  }

  type Pagination {
    currentPage: Int
    endIndex: Int
    endPage: Int
    pages: [Int]
    pageSize: Int
    startIndex: Int
    startPage: Int
    totalItems: Int
    totalPages: Int
  }

  type Release {
    id: ID!
  }

  # The "Set" type is an ordered array of songs that belongs to a "Show".
  type Set {
    set_id: ID!
    show_id: ID!
    name: String
    songs: [Song!]!
  }

  # The "Show" type represents an array of "Sets" associated with a "Date" and a "Venue".
  type Show {
    show_id: ID!
    date: LocalDate!
    tour: String
    notes: String
    sets: [Set!]!
    venue: Venue!
  }

  # The "Song" type is an instance of a "SongRef" that belongs to a "Set".
  type Song {
    song_id: ID!
    song_ref_id: ID!
    song_ref: SongRef
    set_id: ID!
    title: String
    length: Time
    segue: Boolean
    guest: String
  }

  # The "SongRef" type is the meta information (title, composer, etc) of a song.
  type SongRef {
    song_ref_id: ID!
    title: String!
    composer: String
  }

  type SongRefConnection {
    pagination: Pagination
    song_refs: [SongRef]!
  }

  # The "Venue" type represents the properties associated with the physical location where a "Show" was performed.
  type Venue {
    venue_id: ID!
    name: String!
    address1: String
    address2: String
    city: String!
    state: String!
    zip: String
    country: String!
    latitude: Latitude
    longitude: Longitude
    slug: String
    shows: [Show!]!
  }

  type VenueConnection {
    pagination: Pagination
    venues: [Venue]!
  }

  type Query {
    artist(artist_id: ID!): Artist
    releases(artist_id: ID!): [Release!]!
    sets(show_id: ID!): [Set]
    shows(year: String): [Show!]
    show(show_id: ID!): Show
    showByDate(date: LocalDate!): Show
    songs: [Song]!
    songRef(song_ref_id: ID!): SongRef
    songRefs: [SongRef]!
    songRefsWithPagination(
      currentPage: Int!
      maxPagesToShow: Int
      pageSize: Int
    ): SongRefConnection!
    venues: [Venue!]
    venuesWithPagination(
      currentPage: Int!
      maxPagesToShow: Int
      pageSize: Int
    ): VenueConnection!
    venue(venue_id: ID!): Venue
    venueByName(name: String!): Venue
  }
`;
