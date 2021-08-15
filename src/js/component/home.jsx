import React from "react";
//import ReactDOM from "react-dom";
import BootstrapNav from "./BootstrapNav.jsx";
import BootstrapJumbtron from "./BootstrapJumbtron.jsx";
import BootstrapCards from "./BootstrapCards.jsx";

//create your first component
const Home = () => {
	return (<BootstrapNav />), (<BootstrapJumbtron />); // (<BootstrapCards />);
};
export default Home;
//ReactDOM.render(<Home />, document.querySelector("#app"));
