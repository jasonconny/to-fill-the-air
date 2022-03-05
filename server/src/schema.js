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

    type Song_Ref {
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
        song_ref(song_ref_id: ID!): Song_Ref,
        song_refs: [Song_Ref!],
        venue(venue_id: ID!): Venue,
        venues: [Venue!]
    }
`;
