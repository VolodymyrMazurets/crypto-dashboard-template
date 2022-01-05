import { createSlice } from "@reduxjs/toolkit";

export interface IUi {
  isSidebarOpen?: boolean;
}

const initialState: IUi = {
  isSidebarOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;

export default uiSlice.reducer;
