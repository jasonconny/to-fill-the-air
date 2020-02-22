module.exports = (db, Sequelize) => {
	const Venue = db.define('venue', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		name: Sequelize.STRING,
		address1: Sequelize.STRING,
		address2: Sequelize.STRING,
		city: Sequelize.STRING,
		state: Sequelize.STRING,
		zip: Sequelize.STRING,
		country: Sequelize.STRING,
		latitude: Sequelize.FLOAT,
		longitude: Sequelize.FLOAT
	});

	Venue.associate = (models) => {
		Venue.hasMany(models.show);
	};

	return Venue;
};
