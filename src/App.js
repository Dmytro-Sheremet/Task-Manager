import React, { Component } from "react";
import MainBody from "./containers/mainBody/MainBody";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";

import Tasks from "./data/Tasks";
import Clients from "./data/Clients";
import Machines from "./data/Machines";

export default class App extends Component {
	state = {
		tasks: Tasks,
		clients: Clients,
		machines: Machines
	};

	render() {
		return (
			<div>
				<Header />
				<MainBody
					tasks={this.state.tasks}
					clients={this.state.clients}
					machines={this.state.machines}
				/>
				<Footer />
			</div>
		);
	}
}
