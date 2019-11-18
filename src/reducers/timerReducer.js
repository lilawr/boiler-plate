
export default (state = {}, action) => {
    const time = Date.now();
	switch (action.type) {
        case 'START':
            return {
                ...state,
                taskName: action.payload,
                clockStart: time,
                lastStart: time
            };

        case 'TOGGLE_PAUSE':
            if(state.isPaused) {
                return {
                    ...state,
                    lastStart: time,
                    isPaused: false
                };
            }

            return {
                ...state,
                lastPause: time,
                totalTime: state.totalTime + (time - state.lastStart),
                isPaused: true
            };

        case 'STOP':
            return {
                clockStart: 0,
                lastPause: 0,
                lastStart: 0,
                isPaused: false,
                taskName: '',
                previousTaskName: state.taskName,
                totalTime: state.totalTime + (time - state.lastStart)
            };

        default:
            return state;
	}
};