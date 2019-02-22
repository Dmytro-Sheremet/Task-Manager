import React from "react";

const TaskList = props => {
	const tasks = props.props.tasks.map((task, index) => {
		return (
			<tr key={index}>
				<td>{task.id}</td>
				<td>{task.client}</td>
				<td>{task.priority}</td>
				<td>{task.machine}</td>
				<td>{task.taskText}</td>
				<td>{task.dateAdded}</td>
				<td>{task.status}</td>
				<td>{task.dateDeadline}</td>
			</tr>
		);
	});
	// console.log(props);

	return (
		<table className="table table-dark">
			{/* <thead>
				<tr>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
					<th scope="col">Handle</th>
					<th scope="col">Handle</th>
					<th scope="col">Handle</th>
					<th scope="col">Handle</th>
					<th scope="col">Handle</th>
				</tr>
			</thead> */}

			<tbody>{tasks}</tbody>
		</table>
	);
};
export default TaskList;
