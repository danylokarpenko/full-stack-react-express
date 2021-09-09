import React from 'react';
import './Input.scss';

const CalculateN = ({ handleValueChange, value, name, type, label }) => {
	return (
		<div className="input-container">
			{label && <label>{label}:</label>}
			<input name={name} type={type || 'text'} value={value} onChange={handleValueChange} />
		</div>
	);
};

export default CalculateN;
