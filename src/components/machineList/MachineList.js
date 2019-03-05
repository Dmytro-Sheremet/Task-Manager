import React from 'react';
import Machine from './Machine';
import { Consumer } from '../../context';

const MachineList = () => {
	return (
		<Consumer>
			{value => {
				const { machines } = value;
				return (
					<div className='container'>
						<div class='card '>
							{machines.map((machine, index) => (
								<Machine key={index} machine={machine} />
							))}
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default MachineList;
