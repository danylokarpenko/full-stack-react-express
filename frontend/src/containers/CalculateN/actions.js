export const SET_NUMBER = 'SET_NUMBER';

export function setNumber(payload) {
	return {
		type: SET_NUMBER,
		payload
	};
}

export const SET_CALCULATION_RESULT = 'SET_CALCULATION_RESULT';

export function setCalculationResult(payload) {
	return {
		type: SET_CALCULATION_RESULT,
		payload
	};
}

export const RESET_TO_INITIAL = 'RESET_TO_INITIAL';

export function resetStateToInitial(payload) {
	return {
		type: RESET_TO_INITIAL,
		payload
	};
}

export const GET_CALCULATION_RESULT = 'GET_CALCULATION_RESULT';
export const GET_CALCULATION_RESULT_REQUEST = 'GET_CALCULATION_RESULT_REQUEST';
export const GET_CALCULATION_RESULT_SUCCESS = 'GET_CALCULATION_RESULT_SUCCESS';
export const GET_CALCULATION_RESULT_FAILURE = 'GET_CALCULATION_RESULT_FAILURE';

export function getCalculationResult(payload) {
	return {
		type: GET_CALCULATION_RESULT,
		payload
	};
}
