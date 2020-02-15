const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const tftadb = require('./models');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: { tftadb }
});

// @ts-ignore
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
