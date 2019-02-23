import React, { Component } from "react";

export default class Client extends Component {
	state = {
		showClientInfo: false
	};

	toggleShowClientInfo = () => {
		this.setState({ showClientInfo: !this.state.showClientInfo });
	};

	render() {
		const { id, name, phone, dateJoin } = this.props.client;

		const clientInfo = (
			<ul className="list-group">
				<li className="list-group-item p-1 m-1">{` Name - ${name}`}</li>
				<li className="list-group-item p-1 m-1">{` Phone Number - ${phone}`}</li>
				<li className="list-group-item p-1 m-1">{` Date Join - ${dateJoin}`}</li>
			</ul>
		);

		return (
			<div className="card m-1">
				<div className="card-body p-1 mx-3">
					<div className="card-title ">
						{name}{" "}
						<i
							className="fas  fa-sort-down "
							onClick={this.toggleShowClientInfo}
						/>
					</div>
					{this.state.showClientInfo && clientInfo}
				</div>
			</div>
		);
	}
}
