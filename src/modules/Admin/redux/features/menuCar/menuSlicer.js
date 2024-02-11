import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMenu = createAsyncThunk("menu/listmenu", async ({ carTitle, category } = { carTitle: null, category: null }) => {
    const params = {
        pageSize: 100000
    }
    if (carTitle) {
        params.name = carTitle
    }
    if (category) {
        params.category = category
    }
    const res = await axios.get('https://api-car-rental.binaracademy.org/customer/v2/car', { params: params })
    return res.data
})

const initialState = {
    list: [],
    loading: false,
    error: ""

}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenu.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.list = action.payload.cars
        })
    }
})
export default menuSlice.reducer
