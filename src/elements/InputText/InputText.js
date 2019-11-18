import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './InputText.scss';

class InputText extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    static propTypes = {
        submitText: PropTypes.func.isRequired,
        promptText: PropTypes.string,
        classNames: PropTypes.string
    }

    static defaultProps = {
        promptText: 'Submit',
        classNames: ''
    }

    handleSubmit = () => {
        this.props.submitText(this.state.input);
        this.setState({
            input: ''
        })
    }

    setInput = (event) => {
        let input = event.target.value.toString();

        this.setState({
            input: input
        });
    }

	render() {
	    return (
           <div className={`submit-box ${this.props.classNames}`} >
               <input
                   className="input-text"
                   type="text"
                   value={this.state.input}
                   onKeyPress={(ev) => {
                       if ((ev.key === 'Enter' || ev.keyCode === 13) && this.state.input.length !== 0) {
                         this.handleSubmit();
                         ev.preventDefault();
                       }
                    }}
                     onChange={this.setInput}
               />
               <button className="submit-default" onClick={this.handleSubmit} >{this.props.promptText}</button>
           </div>
	    );

	}
}

export default InputText;
