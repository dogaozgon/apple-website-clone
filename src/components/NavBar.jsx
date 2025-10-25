import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
	return (
		<header>
			<nav>
				<img src="/logo.svg" alt="Apple Logo" />
				<ul>
					{navLinks.map(({ label }) => (
						<li key={label}>
							<a href={label}>{label}</a>
						</li>
					))}
				</ul>
				<div></div>
			</nav>
		</header>
	);
};

export default NavBar;
