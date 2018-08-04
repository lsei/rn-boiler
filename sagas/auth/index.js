import {all, fork} from 'redux-saga/effects';

import {loginSaga} from './login';

export function* authSaga() {
  yield all([
    fork(loginSaga),
  ]);
}
