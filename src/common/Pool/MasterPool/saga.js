import { call, put, select, takeLatest } from "redux-saga/effects";
import { masterPoolAction, masterPoolSelector } from "./slice";
import {
  getItemPool,
  getProductPool,
  getMaterialPool,
  getToolPool,
  getPartPool,
} from "../../../api/pool";

export function* itemPoolLoad() {
  const { itemLoadSuccess, itemLoadFail } = masterPoolAction;

  try {
    const result = yield call(getItemPool);
    yield put(
      itemLoadSuccess({
        list: result,
      })
    );
  } catch (err) {
    yield put(itemLoadFail(err));
  }
}

export function* productPoolLoad() {
  const { productLoadSuccess, productLoadFail } = masterPoolAction;

  try {
    const result = yield call(getProductPool);
    yield put(
      productLoadSuccess({
        list: result,
      })
    );
  } catch (err) {
    yield put(productLoadFail(err));
  }
}

export function* materialPoolLoad() {
  const { materialLoadSuccess, materialLoadFail } = masterPoolAction;

  try {
    const result = yield call(getMaterialPool);

    yield put(
      materialLoadSuccess({
        list: result,
      })
    );
  } catch (err) {
    yield put(materialLoadFail(err));
  }
}

export function* toolPoolLoad() {
  const { toolLoadSuccess, toolLoadFail } = masterPoolAction;

  try {
    const result = yield call(getToolPool);

    yield put(
      toolLoadSuccess({
        list: result,
      })
    );
  } catch (err) {
    yield put(toolLoadFail(err));
  }
}

export function* partPoolLoad() {
  const { partLoadSuccess, partLoadFail } = masterPoolAction;

  try {
    const result = yield call(getPartPool);

    yield put(
      partLoadSuccess({
        list: result,
      })
    );
  } catch (err) {
    yield put(partLoadFail(err));
  }
}

export function* watchMasterPool() {
  const { itemLoad, productLoad, materialLoad, toolLoad, partLoad } =
    masterPoolAction;

  yield takeLatest(itemLoad, itemPoolLoad);
  yield takeLatest(productLoad, productPoolLoad);
  yield takeLatest(materialLoad, materialPoolLoad);
  yield takeLatest(toolLoad, toolPoolLoad);
  yield takeLatest(partLoad, partPoolLoad);
}
