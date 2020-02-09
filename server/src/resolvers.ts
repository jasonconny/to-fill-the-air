const { GraphQLDate } = require('graphql-iso-date');

module.exports = {
	resolvers: {
		Date: GraphQLDate
	}
};

