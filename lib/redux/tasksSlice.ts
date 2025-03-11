import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  draggedTask: Task | null;
  tasks: Task[];
}
const initialState: InitialState = {
  draggedTask: null,
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    setActiveTask: (state, action: PayloadAction<Task | null>) => {
      state.draggedTask = action.payload ? action.payload : null;
    },
    changeTaskStatus: (state, action: PayloadAction<string>) => {
      const { draggedTask } = state;
      if (draggedTask) {
        state.tasks = state.tasks.map((task) =>
          task.id === draggedTask.id
            ? { ...task, status: action.payload }
            : task
        );
      }
    },
    changeToInprogress: (state, action: PayloadAction<string>) => {
      state.tasks.map((task) =>
        task.id === action.payload ? (task.status = "inprogress") : task
      );
    },
    changeToFinished: (state, action: PayloadAction<string>) => {
      state.tasks.map((task) =>
        task.id === action.payload ? (task.status = "finished") : task
      );
    },
    handleDeleteTask: (state, action: PayloadAction<string>) => {
      console.log("deleted");
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, status: "deleted" } : task
      );
    },

    addNewTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload);
    },
  },
});

export const {
  setActiveTask,
  changeTaskStatus,
  changeToInprogress,
  changeToFinished,
  handleDeleteTask,
  addNewTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
