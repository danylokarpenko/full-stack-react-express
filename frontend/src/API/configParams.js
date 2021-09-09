import _ from 'lodash';

const { hostname, origin } = window.location;
const LOCAL_API_ROUTE = 'http://localhost:3030/api';
const PROD_API_ROUTE = origin + '/api';

const host = hostname === 'localhost' ? LOCAL_API_ROUTE : PROD_API_ROUTE;

const getBaseUrl = route => {
	return route.indexOf('http') !== -1 ? route : `${host}${route}`;
};

export const getConfigParams = ({ url, options, method, skipAuth, addUser, file }) => {
	const config = {
		method,
		skipAuth,
		file,
		addUser
	};

	config.url = getBaseUrl(url);

	if (!options) {
		return config;
	}

	const optionStrings = _.flatMap(options, (value, key) => {
		if (Array.isArray(value)) {
			return _.map(value, item => `${key}[]=${encodeURIComponent(item)}`);
		} else {
			return `${key}=${encodeURIComponent(value)}`;
		}
	});

	config.url += `?${optionStrings.join('&')}`;

	return config;
};
