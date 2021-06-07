import { createSelector, createSlice } from "@reduxjs/toolkit";
import { masterPoolAction } from "common/Pool/MasterPool/slice";
import * as _ from "lodash";

export const initialState = {
  userCodePool: {},
  cellEditParam: {},
  cellRenderer: {},
  userPCodePool: {},
  isLoading: false,
  error: null,
};

const reducers = {
  userCodeLoad: (state) => {
    state.isLoading = true;
  },
  userCodeLoadSuccess: (state, { payload: { list } }) => {
    state.isLoading = false;
    state.userCodePool = list;
    var tempArr = {};
    _.forEach(_.groupBy(list, "pCode"), (value, key) => {
      // tempArr[key] = _.mapKeys(value, (v) => v.code)
      tempArr[key] = value;
    });
    state.userPCodePool = tempArr;

    var renderer = {}; // 렌더러
    renderer = _.mapValues(
      _.mapKeys(list, (value) => value.code),
      "codeKR"
    );

    state.cellRenderer = renderer;

    var uniqkey = _.uniqBy(_.filter(list, {}), "pCode"); // pCode UK 값
    var lookUp = {}; // 룩업
    _(uniqkey).forEach(function (n) {
      var obj = _.filter(list, { pCode: n.pCode });
      var dataSet = _.mapValues(
        _.mapKeys(obj, (value) => value.code),
        "codeKR"
      );
      //룩업
      lookUp = {
        ...lookUp,
        [n.pCode]: {
          values: _.keys(dataSet),
          formatValue: (value) => {
            return dataSet[value];
          },
        },
      };
    });
    state.cellEditParam = lookUp;
  },
  userCodeLoadFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
};

const name = "CODE_POOL";

const slice = createSlice({
  name,
  initialState,
  reducers,
});

const selectUserCodePoolState = createSelector(
  (state) => state.userCodePool,
  (userCodePool) => userCodePool
);

const selectUserPCodePoolState = createSelector(
  (state) => state.userPCodePool,
  (userPCodePool) => userPCodePool
);

const selectCellEditParamState = createSelector(
  (state) => state.cellEditParam,
  (cellEditParam) => cellEditParam
);

const selectCellRendererState = createSelector(
  (state) => state.cellRenderer,
  (cellRenderer) => cellRenderer
);

const selectAllState = createSelector(
  selectUserCodePoolState,
  selectUserPCodePoolState,
  selectCellEditParamState,
  selectCellRendererState,
  (userCodePool, userPCodePool, cellEditParam, cellRenderer) => {
    return { userCodePool, userPCodePool, cellEditParam, cellRenderer };
  }
);

export const codePoolSelector = {
  userCodePool: (state) => selectUserCodePoolState(state[CODE_POOL]),
  userPCodePool: (state) => selectUserPCodePoolState(state[CODE_POOL]),
  cellEditParam: (state) => selectCellEditParamState(state[CODE_POOL]),
  cellRenderer: (state) => selectCellRendererState(state[CODE_POOL]),
  all: (state) => selectAllState(state[CODE_POOL]),
};

export const CODE_POOL = slice.name;
export const codePoolReducer = slice.reducer;
export const codePoolAction = slice.actions;
