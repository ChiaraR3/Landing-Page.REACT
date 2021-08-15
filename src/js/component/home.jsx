import React from "react";
import BootstrapNav from "./BootstrapNav.jsx";
import BootstrapJumbtron from "./BootstrapJumbtron.jsx";
import BootstrapCards from "./BootstrapCards.jsx";
import BootstrapFooter from "./BootstrapFooter.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<BootstrapNav />,
			<BootstrapJumbtron />,
			<BootstrapCards />,
			<BootstrapFooter />,
		</div>
	);
};
export default Home;
