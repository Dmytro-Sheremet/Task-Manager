import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav class="navbar  navbar-expand-sm bg-secondary navbar-dark  py-0">
			<div class="container ">
				<Link to="/" className="navbar-brand">
					Production Manager
				</Link>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/tasklist" className="nav-link">
								Tasks
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/addtask" className="nav-link">
								Add Task
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/machinelist" className="nav-link">
								Machines
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/clientlist" className="nav-link">
								Clients
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
