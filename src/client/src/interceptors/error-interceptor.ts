import * as R from 'ramda';
import {GATEWAY_TIMEOUT_CODE, UNAUTHORIZED_CODE} from '../http/http-status-codes';
import appSpinnerActions from '../actions/app-spinner-actions';
import sessionActions from '../actions/session-actions';

export const errorInterceptor = (store, historyService) => {
    const sessionStateIs = (expected) => R.pathEq(['session', 'state'], expected, store.getState());

    const responseStatusIs = (expected) => R.pathEq(['response', 'status'], expected);
    const hasNoSession = () => sessionStateIs(sessionActions.states.NONE);
    const hasSession = () => sessionStateIs(sessionActions.states.CREATED);

    const sessionExpired = R.both(responseStatusIs(UNAUTHORIZED_CODE), hasSession);

    const authError = R.both(hasNoSession, responseStatusIs(UNAUTHORIZED_CODE));

    const redirectTo = (url) => () => historyService.pushPathname(url);

    const reThrow = (ex) => {
        throw ex;
    };

    const redirectAndThrow = R.curry((url, ex) => {
        redirectTo(url)();
        reThrow(ex);
    });

    const handleSessionExpiration = (ex) => {
        store.dispatch(sessionActions.changeState(sessionActions.states.EXPIRED));
        redirectAndThrow('/login?session-expired', ex);
    };

    return (error) => {
        R.cond([
            [sessionExpired, handleSessionExpiration],
            [authError, redirectTo('/login?auth-error')],
            [responseStatusIs(GATEWAY_TIMEOUT_CODE), redirectTo('/login')],
            [R.T, reThrow]
        ])(error);
        store.dispatch(appSpinnerActions.hide());
    };
};
