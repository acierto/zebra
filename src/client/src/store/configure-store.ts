import log from 'loglevel';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {allReducers} from '../reducers';
import {rootReducer} from '../reducers/root-reducer';
import {routerMiddleware} from 'connected-react-router';

log.setDefaultLevel(log.levels.DEBUG);

export const configureStore = (history) => createStore(
    (state, action) => allReducers(rootReducer(state, action), action),
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);
