import React from 'react';
import { useDispatch } from 'react-redux';
import { validateInputNumber } from 'shared/helpers';
import Input from '../../../../components/Input';
import * as actions from '../../actions';
import './InputNumberForm.scss';

const InputNumberForm = ({ number, setNumber }) => {
	const dispatch = useDispatch();

	function handleNumberChange(e) {
		setNumber(e.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		const isNumberValid = validateInputNumber(number);
		if (isNumberValid) {
			dispatch(actions.setNumber(Number(number)));
		}
	}

	return (
		<div className="input-number-container">
			<form onSubmit={handleSubmit}>
				<Input
					label="Input number"
					name="number"
					type="number"
					value={number}
					handleValueChange={handleNumberChange}
				/>
				<div className="form-actions">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default InputNumberForm;
