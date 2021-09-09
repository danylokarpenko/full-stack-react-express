import { put, call, takeLatest } from 'redux-saga/effects';
import { getCalculatedAverageAndMedian } from 'src/API/CalculateN';

import {
	GET_CALCULATION_RESULT,
	GET_CALCULATION_RESULT_REQUEST,
	GET_CALCULATION_RESULT_SUCCESS,
	GET_CALCULATION_RESULT_FAILURE
} from './actions';

function* getCalculationResultSaga(action) {
	try {
		yield put({ type: GET_CALCULATION_RESULT_REQUEST });
		const data = yield call(getCalculatedAverageAndMedian, { number: action.payload });
		yield put({ type: GET_CALCULATION_RESULT_SUCCESS, payload: data });
	} catch (e) {
		yield put({ type: GET_CALCULATION_RESULT_FAILURE, error: e.response.data });
	}
}

function* calculateNSaga() {
	yield takeLatest(GET_CALCULATION_RESULT, getCalculationResultSaga);
}

export default calculateNSaga;
