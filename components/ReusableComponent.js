const ReusableComponent = () => {
	return (
		<>
			<ReusableButton
				value="Cool Button"
				className="bg-blue-600 px-3 py-4 text-white rounded-md"
			/>
			<br />
			<ReusableButton
				value="Disabled Button"
				disabled
				className="bg-red-600 px-3 py-4 text-white rounded-md"
			/>
		</>
	);
};

export default ReusableComponent;

const ReusableButton = ({ value, ...props }) => {
	return <button {...props}>{value}</button>;
};
