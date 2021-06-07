import { createSelector, createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const name = "PURCHASE_ORDER";

export const initialState = {
  isLoading: false,
  error: null,
  success: undefined,
  msg: null,
  purchaseOrderList: [],
  defaultParam: { pageable: { size: 10, page: 0 } },
  component: null,
  totalCount: 0,
};

const reducers = {
  load: (state, payload) => {
    state.isLoading = true;
  },
  loadSuccess: (state, { payload: { purchaseOrderList, totalCount } }) => {
    state.isLoading = false;
    state.purchaseOrderList = purchaseOrderList;
    state.totalCount = totalCount;
  },
  loadFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
  setDefaultParam: (state, payload) => {
    state.defaultParam = payload.payload;
  }
};

const slice = createSlice({ name, initialState, reducers });

const selectLoadingState = createSelector(
  (state) => state.isLoading,
  (isLoading) => isLoading
);

const selectErrorState = createSelector(
  (state) => state.error,
  (error) => error
);

const selectSuccessState = createSelector(
  (state) => state.success,
  (success) => success
);

const selectMsgState = createSelector(
  (state) => state.msg,
  (msg) => msg
);

const selectPurchaseOrderListState = createSelector(
  (state) => state.purchaseOrderList,
  (purchaseOrderList) => purchaseOrderList
);

const selectDefualtParamState = createSelector(
  (state) => state.defaultParam,
  (defaultParam) => defaultParam
);

const selectComponentState = createSelector(
  (state) => state.component,
  (component) => component
);

const selectTotalCountState = createSelector(
  (state) => state.totalCount,
  (totalCount) => totalCount
);

const selectAllState = createSelector(
  selectLoadingState,
  selectErrorState,
  selectSuccessState,
  selectMsgState,
  selectPurchaseOrderListState,
  selectDefualtParamState,
  selectTotalCountState,
  (
    isLoading,
    error,
    success,
    msg,
    purchaseOrderList,
    defaultParam,
    totalCount
  ) => {
    return {
      isLoading,
      error,
      success,
      msg,
      purchaseOrderList,
      defaultParam,
      totalCount,
    };
  }
);

export const purchaseOrderSelector = {
  isLoading: (state) => selectLoadingState(state[PURCHASE_ORDER]),
  error: (state) => selectErrorState(state[PURCHASE_ORDER]),
  success: (state) => selectSuccessState(state[PURCHASE_ORDER]),
  msg: (state) => selectMsgState(state[PURCHASE_ORDER]),
  purchaseOrderList: (state) => selectPurchaseOrderListState(state[PURCHASE_ORDER]),
  defaultParam: (state) => selectDefualtParamState(state[PURCHASE_ORDER]),
  component: (state) => selectComponentState(state[PURCHASE_ORDER]),
  totalCount: (state) => selectTotalCountState(state[PURCHASE_ORDER]),
  all: (state) => selectAllState(state[PURCHASE_ORDER]),
};

export const PURCHASE_ORDER = slice.name;
export const purchaseOrderReducer = slice.reducer;
export const purchaseOrderAction = slice.actions;
