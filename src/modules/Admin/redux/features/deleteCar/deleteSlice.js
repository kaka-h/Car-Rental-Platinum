import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteCar = createAsyncThunk("delete/deleteCar", async (id) => {
    const token = localStorage.getItem("token")

    const config = {
        headers: {
            access_token: token,
        }
    }
    const res = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, config)
    return res.data
})

const initialState = {
    list: [],
    loading: false,
    error: ""
}

export const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteCar.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteCar.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(deleteCar.rejected, (state) => {
            state.loading = false
            state.error = "delete failed"
        })
    }
})

export default deleteSlice.reducer
