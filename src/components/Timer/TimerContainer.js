import { connect } from 'react-redux';
import { start, togglePause, stop } from 'actions/timerActions';

import Timer from './Timer.js';

const mapDispatchToProps = dispatch => ({
	start: (titleToTrack) => dispatch(start(titleToTrack)),
	togglePause: () => dispatch(togglePause()),
	stop: () => dispatch(stop())
});

const mapStateToProps = state => ({
	...state.timerReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);