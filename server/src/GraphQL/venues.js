import { gql } from 'apollo-server-express';
import * as db from '../database';

export const typeDefs = gql`
    extend type Query {
        venues: [Venue],
        venue(id: ID!): Venue
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
`

export const resolvers = {
    Query: {
        venues: async () => db.venues.findAll(),
        venue: async (obj, args, context, info) => db.venues.findByPk(args.id)
    },
    Venue: {
        shows: async (obj, args, context, info) => db.shows.findByPk(args.show_id)
    }
}
