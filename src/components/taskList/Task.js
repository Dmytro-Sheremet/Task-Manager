import React, { Component } from "react";

export default class Task extends Component {
	state = {};

	render() {
		const {
			id,
			client,
			priority,
			machine,
			taskText,
			dateAdded,
			status,
			dateDeadline
		} = this.props.task;
		
		return (
			<tr>
				<td>{id}</td>
				<td>{client}</td>
				<td className="font-weight-bold">{priority}</td>
				<td>{machine}</td>
				<td>{taskText}</td>
				<td>{dateAdded}</td>
				<td>
					{status}
					<i className="fas fa-sort-down" />
				</td>
				<td>{dateDeadline}</td>
			</tr>
		);
	}
}
