import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addCar = createAsyncThunk("add/addCar", async () => {
    const res = await axios.post("https://api-car-rental.binaracademy.org/admin/car")
    return res.data
})

const initialState = {
    list: [],
    loading: false,
    error: ""
}

export const addSlice = createSlice({
    name: "add",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCar.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addCar.fulfilled, (state) => {
            state.loading = false
            state.list = action.payload

        })
    }
})
export default addSlice.reducer
