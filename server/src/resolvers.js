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
        song_refs: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllSongRefs(),
        song_ref: async (_, { song_ref_id }, { dataSources }) => dataSources.toFillTheAir.getSongRefById(song_ref_id),
        venues: async (_, __, { dataSources }) => dataSources.toFillTheAir.getAllVenues(),
        venue: async (_, { venue_id }, { dataSources }) => dataSources.toFillTheAir.getVenueById(venue_id)
    }
};

