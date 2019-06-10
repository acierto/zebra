import {all} from 'redux-saga/effects';

export function* mainSaga() {
    while (true) {
        yield all([]);
    }
}
