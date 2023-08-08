import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        setIsLoading: (state, action: PayloadAction<{ iaLoading: boolean }>) => {
            state.isLoading = action.payload.iaLoading
        },
        setError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        }
    },
    extraReducers: {

    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions