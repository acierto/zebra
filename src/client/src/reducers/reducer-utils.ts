import * as R from 'ramda';

export const actionReducer = R.curry((handler, type) => [(state, action) => R.propEq('type', type, action), handler]);

export const stateIdentity = [R.T, R.identity];

export const composeReducer = (...conditions) => (defaultState) => (state = defaultState, action) =>
    R.cond(conditions)(state, action);
