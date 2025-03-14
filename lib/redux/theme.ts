import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: "dark" | "light";
  newTaskModal: boolean;
  taskViewIsOpen: null | number;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: "dark",
  newTaskModal: false,
  taskViewIsOpen: null,
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
    toogleOpenTaskView(state, action: PayloadAction<number | null>) {
      state.taskViewIsOpen = action.payload;
    },
  },
});

export const {
  toggleSidebarStatus,
  toggleDarkmood,
  toggleOpenNewTaskModal,
  toogleOpenTaskView,
} = themeSlice.actions;
export default themeSlice.reducer;
