import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import configureStore from './store';

import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

import './index.css';
import App from 'components/App';

//import registerServiceWorker from './registerServiceWorker';

const initialState = {
	mainReducer:{
		messages: [],
		clockOn: false,
		titleToTrack: ""
	}
};


ReactDOM.render(
    <CookiesProvider>
        <Provider store={configureStore(initialState)}>
            <App />
        </Provider>
    </CookiesProvider>,
	document.getElementById('root')
);

//registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
