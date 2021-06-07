import { createSelector, createSlice } from '@reduxjs/toolkit'
import * as _ from 'lodash'
import { Component, createElement } from 'react'

export const initialState = {
    isLoading : false,
    error: null,
    success : undefined,
    msg: null,
    manufactureList: [],
    routeList: [],
    bomList: [],
    focusRow: {},
    defaultParam: {
        pageable: { size: 10, page: 0 }
    },
    totalCount: 0
}

const reducers = {
    load: (state, payload) => {
        state.isLoading = true
    },
    loadSuccess: (state, { payload: { list, totalCount }}) => {
        state.isLoading = false
        state.manufactureList = list
        state.totalCount = totalCount
    },
    loadFail: (state, { payload: error}) => {
        state.isLoading = false
        state.error = error
    },
    setDefaultParam: (state, payload) => {
        state.defaultParam = payload.payload;
    },
    setRouteList: (state, payload) => {
        state.routeList = payload.payload;
    },
    setBomList: (state, payload) => {
        state.bomList = payload.payload;
    },
    setFocusRow: (state, payload) => {
        state.focusRow = payload.payload;
    }
}

const name = "MASTER_MANUFACTURE_PROCESS"

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

const selectManufactureListState = createSelector(
    (state) => state.manufactureList,
    (manufactureList) => manufactureList
)

const selectFocusRowState = createSelector(
    (state) => state.focusRow,
    (focusRow) => focusRow
)

const selectDefaultParamState = createSelector(
    (state) => state.defaultParam,
    (defaultParam) => defaultParam
)

const selectTotalCountState = createSelector(
    (state) => state.totalCount,
    (totalCount) => totalCount
)

const selectRouteListState = createSelector(
    (state) => state.routeList,
    (routeList) => routeList
)

const selectBomListState = createSelector(
    (state) => state.bomList,
    (bomList) => bomList
)

const selectAllState = createSelector(
    selectLoadingState,
    selectErrorState,
    selectSuccessState,
    selectMsgState,
    selectManufactureListState,
    selectRouteListState,
    selectBomListState,
    selectFocusRowState,
    selectDefaultParamState,
    selectTotalCountState,
    (isLoading, error, success, msg, manufactureList, routeList, bomList, focusRow, defaultParam, totalCount) => {
        return {
            isLoading,
            error,
            success,
            msg,
            manufactureList,
            routeList,
            bomList,
            focusRow,
            defaultParam,
            totalCount
        }
    }
)

export const masterManufactureSelector = {
    isLoading: (state) => selectLoadingState(state[MASTER_MANUFACTURE_PROCESS]),
    error: (state) => selectErrorState(state[MASTER_MANUFACTURE_PROCESS]),
    success: (state) => selectSuccessState(state[MASTER_MANUFACTURE_PROCESS]),
    msg: (state) => selectMsgState(state[MASTER_MANUFACTURE_PROCESS]),
    manufactureList: (state) => selectManufactureListState(state[MASTER_MANUFACTURE_PROCESS]),
    routeList: (state) => selectRouteListState(state[MASTER_MANUFACTURE_PROCESS]),
    bomList: (state) => selectBomListState(state[MASTER_MANUFACTURE_PROCESS]),
    focusRow: (state) => selectFocusRowState(state[MASTER_MANUFACTURE_PROCESS]),
    defaultParam: (state) => selectDefaultParamState(state[MASTER_MANUFACTURE_PROCESS]),
    totalCount: (state) => selectTotalCountState(state[MASTER_MANUFACTURE_PROCESS]),
    all: (state) => selectAllState(state[MASTER_MANUFACTURE_PROCESS])
}

export const MASTER_MANUFACTURE_PROCESS = slice.name
export const masterManufactureReducer = slice.reducer
export const masterManufactureAction = slice.actions