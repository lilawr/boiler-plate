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

