import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import MockStoreProvider from 'test/MockStoreProvider.js'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
        <MockStoreProvider>
            <App />
        </MockStoreProvider>
	, div);
	ReactDOM.unmountComponentAtNode(div);
});