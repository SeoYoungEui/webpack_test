import { createSelector, createSlice } from '@reduxjs/toolkit'
import * as _ from 'lodash'
import { setGridData } from '../../../common/Grid/gridUtil'
export const initialState = {
  isLoading: false,
  error: null,
  success: undefined,
  msg: null,
  productList: [],
  defaultParam: {
    pageable: { size: 10, page: 0 }
  },
  component: null,
  totalCount: 0
}

const reducers = {
  load: (state, payload) => {
    state.isLoading = true
  },
  loadSuccess: (state, { payload: { list, totalCount } }) => {
    state.isLoading = false
    state.productList = list
    state.totalCount = totalCount
  },
  loadFail: (state, { payload: error }) => {
    state.isLoading = false
    state.error = error
  },
  save: (state, { payload }) => {
    state.isLoading = true
    state.success = false
    state.productList = setGridData(payload, 'itemId', { itemType: 'ITM001' })
    state.component = payload.component
  },
  saveSuccess: (state, { payload: { success, code, msg } }) => {
    state.isLoading = false
    state.success = success
    state.code = code
    state.msg = msg
  },
  saveFail: (state, { payload: error }) => {
    state.isLoading = false
    state.success = false
    state.error = error
  },
  setProductList: (state, payload) => {
    payload.payload.forEach((value) => {
      var itemId = value.key
      var data = value.data
      var type = value.type

      var editRow = _.find(state.productList, { itemId: itemId })

      switch (type) {
        case 'insert':
          data['itemType'] = 'ITM001' // 제품
          data['itemId'] = value.key.rowIndex
          data['createUser'] = '1'
          data['used'] = 1
          state.productList.push(data)
          break
        case 'update':
          data['updateUser'] = '1'
          for (var key in data) {
            if (editRow[key] != data[key]) {
              editRow[key] = data[key]
            }
          }
          break
        case 'remove':
          editRow['updateUser'] = '1'
          editRow['used'] = 0
          break
      }
    })
  },
  setDefaultParam: (state, payload) => {
    state.defaultParam = payload.payload
  }
}

const name = 'MASTER_PRODUCT'

const slice = createSlice({
  name,
  initialState,
  reducers
})

const selectLoadingState = createSelector(
  (state) => state.isLoading,
  (isLoading) => isLoading
)

const selectErrorState = createSelector(
  (state) => state.error,
  (error) => error
)

const selectSuccessState = createSelector(
  (state) => state.success,
  (success) => success
)

const selectMsgState = createSelector(
  (state) => state.msg,
  (msg) => msg
)

const selectProductListState = createSelector(
  (state) => state.productList,
  (productList) => productList
)

const selectDefualtParamState = createSelector(
  (state) => state.defaultParam,
  (defaultParam) => defaultParam
)

const selectComponentState = createSelector(
  (state) => state.component,
  (component) => component
)

const selectTotalCountState = createSelector(
  (state) => state.totalCount,
  (totalCount) => totalCount
)

const selectAllState = createSelector(
  selectLoadingState,
  selectErrorState,
  selectSuccessState,
  selectMsgState,
  selectProductListState,
  selectDefualtParamState,
  selectTotalCountState,
  (isLoading, error, success, msg, productList, defaultParam, totalCount) => {
    return {
      isLoading,
      error,
      success,
      msg,
      productList,
      defaultParam,
      totalCount
    }
  }
)

export const masterProductSelector = {
  isLoading: (state) => selectLoadingState(state[MASTER_PRODUCT]),
  error: (state) => selectErrorState(state[MASTER_PRODUCT]),
  success: (state) => selectSuccessState(state[MASTER_PRODUCT]),
  msg: (state) => selectMsgState(state[MASTER_PRODUCT]),
  productList: (state) => selectProductListState(state[MASTER_PRODUCT]),
  defaultParam: (state) => selectDefualtParamState(state[MASTER_PRODUCT]),
  component: (state) => selectComponentState(state[MASTER_PRODUCT]),
  totalCount: (state) => selectTotalCountState(state[MASTER_PRODUCT]),
  all: (state) => selectAllState(state[MASTER_PRODUCT])
}

export const MASTER_PRODUCT = slice.name
export const masterProductReducer = slice.reducer
export const masterProductAction = slice.actions
