import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detail/detailSlice";
import countdownReducer from "../features/countdownReducer/countdownSlice";
import bankReducer from "../features/bankReducer/bankSlice";

export const landingReducers = {
  detail: detailReducer,
  countdown: countdownReducer,
  bank: bankReducer
}

export const store = configureStore({
  reducer: landingReducers
})
