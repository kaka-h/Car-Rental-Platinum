import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const dataChart = createAsyncThunk("dashboard/dataChart", async (params = { from: "2022-01-01`", until: "2022-01-31" }) => {
    const token = localStorage.getItem("access_token")
    const config = {
        headers: {
            "Content-type": "multipart/form-data",
            "access_token": `${token}`,
        },
    };
    const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/order/reports?from=2022-01-01%60&until=2022-01-31`, config)
    return res.data
})
