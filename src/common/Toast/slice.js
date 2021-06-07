import { createSelector, createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isVisible : false,
    type: 'info',
    message: '',
    displayTime: 1000,
}

const reducers = {
    show: (state, { payload: { type, message, displayTime }}) => {
        state.isVisible = true;
        state.type = type;
        state.message = message;
        state.displayTime = displayTime;
    },
    hide: (state) => {
        state.isVisible = false;
        state.message = '';
        state.displayTime = 1000;
    }
}

const name = "TOAST"

const slice = createSlice({
    name,
    initialState,
    reducers
})

const selectVisibleState = createSelector(
    (state) => state.isVisible,
    (isVisible) => isVisible
)

const selectTypeState = createSelector(
    (state) => state.type,
    (type) => type
)

const selectMessageState = createSelector(
    (state) => state.message,
    (message) => message
)

const selectDisplayTimeState = createSelector(
    (state) => state.displayTime,
    (displayTime) => displayTime
)

const selectAllState = createSelector(
    selectVisibleState,
    selectTypeState,
    selectMessageState,
    selectDisplayTimeState,
    (isVisible, type, message, displayTime) => {
        return { isVisible, type, message, displayTime }
    }
)

export const toastSelector = {
    isVisible: (state) => selectVisibleState(state[TOAST]),
    type: (state) => selectTypeState(state[TOAST]),
    message: (state) => selectMessageState(state[TOAST]),
    displayTime: (state) => selectDisplayTimeState(state[TOAST]),
    all: (state) => selectAllState(state[TOAST])
}

export const TOAST = slice.name
export const toastReducer = slice.reducer
export const toastAction = slice.actions
