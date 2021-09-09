import _ from 'lodash';

const ActionTypeToReducerMap = {
	USER_LOGIN: 'login'
};

const initialState = {
	// 'xxxx': {
	//   fetching: false,
	//   fetched: false,
	//   error: null
	// }
};

_.values(ActionTypeToReducerMap).forEach(prop => {
	initialState[prop] = {
		fetching: false,
		fetched: false,
		error: null
	};
});

function reducer(state = initialState, action = {}) {
	const type = action.type;

	if (type === 'REQUEST_RESET') {
		return {
			...state,
			[action.name]: {
				fetching: false,
				fetched: false,
				error: null
			}
		};
	}

	if (type.length < 9) {
		return state;
	}

	const name = type.substr(0, type.length - 8);
	const ext = type.substr(type.length - 7);
	const reducer = ActionTypeToReducerMap[name];

	if (!reducer) {
		return state;
	}

	if (ext === 'REQUEST') {
		return {
			...state,
			[reducer]: {
				...state[reducer],
				fetching: true,
				fetched: false,
				error: null
			}
		};
	}

	if (ext === 'SUCCESS') {
		return {
			...state,
			[reducer]: {
				...state[reducer],
				fetching: false,
				fetched: true,
				error: null
			}
		};
	}

	if (ext === 'FAILURE') {
		if (!action.error) {
			action.error = {
				message: action.message
			};
		}

		if (!action.error.message) {
			if (action.error.data) {
				if (action.error.data.message) {
					action.error.message = action.error.data.message;
				}
			}
		}

		return {
			...state,
			[reducer]: {
				...state[reducer],
				fetching: false,
				fetched: true,
				error: { ...action.error }
			}
		};
	}

	return state;
}

export default reducer;
