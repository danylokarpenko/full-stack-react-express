import {
	SET_NUMBER,
	SET_CALCULATION_RESULT,
	RESET_TO_INITIAL,
	GET_CALCULATION_RESULT_SUCCESS,
	GET_CALCULATION_RESULT_REQUEST,
	GET_CALCULATION_RESULT_FAILURE
} from './actions';

const initialState = {
	number: null,
	calculationResult: [],
	fetching: false
};

export default function calculateN(state = initialState, action) {
	switch (action.type) {
		case SET_NUMBER: {
			return {
				...state,
				number: action.payload
			};
		}

		case GET_CALCULATION_RESULT_REQUEST:
			return {
				...state,
				fetching: true
			};
		case GET_CALCULATION_RESULT_SUCCESS:
		case SET_CALCULATION_RESULT:
			return {
				...state,
				calculationResult: action.payload,
				fetching: false
			};
		case GET_CALCULATION_RESULT_FAILURE:
			return {
				...state,
				fetching: false
			};

		case RESET_TO_INITIAL: {
			return {
				...initialState
			};
		}
		default: {
			return state;
		}
	}
}
