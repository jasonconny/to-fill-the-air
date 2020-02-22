module.exports = (db, Sequelize) => {
	const Show = db.define('show', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		date: Sequelize.DATE,
		tour: Sequelize.STRING,
		notes: Sequelize.TEXT
	});

	Show.associate = (models) => {
		Show.belongsTo(models.venue);
	};

	return Show;
};
