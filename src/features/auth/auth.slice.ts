import {createSlice} from "@reduxjs/toolkit";

const authInitialState = {
    profile: null,
    password: null
    // unhandleActions: [] as string []
}

const slice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {

    }
});



export const authReducer = slice.reducer
export const authActions = slice.actions