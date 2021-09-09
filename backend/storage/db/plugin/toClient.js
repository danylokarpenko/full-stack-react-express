const plugin = schema => {
	schema.methods.toClient = function () {
		const doc = this.toObject({ getters: true, virtuals: true });

		delete doc.__v;
		delete doc._id;

		return doc;
	};
};

module.exports = plugin;
