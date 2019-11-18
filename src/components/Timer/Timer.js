import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    handleStart = () => {
        this.props.start(this.state.input);
    }

    setInput = (event) => {
        let input = event.target.value.toString();
        this.setState({
            input: input
        });
    }

    render() {
        if(this.props.taskName === '') {
            return (
                  <div className="game">
                    <div>
                        <label>Enter a task name to start tracking:</label>
                        <input
                           className="input-text"
                           type="text"
                           value={this.state.input}
                           onKeyPress={(ev) => {
                               if ((ev.key === 'Enter' || ev.keyCode === 13) && this.state.input.length !== 0) {
                                 this.handleStart();
                                 ev.preventDefault();
                               }
                            }}
                            onChange={this.setInput}/>
                       <button className="submit-default" onClick={this.handleStart} >Submit</button>
                    </div>
                  </div>
            );
        }

        const startTime = new Date(this.props.clockStart);
        const lastPause = new Date(this.props.lastPause);

        return (

          <div className="game">
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
