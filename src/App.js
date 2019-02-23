import React, { Component } from "react";
import MainBody from "./containers/mainBody/MainBody";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainBody />
				<Footer />
			</div>
		);
	}
}
