import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import './ColorText.scss';

class ColorText extends PureComponent {
    static propTypes = {
        text: PropTypes.string,
        animate: PropTypes.bool
    }

    static defaultProps = {
        text: 'title',
        animate: false
    }

    renderLetter = (letter, index) => {
        return <span key={index} className={this.props.animate ? "letterStyleAnimate" : "letterStyle"}> {letter} </span>
    }

	render() {
	    return (
			<Fragment>
			    {this.props.text.split('').map(this.renderLetter)}
			</Fragment>
		);
	}
}

export default ColorText;
