import React from 'react';
import Task from './Task';
import { Consumer } from '../../context';
const TaskList = () => {
	return (
		<Consumer>
			{value => {
				const { tasks } = value;
				return (
					<table className='table table-dark bg-secondary table-hover table-sm '>
						{/* <thead>
							<tr>
								<th scope='col'>First</th>
								<th scope='col'>Last</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
								<th scope='col'>Handle</th>
							</tr>
						</thead> */}
						<tbody>
							{tasks.map((task, index) => (
								<Task key={index} task={task} />
							))}
						</tbody>
					</table>
				);
			}}
		</Consumer>
	);
};

export default TaskList;

/*

*/
