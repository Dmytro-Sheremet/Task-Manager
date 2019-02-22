import React from "react";
import TaskList from "../../components/taskList/TaskList";

const Main = props => {
	return (
		<div>
			<TaskList props={props} />
		</div>
	);
};
export default Main;
