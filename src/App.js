import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './components/taskList/TaskList';
import AddTask from './components/management/AddTask';
import MachineList from './components/machineList/MachineList';
import ClientList from './components/clientList/ClientList';
import Navbar from './components/Navbar/Navbar';
import Home from './components/homePage/Home';

const Main = () => {
	return (
		<Provider>
			<Router>
				<div id='mainView'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/tasklist' component={TaskList} />
						<Route exact path='/addtask' component={AddTask} />
						<Route exact path='/machinelist' component={MachineList} />
						<Route exact path='/clientlist' component={ClientList} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};
export default Main;
