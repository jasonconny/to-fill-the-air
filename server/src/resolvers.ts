
const { GraphQLDate } = require('graphql-iso-date');

module.exports = {
	resolvers: {
		Date: GraphQLDate,
		Show: {
			venue: (parent: { getVenue: () => any; }, args: any, context: any, info: any) => parent.getVenue(),
},
		Venue: {
			shows: (parent: { getShows: () => any; }, args: any, context: any, info: any) => parent.getShows(),
		},
		Query: {
			shows: (parent: any, args: any, {db}: any, info: any) => db.show.findAll(),
			venues: (parent: any, args: any, {db}: any, info: any) => db.venue.findAll(),
			show: (parent: any, {id}: any, {db}: any, info: any) => db.show.findByPk(id),
			venue: (parent: any, {id}: any, {db}: any, info: any) => db.venue.findByPk(id)
		},

	}
};

