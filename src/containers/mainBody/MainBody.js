import React from "react";
import TaskList from "../../components/taskList/TaskList";
import AddTask from "../../components/management/AddTask";

const Main = props => {
	return (
		<div>
			<hr />
			<AddTask props={props} />
			<hr />
			<TaskList props={props} />
		</div>
	);
};
export default Main;
