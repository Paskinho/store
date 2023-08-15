import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {cartApi} from "./сart.api";

const slice = createSlice({
    name: 'catalog',
    initialState: {},
    reducers: {

    },
    extraReducers: {

    }
})

// const getCatalog = createAppAsyncThunk<{catalog: any}>('catalog', async ()=> {
//     const res = await cartApi.getCatalog()
//     return {catalog: res.data}
// })




export const catalogReducer = slice.reducer
export const catalogThunks = {}
export const catalogActions = slice.actions