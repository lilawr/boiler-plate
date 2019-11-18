
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messages from 'utils/messages.json'
import Message from 'elements/TextMessageBox';
import ScrollBottomBox from 'elements/ScrollBottomBox';

import './InputBox.scss';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
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
        if(this.state.input.length === 0) {
            return;
        }

        const message = {text: this.state.input, type:"input"}

        this.props.addMessage(message);

        this.setState({
            input: ""
        })
    }

    sendReplyMessage = (message) => {
        const messageObj = {text: message, type:"reply"};
        this.props.addMessage(messageObj);
    }

     setInput = (event) => {
            let input = event.target.value.toString();

            this.setState({
                input: input
            });
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
           <div className="submit-box" >
               <input
               className="input-text"
               type="text"
               value={this.state.input}
               onKeyPress={(ev) => {
                   if ((ev.key === 'Enter' || ev.keyCode === 13) && this.state.input.length !== 0) {
                     this.addInputMessage();
                     ev.preventDefault();
                   }
                }}
                 onChange={this.setInput}/>
               <button className="submit-default" onClick={this.addInputMessage} >Submit</button>
           </div>
      </div>
    );
  }
}

export default InputBox;
