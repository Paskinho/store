import {createSlice} from "@reduxjs/toolkit";

const appInitialState = {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false,
    // unhandleActions: [] as string []
}



const slice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {

    }
})