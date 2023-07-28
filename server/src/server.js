import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { DiscogsAPI } from './datasources/discogs';
import { ToFillTheAirAPI } from './datasources/toFillTheAir';
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
        }
    };

    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();
    app.use(
        '/graphql',
        cors(),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        expressMiddleware(server, {
            context: async ({ req }) => {
                const token = req.headers.token
                return {
                    dataSources: {
                        discogsAPI: new DiscogsAPI(),
                        toFillTheAir: new ToFillTheAirAPI(knexConfig)
                    },
                    token
                }
            }
        })
    );

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

startApolloServer().then(() => console.log('server starting'));
