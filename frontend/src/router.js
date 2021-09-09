import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from './history';
import configureStore from './configureStore';
import App from './App';

const store = configureStore();

history.listen(location => {
	if (!window.ga) {
		return;
	} else {
		window.ga('set', 'page', location.pathname + location.search);
		window.ga('create', 'UA-124192796-1', {
			cookieFlags: 'samesite=none;secure'
		});
		window.ga('send', 'pageview');
	}
});

class RouteProvider extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		);
	}
}

export default RouteProvider;
