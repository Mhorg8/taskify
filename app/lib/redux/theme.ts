import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebarStatus(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },
});

export const {toggleSidebarStatus} = themeSlice.actions;
export default themeSlice.reducer;
