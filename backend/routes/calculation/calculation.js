const express = require('express');
const createHttpError = require('http-errors');
const NodeCache = require('node-cache');
const { calculate } = require('shared/helpers');
const CalculationsModel = require('../../models/calculations');
const validateInputNumberMiddleware = require('./middlewares/validateInputNumber.middleware');

const calculationCache = new NodeCache();

const router = express.Router();

router.get('/cache', validateInputNumberMiddleware, (req, res) => {
	try {
		const { number } = req.query;
		if (calculationCache.has(number)) {
			const cachedAverageAndMedian = calculationCache.get(number);
			return res.status(200).json(cachedAverageAndMedian);
		} else {
			const averageAndMedian = calculate(number);

			calculationCache.set(number, averageAndMedian);

			return res.status(200).json(averageAndMedian);
		}
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
});

router.delete('/cache', async function (req, res) {
	try {
		const { number } = req.query;

		await calculationCache.del(number);

		return res.status(200).json(true);
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
});

router.get('/', validateInputNumberMiddleware, function (req, res) {
	try {
		const { number } = req.query;
		const averageAndMedian = calculate(number);

		return res.status(200).json(averageAndMedian);
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
});

router.get('/calculate-and-save', validateInputNumberMiddleware, async function (req, res) {
	try {
		const { number } = req.query;
		const averageAndMedian = calculate(number);
		const [average, median] = averageAndMedian;

		const calculation = await CalculationsModel.create({ average, median });

		return res.status(200).json(calculation);
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
});

router.delete('/', async function (req, res) {
	try {
		const { id } = req.query;

		await CalculationsModel.deleteOne({ _id: id });

		return res.status(200).json(true);
	} catch (e) {
		const error = createHttpError(500, e.message);
		return res.status(500).json(error);
	}
});

module.exports = router;
