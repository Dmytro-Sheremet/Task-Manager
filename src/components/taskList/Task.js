import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class Task extends Component {
	state = {
		showTask: false
	};

	toggleShowTask = () => {
		this.setState({ showTask: !this.state.showTask });
	};

	onDeleteClick = (id, dispatch) => {
		dispatch({
			type: 'DELETE_TASK',
			payload: id
		});
	};

	render() {
		const {
			id,
			client,
			priority,
			machine,
			taskText,
			dateAdded,
			status,
			dateDeadline
		} = this.props.task;

		const fullInfo = (
			<tr>
				<td colSpan='10' className=''>
					<div className='card bg-secondary container'>
						<div className='card-header'>
							<div className='float-left'>
								<h1>{client}</h1> on <h5>{machine}</h5>
							</div>
							<div className='float-right'>
								<p>{dateAdded}</p>

								<div class='dropdown'>
									<button
										class='btn btn-lg btn-secondary dropdown-toggle'
										type='button'
										id='dropdownMenuButton'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										{status}
									</button>
									<div
										class='dropdown-menu'
										aria-labelledby='dropdownMenuButton'
									>
										<h5 class='dropdown-item' href='#'>
											Action1
										</h5>
										<h5 class='dropdown-item' href='#'>
											Action2
										</h5>
										<h5 class='dropdown-item' href='#'>
											Action3
										</h5>
										<h5 class='dropdown-item' href='#'>
											Action4
										</h5>
										<h5 class='dropdown-item' href='#'>
											Action5
										</h5>
									</div>
								</div>
								<p>{dateDeadline}</p>
							</div>
						</div>
						<div className='card-body'>
							<h5 className='card-title'>Specification</h5>
							<p className='card-text'>{taskText}</p>
							<div className='float-right'>
								<button
									onClick={this.toggleShowTask}
									type='button'
									className='btn btn-light float-right'
								>
									Close
								</button>
							</div>
						</div>
						<div className='card-footer text-muted'>2 days ago</div>
					</div>
				</td>
			</tr>
		);

		const shortInfo = (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<tr onClick={this.toggleShowTask}>
							<td>{id}</td>
							<td>{client}</td>
							<td className='font-weight-bold'>{priority}</td>
							<td>{machine}</td>
							<td>{taskText}</td>
							<td>{dateAdded}</td>
							<td>
								{status}
								<i
									className='fas fa-trash'
									style={{ cursor: 'pointer' }}
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
								/>
							</td>
							<td>{dateDeadline}</td>
						</tr>
					);
				}}
			</Consumer>
		);

		return <>{this.state.showTask ? fullInfo : shortInfo}</>;
	}
}
