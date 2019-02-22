import React from "react";
const AddTask = props => {
	console.log(props);

	const clients = props.props.clients.map((client, index) => {
		return <option key={index}>{client.name}</option>;
	});

	const machines = props.props.machines.map((machine, index) => {
		return <option key={index}>{machine.model}</option>;
	});

	return (
		<div>
			<select className="form-control form-control-lg ">{clients}</select>
			<select className="form-control form-control-lg ">{machines}</select>
		</div>
	);
};
export default AddTask;
