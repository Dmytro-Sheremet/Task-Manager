import React, { Component } from "react";
import MainBody from "./containers/mainBody/MainBody";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import Tasks from "./data/Tasks";

export default class App extends Component {
	state = {
		tasks: Tasks
	};

	CLICKER_TEST = value => {
		console.log(value);
	};

	render() {
		return (
			<div>
				<Header />
				<MainBody click={this.CLICKER_TEST} tasks={this.state.tasks} />
				<Footer />
			</div>
		);
	}
}
