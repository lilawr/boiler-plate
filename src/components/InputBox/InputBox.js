
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messages from 'utils/messages.json'
import Message from 'elements/TextMessageBox';
import InputText from 'elements/InputText';
import ScrollBottomBox from 'elements/ScrollBottomBox';

import './InputBox.scss';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.addInputMessage = this.addInputMessage.bind(this);
    }

    static propTypes = {
       addMessage: PropTypes.func.isRequired,
       messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        if(this.props.messages.length === 0) {
            this.sendReplyMessage(messages.welcome);
            this.sendReplyMessage(messages.menu);
        }
    }

    addInputMessage = (input) => {
        if(input.length === 0) {
            return;
        }

        const message = {text:input, type:"input"}

        this.props.addMessage(message);

        this.setState({
            input: ""
        })
    }

    sendReplyMessage = (message) => {
        const messageObj = {text: message, type:"reply"};
        this.props.addMessage(messageObj);
    }

    render() {
        return (
            <div className="input-box">
               <ScrollBottomBox>
                    {this.props.messages && this.props.messages.map((message, index) =>
                        <Message
                            key={`message-${index}`}
                            type={message.type}
                            message={message}
                        />
                    )}
               </ScrollBottomBox>
               <InputText submitText={this.addInputMessage} classNames={""}/>
            </div>
        );
    }
}

export default InputBox;
