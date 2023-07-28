# To Fill The Air

Grateful Dead set lists.

- Node v18.17.0

## Client

- React 18.2.0
- TypeScript 5.1.6

### Start the client

From [./client]() `npm start`

## Server

- GraphQL 16.7.1
- Apollo Server 4.8.1

The server assumes an instance of [MariaDB](https://mariadb.org/) with a copy of the database is running and the connection details are configured in [./server/.env]().

### Generate database models

From [./server]() `npm run build:models`. Only need to do this the first time you run the server or if/when the db tables change.

### Start the server

From [./server]() `npm start`
