import Sequelize from 'sequelize';

let db = {}

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize('toFillTheAir', DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
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

try {
    await sequelize.authenticate();
    console.log('connected to db');
} catch (error) {
    console.error('unable to connect to db', error);
}

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
