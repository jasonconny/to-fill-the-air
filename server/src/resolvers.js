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
        shows: async () => db.shows.findAll(),
        show: async (parent, args, {db}, info) => db.shows.findByPk(args.id),
        song_refs: async () => db.song_refs.findAll(),
        venues: async () => db.venues.findAll(),
        venue: (parent, args, {db}, info) => db.venues.findByPk(args.id)
    }
};

