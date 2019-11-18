import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import timerReducer from './timerReducer';

export default combineReducers({
	messageReducer,
	timerReducer
});