import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputText from 'elements/InputText';
import './Timer.scss';

class Timer extends Component {

    constructor(props) {
         super(props);
         this.state = {
            input: ''
         }
         this.handleStart = this.handleStart.bind(this);
    }

    static propTypes = {
       start: PropTypes.func.isRequired,
       stop: PropTypes.func.isRequired,
       togglePause: PropTypes.func.isRequired,
       clockStart: PropTypes.number,
       lastPause: PropTypes.number,
       isPaused: PropTypes.bool,
    }

    handleStart = (input) => {
        this.props.start(input);
    }

    render() {
        if(this.props.taskName === '') {
            return (
                <div className="Timer">
                    <label>Enter a task name to start tracking:</label>
                    <InputText classNames="input-name" submitText={this.handleStart} promptText="Start"/>
                </div>
            );
        }

        const startTime = new Date(this.props.clockStart);
        const lastPause = new Date(this.props.lastPause);

        return (
          <div className="Timer">
                <ul>
                    <li>Name: {this.props.taskName}</li>
                    <li>Start Time: {startTime.toLocaleString()}</li>
                    <li>Last Break: {lastPause.toLocaleString()}</li>
                    <li>
                        <button className="submit-default" onClick={this.props.togglePause} >{this.props.isPaused ? 'Resume' : 'Pause' }</button>
                        <button className="submit-default" onClick={this.props.stop} > Stop the Clock</button>
                    </li>
                </ul>
          </div>
        );
    }
}

export default Timer;
