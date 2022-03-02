const Sequelize = require('sequelize');

let db = {}

const sequelize = new Sequelize('to-fill-the-air', 'graphql', '12345', {
    host: 'localhost',
    port: '8080',
    dialect: 'mariadb',
    define:{
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

let models = [
    require('./models/show'),
    require('./models/venue')
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
