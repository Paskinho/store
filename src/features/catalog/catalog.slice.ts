import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'catalog',
    initialState: {},
    reducers: {

    },
    extraReducers: {

    }
})


export const catalogReducer = slice.reducer
export const catalogThunks = {}
export const catalogActions = slice.actions