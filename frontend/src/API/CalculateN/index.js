import { request } from '../request';
import { getConfigParams } from '../configParams';

export function getCalculatedAverageAndMedian(options) {
	const url = '/calculation';
	const config = getConfigParams({
		url,
		options,
		method: 'GET'
	});
	return request(config);
}
