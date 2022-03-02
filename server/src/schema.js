import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    scalar Date

    type Show {
        id: ID!
        date: Date!
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
        id: ID!
        name: String!
        address1: String
        address2: String
        city: String!
        state: String!
        zip: String
        country: String!
        latitude: Float
        longitude: Float
        shows: [Show!]!
    }

    type Query {
        shows: [Show!],
        show(id: ID!): Show,
        song_ref(song_ref_id: ID!): Song_Ref,
        song_refs: [Song_Ref!],
        venue(id: ID!): Venue,
        venues: [Venue!]
    }
`;
