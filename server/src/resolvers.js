import { paginate } from './utils';

export const resolvers = {
    Set: {
      songs: async (set, __, { dataSources }) => {
          const songs = await dataSources.toFillTheAir.getSongsBySetId(set.set_id);
          return songs.map(async song => {
              const songRef = await dataSources.toFillTheAir.getSongRefById(song.song_ref_id);
              return Object.assign({}, songRef, song);
          });
      }
    },
    Show: {
        sets: async (show, __, { dataSources }) => await dataSources.toFillTheAir.getSetsByShowId(show.show_id),
        venue: async (show, __, { dataSources }) => await dataSources.toFillTheAir.getVenueById(show.venue_id),
    },
    Venue: {
        shows: async (venue, __, { dataSources }) => await dataSources.toFillTheAir.getShowsFromVenue(venue.venue_id),
    },
    Query: {
        artist: async (_, { artist_id }, { dataSources }) => await dataSources.discogsAPI.getArtist(artist_id),
        releases: async (_, { artist_id }, { dataSources }) => await dataSources.discogsAPI.getArtistReleases(artist_id),
        sets: async (_, { show_id }, { dataSources }) => await dataSources.toFillTheAir.getSetsByShowId(show_id),
        shows: async (_, { year }, { dataSources }) => await dataSources.toFillTheAir.getShows(year),
        show: async (_, { show_id }, { dataSources }) => await dataSources.toFillTheAir.getShowById(show_id),
        showByDate: async (_, { date }, { dataSources }) => await dataSources.toFillTheAir.getShowByDate(date),
        songRefs: async (_, __, { dataSources }) => await dataSources.toFillTheAir.getAllSongRefs(),
        songRefsWithPagination: async (_, { currentPage = 1, maxPagesToShow = 10, pageSize = 20 }, { dataSources }) => {
            const allSongRefs = await dataSources.toFillTheAir.getAllSongRefs();
            const pagination = paginate({
                currentPage,
                maxPagesToShow,
                pageSize,
                totalItems: allSongRefs.length
            });
            return {
                pagination,
                song_refs: allSongRefs.filter((venue, index) => index >= pagination.startIndex && index <= pagination.endIndex)
            };
        },
        songRef: async (_, { song_ref_id }, { dataSources }) => await dataSources.toFillTheAir.getSongRefById(song_ref_id),
        venues: async (_, __, { dataSources }) => await dataSources.toFillTheAir.getAllVenues(),
        venuesWithPagination: async (_, { currentPage = 1, maxPagesToShow = 10, pageSize = 20 }, { dataSources }) => {
            const allVenues = await dataSources.toFillTheAir.getAllVenues();
            const pagination = paginate({
                currentPage,
                maxPagesToShow,
                pageSize,
                totalItems: allVenues.length
            });
            return {
                pagination,
                venues: allVenues.filter((venue, index) => index >= pagination.startIndex && index <= pagination.endIndex)
            }
        },
        venue: async (_, { venue_id }, { dataSources }) => await dataSources.toFillTheAir.getVenueById(venue_id),
        venueByName: async (_, { name }, { dataSources }) => await dataSources.toFillTheAir.getVenueByName(name)
    }
};

