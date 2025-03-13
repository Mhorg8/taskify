import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: "dark" | "light";
  newTaskModal: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: "dark",
  newTaskModal: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebarStatus(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },

    toggleDarkmood(state, action: PayloadAction<"dark" | "light">) {
      state.darkmood = action.payload;
    },
    toggleOpenNewTaskModal(state) {
      state.newTaskModal = !state.newTaskModal;
    },
  },
});

export const { toggleSidebarStatus, toggleDarkmood, toggleOpenNewTaskModal } =
  themeSlice.actions;
export default themeSlice.reducer;
