import { configureStore } from "@reduxjs/toolkit";
import menusliceReducer from "./features/menuCar/menuSlicer"
import deleteSlice from "./features/deleteCar/deleteSlice";
import { addSlice } from "./features/addCar/addSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";

export const adminReducers = {
    menuCar: menusliceReducer,
    deleteCar: deleteSlice,
    addCar: addSlice,
    dashboard: dashboardSlice
}
export const store = configureStore({
    reducer: adminReducers
})
