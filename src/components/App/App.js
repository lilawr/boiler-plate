import React, { Component } from 'react';
import { withCookies } from 'react-cookie';

import Timer from 'components/Timer';
import CookieManager from 'components/CookieManager';
import TitleBar from 'elements/TitleBar';
import logo from 'assets/images/logo.svg';

import './App.scss';

class App extends Component {
	render() {
		return (
            <div className="App">
                <header>
                    <TitleBar logo={logo} title="React Training DB"/>
                </header>
                <Timer cookies={this.props.cookies} />
                <CookieManager cookies={this.props.cookies}/>
            </div>
		);
	}
}

export default withCookies(App);
