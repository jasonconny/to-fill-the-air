import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import ToFillTheAirAPI from './datasources/toFillTheAir';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

async function startApolloServer() {
    const { DB_NAME, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;
    const knexConfig = {
        client: 'mysql2',
        connection: {
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_NAME
        },
        debug: true
    };
    const app = express();
    const httpServer = http.createServer(app);

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () =>({ toFillTheAir: new ToFillTheAirAPI(knexConfig) }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();

    server.applyMiddleware({ app });


    httpServer.listen({ port: 4000 }, () =>
        console.log(`server ready at http://localhost:4000/graphql`)
    );
}

startApolloServer().then(() => console.log('server starting'));
