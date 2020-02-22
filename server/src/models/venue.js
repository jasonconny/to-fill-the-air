module.exports = (sequelize, DataTypes) => {
	const Venue = sequelize.define('venue', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		name: DataTypes.STRING,
		address1: DataTypes.STRING,
		address2: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zip: DataTypes.STRING,
		country: DataTypes.STRING,
		latitude: DataTypes.FLOAT,
		longitude: DataTypes.FLOAT
	});

	Venue.associate = (models) => {
		Venue.hasMany(models.show);
	};

	return Venue;
};
