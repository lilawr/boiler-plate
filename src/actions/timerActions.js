
export const start = (title) => dispatch => {
	dispatch({
		type: 'START',
		payload: title
	});
};

export const togglePause = () => dispatch => {
	dispatch({
		type: 'TOGGLE_PAUSE'
	});
};

export const stop = () => dispatch => {
	dispatch({
		type: 'STOP'
	});
};


