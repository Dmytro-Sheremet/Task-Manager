import React from 'react';
import Client from './Client';
import { Consumer } from '../../context';

const ClientList = () => {
	return (
		<Consumer>
			{value => {
				const { clients } = value;
				return (
					<div className='container'>
						<div class='card'>
							{clients.map((client, index) => (
								<Client key={index} client={client} />
							))}
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default ClientList;
