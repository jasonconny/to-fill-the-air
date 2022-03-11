import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    scalar Latitude
    scalar LocalDate
    scalar Longitude
    scalar Time
    scalar URL
    
    type Artist {
        id: ID!
        members: [Member]!
        name: String
        profile: String
        releases_url: URL
        urls: [URL]
    }
    
    type Member {
        active: Boolean
        id: ID!
        firstName: String
        lastName: String
        name: String
        middleName: String
        resourceUrl: URL
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

    type Set {
        set_id: ID!
        show_id: ID!
        name: String
        songs: [Song!]!
    }

    type Show {
        show_id: ID!
        date: LocalDate!
        tour: String
        notes: String
        sets: [Set!]!
        venue: Venue!
    }

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

    type SongRef {
        song_ref_id: ID!
        title: String!
        composer: String
    }
    
    type SongRefConnection {
        pagination: Pagination
        song_refs: [SongRef]!
    }

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
        shows: [Show!]!
    }

    type Query {
        artist(artist_id: ID!): Artist
        sets(show_id: ID!): [Set]
        shows: [Show!]
        show(show_id: ID!): Show
        songs: [Song]!
        songRef(song_ref_id: ID!): SongRef
        songRefs: [SongRef]!
        songRefsWithPagination(
            currentPage: Int!
            maxPages: Int
            pageSize: Int
        ): SongRefConnection!
        venue(venue_id: ID!): Venue
        venues: [Venue!]
    }
`;
