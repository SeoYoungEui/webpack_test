import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { purchaseOrderAction, purchaseOrderSelector } from "./slice";
import { getPurchaseOrderList } from "../../../api/purchase"

export function* purchaseOrderListLoad() {
  const {loadSuccess, loadFail} = purchaseOrderAction;
  try {
    const param = yield select(purchaseOrderSelector.defaultParam);
    const result = yield call(getPurchaseOrderList, param);

    yield put(
      loadSuccess({
        purchaseOrderList: result.list,
        totalCount: result.totalCount
      })
    )
  } catch (error) {
    yield put(loadFail(error));
  }
}

export function* watchPurchaseOrder() {
  const {load} = purchaseOrderAction;

  yield takeLatest(load, purchaseOrderListLoad);
}