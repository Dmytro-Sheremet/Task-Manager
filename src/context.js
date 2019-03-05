import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		tasks: [
			{
				id: 1,
				client: 'Media GROUP',
				priority: 'middle',
				machine: 'HP Indigo 3050',
				taskText: '4+4 CMYK - 1000 pcs A3',
				dateAdded: '2019-02-03, 10:20',
				dateDeadline: '2019-02-04, 15:00',
				status: 'scheduled'
			},
			{
				id: 2,
				client: 'Piper J.K.',
				priority: 'middle',
				machine: 'HP Indigo 3050',
				taskText: '4+0 CMYK - 3000pcs A3 + Lamination-gloss',
				dateAdded: '2019-02-03, 10:54',
				dateDeadline: '2019-02-04, 16:30',
				status: 'scheduled'
			},
			{
				id: 3,
				client: 'PEPE knives',
				priority: 'high',
				machine: 'Epson GS6000',
				taskText: '1000x1260 - 5pcs, vinyl-gloss ',
				dateAdded: '2019-02-03, 13:23',
				dateDeadline: '2019-02-04, 10:00',
				status: 'scheduled'
			},
			{
				id: 4,
				client: 'Media GROUP',
				priority: 'low',
				machine: 'HP Indigo 3050',
				taskText: '4+4 CMYK - 2000 A3',
				dateAdded: '2019-02-03, 16:10',
				dateDeadline: '2019-02-06, 10:00',
				status: 'scheduled'
			},
			{
				id: 5,
				client: 'Stone-Works',
				priority: 'middle',
				machine: 'Inca Spyder 320',
				taskText:
					'600x2200, tempered glass 10mm, CMYL +W400, primer, mirror image, preview in file folder',
				dateAdded: '2019-02-03, 10:20',
				dateDeadline: '2019-02-04, 15:00',
				status: 'scheduled'
			}
		],
		clients: [
			{
				id: 1,
				name: 'Media GROUP',
				phone: '+080674960858',
				dateJoin: '2008-05-03'
			},
			{
				id: 2,
				name: 'Piper J.K',
				phone: '+080684960858',
				dateJoin: '2012-05-03'
			},
			{
				id: 3,
				name: 'BORJOMI',
				phone: '+080674970858',
				dateJoin: '2018-01-01'
			},
			{
				id: 4,
				name: 'Stone Works',
				phone: '+080474960858',
				dateJoin: '2004-05-03'
			},
			{
				id: 5,
				name: 'FisherMAN',
				phone: '+080474760858',
				dateJoin: '2009-10-07'
			},
			{
				id: 6,
				name: 'Miami Nights',
				phone: '+080474990858',
				dateJoin: '2010-05-03'
			}
		],
		machines: [
			{
				id: 1,
				model: 'HP Indigo 3050',
				type: ['sheetfeed', 'offset'],
				substrates: ['paper', 'vinyl'],
				maxSubstrate: '320x450',
				operator: '',
				technitian: ''
			},
			{
				id: 2,
				model: 'inca Spyder 320',
				type: ['flatbed', 'inkjet', 'uv'],
				substrates: 'any',
				maxSubstrate: '1600x3200x30',
				operator: '',
				technitian: ''
			},
			{
				id: 3,
				model: 'Epson GS6000',
				type: ['rollfeed', 'inkjet', 'eco-solvent'],
				substrates: ['paper', 'vinyl', 'banner-cloth', 'flag-cloth'],
				maxSubstrate: '320x450',
				operator: '',
				technitian: ''
			}
		],
		dispatch: action => this.setState(state => reducer(state, action))
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;

/*
status
scheduled - заплановано
in work - в роботі
completed - завершено
canceled - відмінено
postponed - відтерміновано
*/
