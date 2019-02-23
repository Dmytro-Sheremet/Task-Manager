import React, { Component } from "react";

export default class Machine extends Component {
	state = {
		showMachineInfo: false
	};

	toggleShowMachineInfo = () => {
		this.setState({ showMachineInfo: !this.state.showMachineInfo });
	};

	render() {
		const {
			id,
			model,
			type,
			substrates,
			operator,
			technitian
		} = this.props.machine;

		const machineInfo = (
			<ul className="list-group">
				<li className="list-group-item p-1 m-1">{` Type - ${type}`}</li>
				<li className="list-group-item p-1 m-1">{` Suitable Substrates - ${substrates}`}</li>
				<li className="list-group-item p-1 m-1">{` Operator - ${operator}`}</li>
				<li className="list-group-item p-1 m-1">{` Service Engineer - ${technitian}`}</li>
			</ul>
		);

		return (
			<div className="card m-1">
				<div className="card-body p-1 mx-3">
					<div className="card-title ">
						{model}{" "}
						<i
							className="fas  fa-sort-down "
							onClick={this.toggleShowMachineInfo}
						/>
					</div>
					{this.state.showMachineInfo && machineInfo}
				</div>
			</div>
		);
	}
}
