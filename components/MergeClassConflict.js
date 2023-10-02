import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const MergeClassConflict = () => {
	return <Button className="bg-green-500" />;
};

export default MergeClassConflict;

const Button = ({ className }) => {
	const [pending, setPending] = useState(false);
	return (
		<>
			<button
				className={twMerge(
					'bg-blue-500 text-white py-2 px-4 rounded',
					className,
					pending && 'bg-gray-500'
				)}
			>
				Submit
			</button>

			<br />
			<button
				className={`${
					pending ? 'bg-gray-500' : 'bg-blue-500'
				} text-white py-2 px-4 rounded`}
			>
				Submit 2
			</button>
			<br />

			<button
				onClick={() => setPending(!pending)}
				className="bg-black text-white py-2 px-4 rounded"
			>
				Set Pending
			</button>
		</>
	);
};
