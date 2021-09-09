import { combineReducers } from 'redux';
import calculateNReducer from 'src/containers/CalculateN/calculateNReducer';

const rootReducer = combineReducers({
	calculateN: calculateNReducer
});

export default rootReducer;
