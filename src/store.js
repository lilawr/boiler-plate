import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

export default function configureStore(initialState) {
    if (true && process.env.NODE_ENV === 'development' && window.navigator.userAgent.includes("Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1")) {
        return createStore(
            rootReducer,
            initialState,
            compose(
              applyMiddleware(thunk),
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
    } else {
        return createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk)
        );
    }
}