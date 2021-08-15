import React from "react";
//import Home from "./Home.jsx";

const BootstrapNav = () => {
	return (
		<nav className="nav navbar-dark bg-dark">
			<span className="navbar-text">Start Bootstraps</span>
			<ul className="nav justify-content-end">
				<li className="nav-item active">
					<a className="nav-link" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Features
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Pricing
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default BootstrapNav;
