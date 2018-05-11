import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Welcome from './components/Welcome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Welcome />, document.getElementById('root'));
registerServiceWorker();
