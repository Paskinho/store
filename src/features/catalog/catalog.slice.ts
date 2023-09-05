import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {catalogApi} from "./catalog.api";

const slice = createSlice({
    name: 'catalog',
    initialState: {},
    reducers: {

    },
    extraReducers: {

    }
})

const getCatalog = createAppAsyncThunk<{catalog: any}>('catalog', async ()=> {
    const res = await catalogApi.getCatalog()
    return {catalog: res.data}
})


const addToCart = () => {


}


export const catalogReducer = slice.reducer
export const catalogThunks = {getCatalog}
export const catalogActions = slice.actions