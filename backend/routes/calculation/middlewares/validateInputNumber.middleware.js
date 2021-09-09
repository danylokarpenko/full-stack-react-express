const createHttpError = require('http-errors');
const { validateInputNumber } = require('shared/helpers');

module.exports = (req, res, next) => {
	try {
		const { number } = req.query;
		const isValid = validateInputNumber(number);

		if (!isValid) {
			const error = createHttpError(400, 'Input number is not valid');
			return res.status(400).json(error);
		}
		next();
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
};
