import express from 'express'
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const server = new ApolloServer({
    modules: [
        require('./GraphQL/shows'),
        require('./GraphQL/venues')
    ]
});

server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('hello world'));

app.listen({ port: 5000 }, () =>
    console.log('server ready at http://localhost:5000')
)
