import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  sidebarStatus: boolean;
  darkmood: "dark" | "light";
  newCardModal: boolean;
  taskViewIsOpen: null | string;
  addNewTaskModal: boolean;
  contextMenu: number | null;
  uploadChatDocument: boolean;
  notificationModalStatus: boolean;
  addNewMemberModal: boolean;
  profileDropdown: boolean;
}

const initialState: InitialState = {
  sidebarStatus: false,
  darkmood: "dark",
  newCardModal: false,
  taskViewIsOpen: null,
  addNewTaskModal: false,
  contextMenu: null,
  uploadChatDocument: false,
  notificationModalStatus: false,
  addNewMemberModal: false,
  profileDropdown: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebarStatus(state) {
      state.notificationModalStatus = false;
      state.sidebarStatus = !state.sidebarStatus;
    },

    toggleDarkmood(state, action: PayloadAction<"dark" | "light">) {
      state.darkmood = action.payload;
      state.notificationModalStatus = false;
    },
    toggleOpenNewTaskModal(state) {
      state.newCardModal = !state.newCardModal;
    },
    toogleOpenTaskView(state, action: PayloadAction<string | null>) {
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
    toggleNotificationModal(state) {
      state.notificationModalStatus = !state.notificationModalStatus;
    },
    toggleAddNewMemberModal(state, action: PayloadAction<boolean>) {
      state.addNewMemberModal = action.payload;
    },
    toggleProfileDropdowm(state, action: PayloadAction<boolean>) {
      state.profileDropdown = action ? action.payload : !state.profileDropdown;
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
  toggleNotificationModal,
  toggleAddNewMemberModal,
  toggleProfileDropdowm,
} = themeSlice.actions;
export default themeSlice.reducer;
