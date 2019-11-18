/** Util class to map component enum to components in the app */
/** Add component imports here */
import Timer from 'components/Timer';
import InputBox from 'components/InputBox';

/** Add your component choice here */
const components = {
    MESSAGES: { component: InputBox, name: 'Message App' },
    TIMER: { component: Timer, name: 'Time Tracker' },
};

export default components;
