import React from "react";
import BootstrapNav from "./BootstrapNav.jsx";
import BootstrapJumbtron from "./BootstrapJumbtron.jsx";
import BootstrapCards from "./BootstrapCards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<BootstrapNav />,
			<BootstrapJumbtron />,
			<BootstrapCards />
		</div>
	); 
};
export default Home;
