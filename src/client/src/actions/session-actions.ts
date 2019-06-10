const CHANGE_STATE = 'session/CHANGE_STATE';
const RESET_POLLING = 'session/RESET_POLLING';
const START_POLLING = 'session/START_POLLING';
const STOP_POLLING = 'session/STOP_POLLING';

const states = {
    CREATED: 'CREATED',
    EXPIRED: 'EXPIRED',
    NONE: 'NONE'
};

export default {
    CHANGE_STATE,
    changeState: (newState) => ({newState, type: CHANGE_STATE}),
    RESET_POLLING,
    resetPolling: (newState) => ({newState, type: RESET_POLLING}),
    START_POLLING,
    startPolling: () => ({type: START_POLLING}),
    states,
    STOP_POLLING,
    stopPolling: () => ({type: STOP_POLLING})
};
