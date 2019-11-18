import { connect } from 'react-redux';
import { start, pause, stop, createMessage } from 'actions/mainActions';

import Timer from './Timer.js';

const mapDispatchToProps = dispatch => ({
    addMessage: (text) => dispatch(createMessage(text)),
	startClock: (titleToTrack) => dispatch(start(titleToTrack)),
	pauseClock: () => dispatch(pause()),
	stopClock: () => dispatch(stop())
});

const mapStateToProps = state => ({
	...state.mainReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);