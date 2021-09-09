/* Hardcoded data should be changed with configurational file */
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const getErrorMessage = error => {
	if (!error.response) {
		return {
			message: error.message,
			code: 500
		};
	}

	if (error.response.data.errors && error.response.data.errors.length) {
		return {
			message: error.response.data.errors[0].message,
			code: error.response.code || error.response.status
		};
	}

	return { message: error.response.data.message, code: error.response.code || error.response.status };
};

export const request = (config, payload, headers = {}) => {
	return axios({
		method: config.method,
		url: config.url,
		data: payload,
		headers
	})
		.then(function (response) {
			return response.data;
		})
		.catch(async function (error) {
			const { message, code } = getErrorMessage(error);

			if (message !== 'Error' && code !== 429) {
				NotificationManager.error(message, code);
			}
			throw error;
		});
};
