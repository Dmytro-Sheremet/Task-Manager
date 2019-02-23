import React from "react";
import Machine from "./Machine";

import Machines from "../../data/Machines";

const MachineList = () => {
	console.log(Machines);
	return (
		<div className="my-3">
			<h6
				style={{
					color: "white",
					border: "solid white 1px",
					borderRadius: "10px",
					textAlign: "center"
				}}
			>
				machinelist{" "}
			</h6>

			<div class="card">
				{Machines.map((machine, index) => (
					<Machine dey={index} machine={machine} />
				))}
			</div>
		</div>
	);
};

export default MachineList;
