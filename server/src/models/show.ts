module.exports = (db: any, Sequelize: { STRING: any; DATE: any; TEXT: any; }) => {
	const Show = db.define('show', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		date: Sequelize.DATE,
		tour: Sequelize.STRING,
		notes: Sequelize.TEXT
	});

	Show.associate = (models: { venue: any; }) => {
		Show.belongsTo(models.venue);
	};

	return Show;
};
