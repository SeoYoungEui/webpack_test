import { call, put, select, takeLatest } from 'redux-saga/effects';
import { codePoolAction } from './slice'
import { getUserCodePool } from '../../api/pool'

export function* userCodePoolLoad() {
    const { userCodeLoadSuccess, userCodeLoadFail } = codePoolAction;

    try {
        const result = yield call(getUserCodePool);

        yield put(userCodeLoadSuccess({
            list : result
        }));
    } catch(err) {
        yield put(userCodeLoadFail(err))
    }
}

export function* watchCodePool() {
    const { userCodeLoad } = codePoolAction;

    yield takeLatest(userCodeLoad, userCodePoolLoad);
}