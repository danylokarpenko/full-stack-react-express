import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CalculateN } from './containers';

import './App.scss';
// import icons from './utils/icons';
// library.add(...icons);

class App extends Component {
	componentDidMount() {}
	render() {
		return (
			<Switch>
				<Route exact path="/" component={CalculateN} />
			</Switch>
		);
	}
}

export default App;
