import React from "react";
import TaskList from "../../components/taskList/TaskList";
import AddTask from "../../components/management/AddTask";
import MachineList from "../../components/machineList/MachineList";

const Main = props => {
	return (
		<div>
			<div className="row bg-dark">
				<div className="col">
					<AddTask props={props} />
				</div>
				<div className="col">
					<MachineList />
				</div>
				<div className="col">
					<h1>clients info placeholder</h1>
				</div>
			</div>
			<TaskList props={props} />
		</div>
	);
};
export default Main;
