import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

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
