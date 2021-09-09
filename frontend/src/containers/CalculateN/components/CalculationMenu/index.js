import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from 'shared/helpers';
import * as actions from '../../actions';

const CalculationMenu = ({ number, setNumber }) => {
	const dispatch = useDispatch();

	const { number: inputNumber, calculationResult, fetching } = useSelector(state => state.calculateN);
	const [average, median] = calculationResult;

	function handleCalculateLocally() {
		const averageAndMedian = calculate(inputNumber);
		dispatch(actions.setCalculationResult(averageAndMedian));
	}

	function handleCalculateOnServer() {
		dispatch(actions.getCalculationResult(number));
	}

	function handleResetState() {
		setNumber(null);
		dispatch(actions.resetStateToInitial());
	}

	const isCalculationNotNull = Array.isArray(calculationResult) && calculationResult.length;

	return (
		<div>
			<div>
				<p>Your number: {inputNumber}</p>
				<button onClick={handleCalculateLocally}>Calculate locally</button>
				<button onClick={handleCalculateOnServer}>Calculate on server</button>
			</div>
			<br />
			{!fetching && isCalculationNotNull && (
				<div>
					<div>
						<p>Average: {average.toFixed(2)}</p>
						<p>Median: {median}</p>
					</div>
					<div>
						<button onClick={handleResetState}>Retry</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CalculationMenu;
