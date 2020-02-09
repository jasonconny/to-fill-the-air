import { gql } from 'apollo-server';
import { GraphQLDate } from 'graphql-iso-date';

export const typeDefs = gql`
	scalar Date

	type Show {
		id: ID!
		date: Date!
		venue: Venue!
		tour: String
		notes: String
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
		latitude: Int
		longitude: Int
	}
	
	type Query {
		shows: [Show]
	}
`;

export const resolvers = {
	Date: GraphQLDate
};
