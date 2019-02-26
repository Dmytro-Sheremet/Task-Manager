import React from 'react';
import Clients from '../../data/Clients';
import Client from './Client';

const ClientList = () => {
	return (
		<div className="container">
			<div class="card">
				{Clients.map((client, index) => (
					<Client key={index} client={client} />
				))}
			</div>
		</div>
	);
};

export default ClientList;
