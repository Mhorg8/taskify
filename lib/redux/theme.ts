import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebarStatus(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },

    toggleDarkmood(state) {
      state.darkmood = !state.darkmood;
    },
  },
});

export const { toggleSidebarStatus, toggleDarkmood } = themeSlice.actions;
export default themeSlice.reducer;
