import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import messages from 'utils/messages.json'
import './TextMessageBox.scss';

class TextMessageBox extends PureComponent {

    static propTypes = {
        message: PropTypes.object.isRequired
    }

    static defaultProps = {
        type: 'reply',
        message: {}
    }

    static createMessage = (text) => {
           return {text: text};
    }

    processMultiLines = (text) => {
        const lines = text.split("\n");
        return  lines.map((line, index) => <div key={"line-" + index}style={{textAlign:"left"}}>{line}</div>)
    }

    render() {

        const {type, message: { text, identifier } } = this.props;
        const message = text || messages[identifier] || "error";

        return (
            <div className={`TextMessageBox ${type}`}>
                {this.processMultiLines(message)}
            </div>
        );
    }
}


export default TextMessageBox;
