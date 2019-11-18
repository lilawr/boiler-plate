import { connect } from 'react-redux';

import { createMessage, start, pause, stop } from 'actions/mainActions';

import InputBox from './InputBox.js';
const mapDispatchToProps = dispatch => ({
	addMessage: (message) => dispatch(createMessage(message)),
	start: (title) => dispatch(start(title)),
	pause: () => dispatch(pause()),
	stop: () => dispatch(stop())
});

const mapStateToProps = state => ({
	messages: state.mainReducer.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);