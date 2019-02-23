import React from "react";
import TaskList from "../../components/taskList/TaskList";
import AddTask from "../../components/management/AddTask";
import MachineList from "../../components/machineList/MachineList";
import ClientList from "../../components/clientList/ClientList";

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
					<ClientList />
				</div>
			</div>
			<TaskList />
		</div>
	);
};
export default Main;
