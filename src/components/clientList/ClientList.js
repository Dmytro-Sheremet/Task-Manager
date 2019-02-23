import React from "react";
import Clients from "../../data/Clients";
import Client from "./Client";

const ClientList = () => {
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
				Clientlist{" "}
			</h6>

			<div class="card">
				{Clients.map((client, index) => (
					<Client key={index} client={client} />
				))}
			</div>
		</div>
	);
};

export default ClientList