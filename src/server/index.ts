import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';

const server = new ApolloServer({ typeDefs, resolvers });
