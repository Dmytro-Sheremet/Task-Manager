import React, { Component } from "react";
import MainBody from "./containers/mainBody/MainBody";
import Tasks from "./data/Tasks";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";

export default class App extends Component {
	state = {
		tasks: Tasks
	};

	render() {
		return (
			<div>
				<Header />
				<MainBody tasks={this.state.tasks} />
				<Footer />
			</div>
		);
	}
}
