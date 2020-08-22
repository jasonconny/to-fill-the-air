module.exports = (sequelize, DataTypes) => {
	const Show = sequelize.define('show', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		date: DataTypes.DATE,
		tour: DataTypes.STRING,
		notes: DataTypes.TEXT
	});

	Show.associate = (models) => {
		Show.belongsTo(models.venue);
	};

	return Show;
};
