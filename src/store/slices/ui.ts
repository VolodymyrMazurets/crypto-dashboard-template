import { createSlice } from "@reduxjs/toolkit";

export interface IUi {
  isSidebarOpen: boolean;
  isOptionModalOpen: boolean;
  isFeaturesModalOpen: boolean;
  isAdjustModalVisible: boolean;
}

const initialState: IUi = {
  isSidebarOpen: false,
  isOptionModalOpen: false,
  isFeaturesModalOpen: false,
  isAdjustModalVisible: false,
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
    toggleAdjustModal: (state) => {
      state.isAdjustModalVisible = !state.isAdjustModalVisible;
    },
  },
});

export const {
  toggleSidebar,
  toggleOptionModal,
  toggleFeaturesModal,
  toggleAdjustModal,
} = uiSlice.actions;

export default uiSlice.reducer;
