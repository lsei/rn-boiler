import {all, takeEvery, call, put, fork} from 'redux-saga/effects';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_TOKEN,
} from '../../actions/auth';

import * as api from '../../helpers/api';
import { navigate } from '../../helpers/Navigation';

export function* handleLogin({payload}) {

  try {
    const {token} = yield call([api, api.login], payload);
    yield put({type: SET_TOKEN, payload: token.encrypted_token });
    yield put({type: LOGIN_SUCCESS });
    yield call(navigate, 'LoggedIn');
  } catch(e) {
    if(typeof e === 'object') {
      yield put({type: LOGIN_FAILURE, payload: e.error });
    } else {
      yield put({type: LOGIN_FAILURE, payload: e.toString() });
    }
  }
}

export function* loginSaga() {
  yield all([
    fork(takeEvery, LOGIN, handleLogin),
  ]);
}
