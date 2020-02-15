const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const db = {
	sequelize: undefined,
	Sequelize: undefined
};

const sequelize = new Sequelize('toFillTheAir', 'jasonconny', null, {
	port: '3307',
	host: '192.168.1.64',
	dialect: 'mariadb'
});

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

testConnection();

fs
	.readdirSync(__dirname)
	.filter((file: string) => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
	})
	.forEach((file: any) => {
		const model = sequelize['import'](path.join(__dirname, file));
		// @ts-ignore
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	console.log(modelName);
	// // @ts-ignore
	// if (db[modelName].associate) {
	// 	// @ts-ignore
	// 	db[modelName].associate(db);
	// }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
