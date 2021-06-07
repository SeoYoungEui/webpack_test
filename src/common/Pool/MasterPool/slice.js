import { createSelector, createSlice } from '@reduxjs/toolkit'
import * as _ from 'lodash'

export const initialState = {
    itemPool: {},
    productPool: {},
    materialPool: {},
    toolPool: {},
    partPool: {},
    processPool: {},
    userPool: {},
    companyPool: {},

    isLoading: false,
    error: null,
}

const reducers = {
    itemLoad: (state) => {
        state.isLoading = true
    },
    itemLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.itemPool = list
    },
    itemLoadFail: (state, { payload: { error }}) => {
        state.isLoading = false
        state.error = error
    },
    productLoad: (state) => {
        state.isLoading = true
    },
    productLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.productPool = list;
    },
    productLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    materialLoad: (state) => {
        state.isLoading = true
    },
    materialLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.materialPool = list;
    },
    materialLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    toolLoad: (state) => {
        state.isLoading = true
    },
    toolLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.toolPool = list
    },
    toolLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    partLoad: (state) => {
        state.isLoading = true
    },
    partLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.partPool = list
    },
    partLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    processLoad: (state) => {
        state.isLoading = true
    },
    processLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.processPool = list
    },
    processLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    userLoad: (state) => {
        state.isLoading = true
    },
    userLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.userPool = list
    },
    userLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
    companyLoad: (state) => {
        state.isLoading = true
    },
    companyLoadSuccess: (state, { payload: { list }}) => {
        state.isLoading = false
        state.companyPool = list
    },
    companyLoadFail:(state, { payload: error }) => {
        state.isLoading = false
        state.error = error
    },
}

const name = 'MASTER_POOL'

const slice = createSlice({
    name,
    initialState,
    reducers
})

const selectItemPoolState = createSelector(
    (state) => state.itemPool,
    (itemPool) => itemPool
)

const selectProductPoolState = createSelector(
    (state) => state.productPool,
    (productPool) => productPool
)

const selectMaterialPoolState = createSelector(
    (state) => state.materialPool,
    (materialPool) => materialPool
)

const selectToolPoolState = createSelector(
    (state) => state.toolPool,
    (toolPool) => toolPool
)

const selectPartPoolState = createSelector(
    (state) => state.partPool,
    (partPool) => partPool
)

const selectProcessPoolState = createSelector(
    (state) => state.procPool,
    (procPool) => procPool
)

const selectUserPoolState = createSelector(
    (state) => state.userPool,
    (userPool) => userPool
)

const selectCompanyPoolState = createSelector(
    (state) => state.companyPool,
    (companyPool) => companyPool
)

const selectAllState = createSelector(
    selectItemPoolState,
    selectProductPoolState,
    selectMaterialPoolState,
    selectToolPoolState,
    selectPartPoolState,
    selectProcessPoolState,
    selectUserPoolState,
    selectCompanyPoolState,
    (itemPool, productPool, materialPool, toolPool, partPool, processPool, userPool, companyPool) => {
        return { itemPool, productPool, materialPool, toolPool, partPool, processPool, userPool, companyPool }
    }
)

export const masterPoolSelector = {
    itemPool: (state) => selectItemPoolState(state[MASTER_POOL]),
    productPool: (state) => selectProductPoolState(state[MASTER_POOL]),
    materialPool: (state) => selectMaterialPoolState(state[MASTER_POOL]),
    toolPool: (state) => selectToolPoolState(state[MASTER_POOL]),
    partPool: (state) => selectPartPoolState(state[MASTER_POOL]),
    processPool: (state) => selectProcessPoolState(state[MASTER_POOL]),
    userPool: (state) => selectUserPoolState(state[MASTER_POOL]),
    companyPool: (state) => selectCompanyPoolState(state[MASTER_POOL]),
    all : (state) => selectAllState(state[MASTER_POOL])
}

export const MASTER_POOL = slice.name
export const masterPoolReducer = slice.reducer
export const masterPoolAction = slice.actions