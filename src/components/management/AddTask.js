import React from "react";
const AddTask = props => {
	return (
		<div className="container my-3">
			<h6
				style={{
					color: "white",
					border: "solid white 1px",
					borderRadius: "10px",
					textAlign: "center"
				}}
			>
				Add Task{" "}
			</h6>
			<div className="card card-body">
				<form>
					<div className="form-group">
						<label htmlFor="clientSelect">select client</label>
						<input
							type="text"
							className="form-control"
							id="clientSelect"
							placeholder="client"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="clientSelect">select machine</label>
						<input
							type="text"
							className="form-control"
							id="machineSelect"
							placeholder="machine"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="taskText">add tasks</label>
						<textarea
							className="form-control"
							id="taskText"
							rows="3"
							placeholder="addd description to task"
						/>
					</div>

					<div>
						<p>select priority</p>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								low
							</label>
						</div>

						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								middle
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio3"
								value="option3"
							/>
							<label className="form-check-label" htmlFor="inlineRadio3">
								high
								{/* (disabled) */}
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-secondary mt-3">
						Add Task
					</button>
				</form>
			</div>
		</div>
	);
};
export default AddTask;
