function post(parent, args, context, info) {
	const {url, description} = args;
	return context.db.mutation.createLink({data: {url, description}}, info)
}

module.exports = {
	post,
};
