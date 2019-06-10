import sessionActions from '../actions/session-actions';

export const resetSessionExpiration = (store) => (request) => {
    // @ts-ignore
    store.dispatch(sessionActions.resetPolling());
    return request;
};
