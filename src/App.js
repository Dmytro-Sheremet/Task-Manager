import React, { Component } from "react";
import MainBody from "./containers/mainBody/MainBody";
import Tasks from "./data/Tasks";

export default class App extends Component {
	state = {
		tasks: Tasks
	};

	render() {
		return (
			<div>
				<MainBody />
			</div>
		);
	}
}
