import {all, fork, takeEvery} from 'redux-saga/effects';

import { SET_TARGET_PACE } from '../../actions/main';

function handleSetTargetPace(data) {
    console.log('saga triggered!', data);
}

export function* mainSaga() {
  yield all([
    fork(takeEvery, SET_TARGET_PACE, handleSetTargetPace),
  ]);
}
