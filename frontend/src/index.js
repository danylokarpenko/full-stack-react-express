import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './router';
import * as serviceWorker from './serviceWorker';

/* THIS CODE IS A TEMPORARY SOLUTION, THAT HAS TO BE REPLACED WITH ACCESS TOKENS LOGIC */

// transfers sessionStorage from one tab to another
var sessionStorageTransfer = function (event) {
	if (!event) {
		event = window.event;
	} // ie suq
	if (!event.newValue) {
		return;
	} // do nothing if no value to work with
	const shouldSetSessionStorage = !sessionStorage.length || sessionStorage.getItem('credentialingRedirect') !== null;

	if (event.key === 'getSessionStorage') {
		// another tab asked for the sessionStorage -> send it
		localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
		// the other tab should now have it, so we're done with it.
		localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
	} else if (event.key === 'sessionStorage' && shouldSetSessionStorage) {
		// another tab sent data <- get it
		var data = JSON.parse(event.newValue);
		for (var key in data) {
			sessionStorage.setItem(key, data[key]);
		}
	}

	if (event.key === 'logout' && event.newValue === 'true') {
		sessionStorage.removeItem('accessToken');
	}
};

// listen for changes to localStorage
if (window.addEventListener) {
	window.addEventListener('storage', sessionStorageTransfer, false);
} else {
	window.attachEvent('onstorage', sessionStorageTransfer);
}

// Ask other tabs for session storage (this is ONLY to trigger event)
if (!sessionStorage.length) {
	localStorage.setItem('getSessionStorage', 'foobar');
	localStorage.removeItem('getSessionStorage', 'foobar');
}

/* END OF STUB TO SHARE SESSION STORAGE */

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
