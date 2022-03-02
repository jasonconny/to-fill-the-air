const { gql } = require('apollo-server-express');

module.exports = {
	typeDefs: gql`
		scalar Date

		type Show {
			id: ID!
			date: Date!
			tour: String
			notes: String
			venue: Venue!
		}

		type Venue {
			id: ID!
			name: String!
			address1: String
			address2: String
			city: String!
			state: String!
			zip: String
			country: String!
			latitude: Float
			longitude: Float
			shows: [Show!]!
		}

		type Query {
			shows: [Show!],
			show(id: ID!): Show,
			venues: [Venue!],
			venue(id: ID!): Venue
		}
	`
};
