function feed(parent, args, context, info) {
	const { filter, first, skip } = args; // destructure input arguments
	const where = filter
		? { OR: [{ url_contains: filter }, { description_contains: filter }] }
		: {};

	return context.db.query.links({ first, skip, where }, info)
}

module.exports = {
	feed,
};
