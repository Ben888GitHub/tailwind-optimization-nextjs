const BasicAnimation = () => {
	return (
		<>
			<div className="group h-32 w-32 grid place-items-center bg-blue-400 hover:bg-purple-400 transition-colors duration-300">
				<div className="h-10 w-10 bg-black group-hover:bg-red-600 transition-colors duration-300"></div>
				<div className="h-10 w-10 bg-black group-hover:bg-blue-600 transition-colors duration-300"></div>
			</div>
			<br />
			<div className="group h-32 w-32 grid place-items-center bg-blue-400 hover:bg-purple-400 transition-colors duration-300 ease-in-out delay-300">
				<div className="h-10 w-10 bg-black group-hover:bg-red-600 transition-colors duration-300 ease-in-out delay-300"></div>
				<div className="h-10 w-10 bg-black group-hover:bg-blue-600 transition-colors duration-300 ease-in-out delay-300"></div>
			</div>
			<br />
			<div className="animate-spin  text-2xl">Spin</div>
			<br />
			<div className="animate-ping  text-2xl">Ping</div>
			<br />
			<div className="animate-pulse  text-2xl">Subscribe</div>
			<br />
			<div className="animate-bounce  text-2xl">Bounce</div>
		</>
	);
};

export default BasicAnimation;
