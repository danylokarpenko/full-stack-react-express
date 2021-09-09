const sum = require('lodash.sum');

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getAverage(numbers) {
	return sum(numbers) / numbers.length;
}

const getMedian = arr => {
	const mid = Math.floor(arr.length / 2),
		nums = [...arr].sort((a, b) => a - b);
	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const calculate = function (number) {
	const min = 0;
	const max = 10 ** 5 + 1;

	// random array of numbers 0 < N < 10^5
	const randomNumbers = Array.from({ length: number }, () => getRandomNumber(min, max));

	const average = getAverage(randomNumbers);
	const median = getMedian(randomNumbers);

	return [average, median];
};

module.exports = calculate;
