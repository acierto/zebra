import rootActions from '../actions/root-actions';
import {actionReducer, composeReducer, stateIdentity} from './reducer-utils';

const wipeStore = actionReducer((state) => ({router: state.router, server: state.server, session: state.session}));

// @ts-ignore
export const rootReducer = composeReducer(wipeStore(rootActions.WIPE_STORE), stateIdentity)();
