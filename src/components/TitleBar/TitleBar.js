import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorText from 'elements/ColorText'
import SpinningLogo from 'elements/SpinningLogo'
import components from 'utils/components.js';

import './TitleBar.scss';

class TitleBar extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            animate: true,
            value: this.props.component
        }

        this.handleChange = this.handleChange.bind(this);

    }

    static propTypes = {
        logo: PropTypes.string.isRequired,
        setComponent: PropTypes.func.isRequired,
        title: PropTypes.string
    }

    static defaultProps = {
        title: "Title Bar"
    }

    toggleAnimation = () => {
        this.setState({
            animate:!this.state.animate
        });
    }

    handleChange(event) {
        this.props.setComponent(event.target.value);
        this.setState({value: event.target.value});
    }

	render() {
	    const {title, logo} = this.props;

		return (
			<div className="TitleBar">
				<SpinningLogo logo={logo} animate={this.state.animate} animationType='SPIN' classNames="TitleBarLogo"/>
                <ColorText text={title} animate={this.state.animate} />
                <button className="submit-default" onClick={this.toggleAnimation} > {this.state.animate ? 'Freeze' : 'Animate'} </button>
                <select value={this.state.value} onChange={this.handleChange}>
                    {Object.keys(components).map((k, i) => <option key={`option-${i}`} value={k}> {components[k].name} </option>)}
                </select>
			</div>
		);
	}
}

export default TitleBar;
