import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: boolean;
  newTaskModal: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: false,
  newTaskModal: false,
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
    toggleOpenNewTaskModal(state) {
      state.newTaskModal = !state.newTaskModal;
    },
  },
});

export const { toggleSidebarStatus, toggleDarkmood , toggleOpenNewTaskModal } = themeSlice.actions;
export default themeSlice.reducer;
