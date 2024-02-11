import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarDetailOpen: true,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSidebarDetail: (state) => {
      state.isSidebarDetailOpen = !state.isSidebarDetailOpen;
    }
  },
});

export const { toggleSidebarDetail } = dashboardSlice.actions;
export default dashboardSlice.reducer;
