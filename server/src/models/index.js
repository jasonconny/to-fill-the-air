require('dotenv').config();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('toFillTheAir', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	dialect: 'mariadb',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	// dialectOptions: {
	// 	socketPath: "/run/mysqld/mysqld10.sock"
	// }
});

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
