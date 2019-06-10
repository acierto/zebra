import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import historyService from '../history';

export const allReducers = combineReducers({
    router: connectRouter(historyService.history),
});
