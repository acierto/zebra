import log from 'loglevel';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {allReducers} from '../reducers';
import {mainSaga} from '../sagas/root-saga';
import {rootReducer} from '../reducers/root-reducer';

log.setDefaultLevel(log.levels.DEBUG);

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({collapsed: true, diff: false, duration: true});
    middlewares = [...middlewares, logger];
}

export const configureStore = (history) => createStore(
    (state, action) => allReducers(rootReducer(state, action), action),
    composeWithDevTools(applyMiddleware(...[...middlewares, routerMiddleware(history)]))
);

export const runSaga = () => sagaMiddleware.run(mainSaga);
