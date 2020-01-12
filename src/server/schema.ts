import { gql } from 'apollo-server';
import {GraphQLDate} from "graphql-iso-date";
// import { GraphQLDate } from 'graphql-iso-date';

export const typeDefs = gql`
	scalar Date

	type Show {
		id: ID!
		date: Date
		venueId: String
		tour: String
		notes: String
	}
`;

export const resolvers = {
	Date: GraphQLDate
};
