const mongoose = require('mongoose');
const db = require('../storage/db');

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
	// useCreateIndex: true
};

const init = () =>
	new Promise((resolve, reject) => {
		mongoose.connect(process.env.MONGO_URL, options);

		db.once('error', err => {
			reject(err);
		});

		db.once('open', () => {
			// eslint-disable-next-line
			console.log('Connected to DB');

			resolve();
		});

		db.once('close', () => {
			// eslint-disable-next-line
			console.log('Close connected to DB');
		});
	});

module.exports = init;
