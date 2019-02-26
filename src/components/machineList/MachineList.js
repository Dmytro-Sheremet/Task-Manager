import React from 'react';
import Machine from './Machine';

import Machines from '../../data/Machines';

const MachineList = () => {
	console.log(Machines);
	return (
		<div className="container">
			<div class="card ">
				{Machines.map((machine, index) => (
					<Machine key={index} machine={machine} />
				))}
			</div>
		</div>
	);
};

export default MachineList;
