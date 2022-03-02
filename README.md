# To Fill The Air

Grateful Dead set lists.

- Node v16.13.2

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

From [./server]() `yarn build:models`

### Start the server

From [./server]() `yarn start`
