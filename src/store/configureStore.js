import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialStore) {
    return createStore(
        reducer,
        initialStore,
        composeWithDevTools(applyMiddleware(promise, logger, thunk, reduxImmutableStateInvariant()))
    );
}
