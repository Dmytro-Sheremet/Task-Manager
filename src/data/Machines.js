const Machines = [
	{
		id: 1,
		model: "HP Indigo 3050",
		type: ["sheetfeed", "offset"],
		substrates: ["paper", "vinyl"],
		maxSubstrate: "320x450",
		operator: "",
		technitian: ""
	},
	{
		id: 2,
		model: "inca Spyder 320",
		type: ["flatbed", "inkjet", "uv"],
		substrates: "any",
		maxSubstrate: "1600x3200x30",
		operator: "",
		technitian: ""
	},
	{
		id: 3,
		model: "Epson GS6000",
		type: ["rollfeed", "inkjet", "eco-solvent"],
		substrates: ["paper", "vinyl", "banner-cloth", "flag-cloth"],
		maxSubstrate: "320x450",
		operator: "",
		technitian: ""
	}
];

export default Machines;
