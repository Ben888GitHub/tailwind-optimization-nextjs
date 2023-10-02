const GroupHover = () => {
	return (
		<div className="group h-32 w-32 grid place-items-center bg-blue-400 hover:bg-purple-400">
			<div className="h-10 w-10 bg-black group-hover:bg-red-600"></div>
			<div className="h-10 w-10 bg-black group-hover:bg-blue-600"></div>
		</div>
	);
};

export default GroupHover;

// * Example Showcase: https://tailwindcss.com/ on the State variants section
