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

const login = createAppAsyncThunk<{profile: ProfileType}, ArgLoginType>('auth/login', async (arg, thunkAPI) => {
    const res = await authApi.login(arg)
    return {profile: res.data}
    // thunkTryCatch
})

const logout = createAppAsyncThunk('auth/me', async (arg, thunkAPI) => {
    const res = await authApi.logout()
    return {}
} )


export const authReducer = slice.reducer
export const authThunks = {login, logout}
export const authActions = slice.actions