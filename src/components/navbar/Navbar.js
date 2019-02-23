import React from "react";

export default function Navbar() {
	return (
		<nav class="navbar  navbar-expand-sm bg-secondary navbar-dark  py-0">
			<div class="container ">
				<a href="/" className="navbar-brand">
					Production Manager
				</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="/" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
								Add Task
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
								Tasks
							</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link">
								Help
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
