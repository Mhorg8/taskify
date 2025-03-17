import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: "dark" | "light";
  newCardModal: boolean;
  taskViewIsOpen: null | number;
  addNewTaskModal: boolean;
  contextMenu: number | null;
  uploadChatDocument: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: "dark",
  newCardModal: false,
  taskViewIsOpen: null,
  addNewTaskModal: false,
  contextMenu: null,
  uploadChatDocument: false,
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
      state.newCardModal = !state.newCardModal;
    },
    toogleOpenTaskView(state, action: PayloadAction<number | null>) {
      state.taskViewIsOpen = action.payload;
    },
    toggleAddNewTask(state, action: PayloadAction<boolean>) {
      state.addNewTaskModal = action.payload;
    },
    toggleContextMenu(state, action: PayloadAction<number | null>) {
      state.contextMenu = action.payload ? action.payload : null;
    },
    toggleUploadDocument(state) {
      state.uploadChatDocument = !state.uploadChatDocument;
    },
  },
});

export const {
  toggleSidebarStatus,
  toggleDarkmood,
  toggleOpenNewTaskModal,
  toogleOpenTaskView,
  toggleAddNewTask,
  toggleContextMenu,
  toggleUploadDocument,
} = themeSlice.actions;
export default themeSlice.reducer;
