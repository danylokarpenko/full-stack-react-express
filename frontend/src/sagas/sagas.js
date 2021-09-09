import { fork, all } from 'redux-saga/effects';
import calculateNSaga from '../containers/CalculateN/calculateNSaga';

export default function* root() {
	yield all([fork(calculateNSaga)]);
}
