import React from "react";
import ReactDOM from "react-dom";
import BootstrapCards from "./BootstrapCards.jsx";
import BootstrapJumbtron from "./BootstrapJumbtron.jsx";
import BootstrapNav from "./BootstrapNav.jsx";

//create your first component
const Home = () => {
	return (<BootstrapNav />), (<BootstrapJumbtron />), (<BootstrapCards />);
};

export default Home;
ReactDOM.render(<Home />, document.querySelector("#app"));
