import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    scalar Latitude
    scalar LocalDate
    scalar Longitude

    type Show {
        show_id: ID!
        date: LocalDate!
        tour: String
        notes: String
        venue: Venue!
    }

    type SongRef {
        song_ref_id: ID!
        title: String!
        composer: String
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
        shows: [Show!],
        show(show_id: ID!): Show,
        songRef(song_ref_id: ID!): SongRef,
        songRefs: [SongRef]!
        songRefsWithPagination(
            currentPage: Int!
            maxPages: Int
            pageSize: Int
        ): SongRefConnection!,
        venue(venue_id: ID!): Venue,
        venues: [Venue!]
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
    
    type SongRefConnection {
        pagination: Pagination
        song_refs: [SongRef]!
    }
`;
