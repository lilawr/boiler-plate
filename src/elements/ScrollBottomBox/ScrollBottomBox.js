import React, { PureComponent } from 'react';

export default class ScrollBottomBox extends PureComponent {

     constructor(props) {
        super(props);
        this.messagesEndRef = React.createRef();
     }

    componentDidUpdate () {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <div className="ScrollBox" style={{overflowY: "scroll"}}>
                {this.props.children}
                <div ref={this.messagesEndRef} />
           </div>
        );
    }
}

