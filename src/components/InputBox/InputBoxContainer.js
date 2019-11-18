import { connect } from 'react-redux';

import { createMessage } from 'actions/messageActions';

import InputBox from './InputBox.js';
const mapDispatchToProps = dispatch => ({
	addMessage: (message) => dispatch(createMessage(message))
});

const mapStateToProps = state => ({
	messages: state.messageReducer.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);