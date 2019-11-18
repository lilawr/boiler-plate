import messages from 'utils/messages.json';

export default (state = {}, action) => {

    const createMessage = (text) => {
        return {text: text};
    }

    let startState;
    if(state.messages && state.messages.length > 0){
         startState = {
            messages: [...state.messages, createMessage(messages.menu)]
        };
    }

	switch (action.type) {
        case 'START':
            return {
                ...state,
                clockStart: Date.now()
            };
        case 'PAUSE':
        const time = Date.now();
            return {
                ...state,
                lastPause: time,
                totalTime: time - state.clockStart
        };
        case 'STOP':
            return {
                ...state,
                totalTime: Date.now() - state.clockStart
            };
        case 'CREATE_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case 'MENU':
            return state;
        default:
            return state;
	}
};