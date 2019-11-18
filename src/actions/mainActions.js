export const createMessage = (message) => dispatch => {
	dispatch({
		type: 'CREATE_MESSAGE',
		payload: message
	});
};

export const menu = (option) => dispatch => {
	dispatch({
		type: 'MENU',
		payload: option
	});
};

export const start = (title) => dispatch => {
	dispatch({
		type: 'START',
		payload: title
	});
};

export const pause = () => dispatch => {
	dispatch({
		type: 'PAUSE'
	});
};

export const stop = () => dispatch => {
	dispatch({
		type: 'STOP'
	});
};


