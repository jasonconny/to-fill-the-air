import { GraphQLDate } from 'graphql-iso-date';
import * as db from './database';

export const resolvers = {
    Date: GraphQLDate,
    Show: {
        venue: (parent, args, context, info) => parent.getVenue(),
    },
    Venue: {
        shows: (parent, args, context, info) => parent.getShows(),
    },
    Query: {
        shows: async () => db.show.findAll(),
        show: async (parent, args, {db}, info) => db.show.findByPk(args.id),
        venues: async () => db.venue.findAll(),
        venue: (parent, args, {db}, info) => db.venue.findByPk(args.id)
    }
};

