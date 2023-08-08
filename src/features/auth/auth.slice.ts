import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";

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

// const login = createAppAsyncThunk<{profile: any}>('auth/login', async () => {
//     return
//     // thunkTryCatch
//
// })




export const authReducer = slice.reducer
export const authActions = slice.actions