import React, { Component } from 'react';

import CookieProcessor from 'utils/CookieProcessor.js'

import './CookieManager.scss';

class CookieManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seenCookieMessage: false
        };
    }

    componentDidMount = () => {
        if(CookieProcessor.getSeenCookieMessage(this.props.cookies)) {
                this.setState({ seenCookieMessage: true });
        }
    }

    dismissCookieMessage = () => {
        CookieProcessor.setSeenCookieMessage(this.props.cookies);
        this.setState({ seenCookieMessage: true });
    }

    render() {
        if(this.state.seenCookieMessage) {
            return null;
        }

        return (
            <div className="cookie-overlay">
                <div className="cookie-box">
                    <div className="cookie-message">
                      TimeTracker saves your data in your cookies, please dismiss this message to allow us to save these cookies for the tracking to work.
                    </div>
                    <button className="close" onClick={this.dismissCookieMessage} >Close</button>
                </div>
            </div>
        );
    }
}

export default CookieManager;
