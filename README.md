# To Fill The Air

Grateful Dead set lists.

- Node v18.17.0

## Client

- React 17.0.2
- TypeScript 4.5.5

### Start the client

From [./client]() `yarn start`

## Server

- GraphQL 16.3.0
- Apollo Server Express 3.6.3

The server assumes an instance of [MariaDB](https://mariadb.org/) with a copy of the database is running and the connection details are configured in [./server/.env]().

### Generate database models

From [./server]() `yarn build:models`. Only need to do this the first time you run the server or if/when the db tables change.

### Start the server

From [./server]() `yarn start`
