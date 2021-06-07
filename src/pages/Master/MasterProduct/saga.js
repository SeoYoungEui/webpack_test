import { call, put, select, takeLatest } from 'redux-saga/effects'
import { getProductList, setProductList } from '../../../api/master'
import { toastAction } from '../../../common/Toast/slice'
import { masterProductAction, masterProductSelector } from './slice'
export function* productListLoad() {
  const { loadSuccess, loadFail } = masterProductAction

  try {
    const param = yield select(masterProductSelector.defaultParam)
    const result = yield call(getProductList, param)

    yield put(
      loadSuccess({
        list: result.list,
        totalCount: result.totalCount
      })
    )
  } catch (err) {
    yield put(loadFail(err))
  }
}

export function* saveProductList() {
  const { saveSuccess, saveFail } = masterProductAction
  const { show } = toastAction
  try {
    const param = yield select(masterProductSelector.productList)
    const component = yield select(masterProductSelector.component)
    const result = yield call(setProductList, param)

    if (result.success) {
      //component.cancelEditData()
      yield put(show({ type: 'success', message: '제품정보를 저장하였습니다.' }))
    } else {
      //component.cancelEditData()
      yield put(show({ type: 'error', message: '제품정보 저장에 실패했습니다.' }))
    }

    yield put(
      saveSuccess({
        success: result.success,
        code: result.code,
        msg: result.msg
      })
    )
  } catch (err) {
    yield put(saveFail(err))
  }
}

export function* watchMasterProduct() {
  const { load, save } = masterProductAction

  yield takeLatest(load, productListLoad)
  yield takeLatest(save, saveProductList)
}
