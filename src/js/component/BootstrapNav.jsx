import React from "react";
//import Home from "./Home.jsx";

const BootstrapNav = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<span className="navbar-brand mb-0 h1">Navbar</span>
			</div>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Other
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default BootstrapNav;
