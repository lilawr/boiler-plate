import React, { Component } from 'react';

import messages from 'utils/messages.json'
import CookieProcessor from 'utils/CookieProcessor.js'

import InputBox from './InputBox';

class Timer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            types: this.props.type
        }
    }

    addInputMessage = (message) => {
        const messageObj = {text: message, type:"reply"};
        this.props.addMessage(messageObj);
    }

    componentWillMount() {
            this.addInputMessage(messages.welcome);
            this.addInputMessage(messages.menu);
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
          <div className="game">
            <InputBox />
          </div>
        );
    }
}

export default Timer;
