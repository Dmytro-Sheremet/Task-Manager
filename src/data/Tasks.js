/*
status

scheduled - заплановано
in work - в роботі
completed - завершено
canceled - відмінено
postponed - відтерміновано

*/

const Tasks = [
	{
		id: 1,
		client: "Media GROUP",
		priority: "middle",
		machine: "HP Indigo 3050",
		taskText: "4+4 CMYK - 1000 pcs A3",
		dateAdded: "2019-02-03, 10:20",
		dateDeadline: "2019-02-04, 15:00",
		status: "scheduled"
	},
	{
		id: 2,
		client: "Piper J.K.",
		priority: "middle",
		machine: "HP Indigo 3050",
		taskText: "4+0 CMYK - 3000pcs A3 + Lamination-gloss",
		dateAdded: "2019-02-03, 10:54",
		dateDeadline: "2019-02-04, 16:30",
		status: "scheduled"
	},
	{
		id: 3,
		client: "PEPE knives",
		priority: "high",
		machine: "Epson GS6000",
		taskText: "1000x1260 - 5pcs, vinyl-gloss ",
		dateAdded: "2019-02-03, 13:23",
		dateDeadline: "2019-02-04, 10:00",
		status: "scheduled"
	},
	{
		id: 4,
		client: "Media GROUP",
		priority: "low",
		machine: "HP Indigo 3050",
		taskText: "4+4 CMYK - 2000 A3",
		dateAdded: "2019-02-03, 16:10",
		dateDeadline: "2019-02-06, 10:00",
		status: "scheduled"
	},
	{
		id: 5,
		client: "Stone-Works",
		priority: "middle",
		machine: "Inca Spyder 320",
		taskText:
			"600x2200, tempered glass 10mm, CMYL +W400, primer, mirror image, preview in file folder",
		dateAdded: "2019-02-03, 10:20",
		dateDeadline: "2019-02-04, 15:00",
		status: "scheduled"
	}
];

export default Tasks;
