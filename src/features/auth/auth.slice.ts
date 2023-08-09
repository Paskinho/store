import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {ArgLoginType, authApi, ProfileType} from "./auth.api";

const authInitialState = {
    profile: null as ProfileType | null,
    password: null
    // unhandleActions: [] as string []
}

const slice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {

    }
});

const login = createAppAsyncThunk<{profile: any}, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
    const res = await authApi.login(arg)
    return {profile: res.data}
    // thunkTryCatch

})




export const authReducer = slice.reducer
export const authThunks = {login}
export const authActions = slice.actions