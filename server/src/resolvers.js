import { paginate } from './utils';

export const resolvers = {
    Show: {
        venue: (show, __, { dataSources }) => dataSources.toFillTheAir.getVenueById(show.venue_id),
    },
    Venue: {
        shows: (venue, __, { dataSources }) => dataSources.toFillTheAir.getShowsFromVenue(venue.venue_id),
    },
    Query: {
        shows: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllShows(),
        show: async (_, { show_id }, { dataSources }) => dataSources.toFillTheAir.getShowById(show_id),
        songRefs: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllSongRefs(),
        songRefsWithPagination: async (_, { currentPage = 1, maxPages = 10, pageSize = 20 }, { dataSources }) => {
            const song_refs = await dataSources.toFillTheAir.getAllSongRefs();
            const pagination = paginate({
                currentPage,
                maxPages,
                pageSize,
                totalItems: song_refs.length
            });
            return {
                pagination,
                song_refs
            };
        },
        songRef: async (_, { song_ref_id }, { dataSources }) => dataSources.toFillTheAir.getSongRefById(song_ref_id),
        venues: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllVenues(),
        venue: async (_, { venue_id }, { dataSources }) => dataSources.toFillTheAir.getVenueById(venue_id)
    }
};

