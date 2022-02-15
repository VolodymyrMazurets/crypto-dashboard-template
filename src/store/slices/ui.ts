import { createSlice } from "@reduxjs/toolkit";

export interface IUi {
  isSidebarOpen: boolean;
  isOptionModalOpen: boolean;
  isFeaturesModalOpen: boolean;
  isAdjustModalVisible: boolean;
  isClosePositionModalOpen: boolean;
  homeWidgets: {
    positions: boolean;
    accountSummary: boolean;
    dailyPnl: boolean;
    watchlist: boolean;
    portfolio: boolean;
    marginRatio: boolean;
  };
}

const initialState: IUi = {
  isSidebarOpen: false,
  isOptionModalOpen: false,
  isFeaturesModalOpen: false,
  isAdjustModalVisible: false,
  isClosePositionModalOpen: false,
  homeWidgets: {
    positions: true,
    accountSummary: true,
    dailyPnl: true,
    watchlist: true,
    portfolio: true,
    marginRatio: true,
  },
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
    toggleClosePositionModal: (state) => {
      state.isClosePositionModalOpen = !state.isClosePositionModalOpen;
    },
  },
});

export const {
  toggleSidebar,
  toggleOptionModal,
  toggleFeaturesModal,
  toggleAdjustModal,
  toggleClosePositionModal,
} = uiSlice.actions;

export default uiSlice.reducer;
