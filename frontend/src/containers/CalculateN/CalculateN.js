import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CalculationMenu, InputNumberForm } from './components';
import './CalculateN.scss';

const CalculateN = () => {
	const [number, setNumber] = useState(null);
	const { number: inputNumber } = useSelector(state => state.calculateN);

	return (
		<div className="container">
			{inputNumber ? (
				<CalculationMenu number={number} setNumber={setNumber} />
			) : (
				<InputNumberForm number={number} setNumber={setNumber} />
			)}
		</div>
	);
};

export default CalculateN;
