import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SpinningLogo.scss';

const animations = {
    SPIN: 'logoSpin',
    FLIP: 'logoFlip',
    TURN: 'logoTurn',
    NONE: ''
};

class ColorText extends PureComponent {
    static propTypes = {
        logo: PropTypes.string,
        animate: PropTypes.bool,
        classNames: PropTypes.string,
        animationType: PropTypes.oneOf(['SPIN', 'FLIP', 'TURN', 'NONE']),
    }

    static defaultProps = {
        text: 'title',
        animate: false,
        classNames: '',
        animationType:'NONE'
    }

    getClassNames = () => {
        return this.props.animate ? `${animations[this.props.animationType]} ${this.props.classNames}` : `logoStatic ${this.props.classNames}`;
    }

	render() {
	    return this.props.logo ? <img src={this.props.logo} className={this.getClassNames()} alt="logo" /> : null;
	}
}

export default ColorText;
