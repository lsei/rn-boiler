import {all, fork} from 'redux-saga/effects';

// import { authSaga } from './auth';
import { mainSaga } from './main';
export function* rootSaga() {
    yield all([
        fork(mainSaga),
    ]);
}
