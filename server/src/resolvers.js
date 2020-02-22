
const { GraphQLDate } = require('graphql-iso-date');

module.exports = {
	resolvers: {
		Date: GraphQLDate,
		Show: {
			venue: (parent, args, context, info) => parent.getVenue(),
},
		Venue: {
			shows: (parent, args, context, info) => parent.getShows(),
		},
		Query: {
			shows: (parent, args, {db}, info) => db.show.findAll(),
			venues: (parent, args, {db}, info) => db.venue.findAll(),
			show: (parent, args, {db}, info) => db.show.findByPk(id),
			venue: (parent, args, {db}, info) => db.venue.findByPk(id)
		},

	}
};

