const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();

    server.applyMiddleware({ app });


    httpServer.listen({ port: 4000 }, () =>
        console.log(`server ready at http://localhost:4000/graphql`)
    );
}

startApolloServer().then(() => console.log('server starting'));
