import { useState } from 'react';
const colors = ['red', 'green', 'blue'];

const DynamicUtilities = () => {
	const [color, setColor] = useState('');

	return (
		<select
			className={`bg-${color}-400`}
			value={color}
			onChange={(e) => setColor(e.target.value)}
		>
			{/* <option value="">choose</option> */}
			{colors.map((color) => (
				<option value={color} key={color}>
					{color}
				</option>
			))}
		</select>
	);
};

export default DynamicUtilities;
