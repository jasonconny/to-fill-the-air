require('dotenv').config();
const path = require('path');
const SequelizeAuto = require('sequelize-auto');

const { DB_NAME, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;

const auto = new SequelizeAuto(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mariadb',
        directory: path.resolve(__dirname, 'models')
    }
)

auto.run().then(data => {
    console.log(data.tables);
});
