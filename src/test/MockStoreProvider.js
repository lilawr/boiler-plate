
import React, { Component } from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const defaultState = {
    mainReducers:{
        messages: []
    }
 };

export default class MockStoreProvider extends Component {

    configureStore = (initialState) => {
        Object.assign(defaultState, initialState);
        return mockStore(Object.assign(defaultState, initialState));
    }

    render () {
        return (
            <Provider store={this.configureStore(this.props.initialState)}>
                {this.props.children}
            </Provider>
        )
    }


}