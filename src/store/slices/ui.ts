import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHomeWidgets {
  positions: boolean;
  accountSummary: boolean;
  dailyPnl: boolean;
  watchlist: boolean;
  portfolio: boolean;
  marginRatio: boolean;
}

export interface IUi {
  isSidebarOpen: boolean;
  isOptionModalOpen: boolean;
  isFeaturesModalOpen: boolean;
  isAdjustModalVisible: boolean;
  isClosePositionModalOpen: boolean;
  homeWidgets: IHomeWidgets;
}

export type PayloadWidget = keyof IUi["homeWidgets"];

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
    disableHomeWidget: (state, action: PayloadAction<keyof IHomeWidgets>) => {
      state.homeWidgets[action.payload] = false;
    },
    enableHomeWidgets: (state, action: PayloadAction<IHomeWidgets>) => {
      state.homeWidgets = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleOptionModal,
  toggleFeaturesModal,
  toggleAdjustModal,
  toggleClosePositionModal,
  disableHomeWidget,
  enableHomeWidgets,
} = uiSlice.actions;

export default uiSlice.reducer;
