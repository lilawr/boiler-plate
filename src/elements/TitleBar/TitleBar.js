import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorText from 'elements/ColorText'
import SpinningLogo from 'elements/SpinningLogo'

import './TitleBar.scss';

class TitleBar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            animate: true
        }
    }
    static propTypes = {
        logo: PropTypes.string.isRequired,
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

	render() {
	    const {title, logo} = this.props;

		return (
			<div className="TitleBar">
				<SpinningLogo logo={this.props.logo} animate={this.state.animate} animationType='SPIN' classNames="TitleBarLogo"/>
                <ColorText text={title} animate={this.state.animate} />
                <button className="submit-default" onClick={this.toggleAnimation} >Animate</button>
			</div>
		);
	}
}

export default TitleBar;
