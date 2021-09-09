const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema(
	{
		average: {
			type: Schema.Types.Number,
			unique: true
		},
		median: {
			type: Schema.Types.Number
		}
	},
	{ timestamps: true }
);

const model = mongoose.model('calculations', generalSchema);

module.exports = model;
