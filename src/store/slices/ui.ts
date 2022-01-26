import { createSlice } from "@reduxjs/toolkit";

export interface IUi {
  isSidebarOpen: boolean;
  isOptionModalOpen: boolean;
  isFeaturesModalOpen: boolean;
}

const initialState: IUi = {
  isSidebarOpen: false,
  isOptionModalOpen: false,
  isFeaturesModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleOptionModal: (state) => {
      state.isOptionModalOpen = !state.isOptionModalOpen;
    },
    toggleFeaturesModal: (state) => {
      state.isFeaturesModalOpen = !state.isFeaturesModalOpen;
    },
  },
});

export const { toggleSidebar, toggleOptionModal, toggleFeaturesModal } =
  uiSlice.actions;

export default uiSlice.reducer;
