import React from "react";
import Tasks from "../../data/Tasks";
import Task from "./Task";
const TaskList = () => {
	return (
		<table className="table table-dark bg-secondary">
			{/*		<thead>
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
		</thead>*/}

			<tbody>
				{Tasks.map((task, index) => (
					<Task key={index} task={task} />
				))}
			</tbody>
		</table>
	);
};

export default TaskList;
