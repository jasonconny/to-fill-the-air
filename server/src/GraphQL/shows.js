import { gql } from 'apollo-server-express';
import * as db from '../database';

export const typeDefs = gql`
    extend type Query {
        shows: [Show!],
        show(id: ID!): Show
    }
    
    scalar Date

    type Show {
        id: ID!
        date: Date!
        tour: String
        notes: String
        venue: Venue!
    }
`

export const resolvers = {
    Query: {
        shows: async () => db.shows.findAll(),
        show: async (obj, args, context, info) => db.shows.findByPk(args.id)
    },
    Show: {
        venue: async (obj, args, context, info) => db.venues.findByPk(args.venue_id)
    }
}
