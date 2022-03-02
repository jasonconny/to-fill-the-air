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
        shows: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllShows(),
        show: async (parent, args, {db}, info) => db.shows.findByPk(args.id),
        song_refs: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllSongRefs(),
        venues: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllVenues(),
        venue: (parent, args, {db}, info) => db.venues.findByPk(args.id)
    }
};

