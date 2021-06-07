import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getManufactureItemList } from '../../../api/master';
import { masterManufactureAction, masterManufactureSelector } from './slice';

export function* manufactureItemListLoad() {
    const { loadSuccess, loadFail } = masterManufactureAction;

    try {
        const param = yield select(masterManufactureSelector.defaultParam);
        const result = yield call(getManufactureItemList, param);

        yield put(
            loadSuccess({
                list: result.list,
                totalCount: result.totalCount,
            })
        );
    } catch (err) {
        yield put(loadFail(err));
    }
}

export function* watchMasterManufactureProcess() {
    const { load } = masterManufactureAction;

    yield takeLatest(load, manufactureItemListLoad);
}