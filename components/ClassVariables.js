const variants = {
	base: 'px-5 py-2.5 rounded-md bg-green-700 text-white text-xl',
	error: 'px-5 py-2.5 rounded-md bg-red-700 text-white text-xl'
};

const ClassVariables = () => {
	return (
		<div>
			<p className={variants.base}>Base</p>
			<br />
			<p className={variants.error}>Error</p>
		</div>
	);
};

export default ClassVariables;
