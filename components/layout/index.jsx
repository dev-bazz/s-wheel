import NavBar from "../navBar";

const LayOut = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default LayOut;
