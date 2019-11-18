import React, { Component } from 'react';
import { withCookies } from 'react-cookie';

import CookieManager from 'components/CookieManager';
import TitleBar from 'components/TitleBar';
import components from 'utils/components.js';
import logo from 'assets/images/logo.svg';

import './App.scss';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            component: 'MESSAGES'
        }
    }

    setComponent = (name) => {
    console.log(name);
        this.setState({
            component: name || 'DEFAULT'
        })
    }

    renderAppComponent = () => {
         const ChildComponent = components[this.state.component] ? components[this.state.component].component : 'Cannot identify Component'
         return <ChildComponent cookies={this.props.cookies} />
    }


	render() {
		return (
            <div className="App">
                <header>
                    <TitleBar logo={logo} title="React Training DB" setComponent={this.setComponent} value={this.state.component}/>
                </header>
                <div className="container">
                    {this.renderAppComponent()}
                </div>
                <CookieManager cookies={this.props.cookies}/>
            </div>
		);
	}
}

export default withCookies(App);
