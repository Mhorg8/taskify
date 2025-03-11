import { staticTasks } from "@/constant";
import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  draggedTask: Task | null;
  tasks: Task[];
}
const initialState: InitialState = {
  draggedTask: null,
  tasks: staticTasks,
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
        // Map over tasks and update the status of the dragged task
        state.tasks = state.tasks.map((task) =>
          task.id === draggedTask.id
            ? { ...task, status: action.payload } // Update the status with the new one from the payload
            : task
        );
      }
    },
  },
});

export const { setActiveTask, changeTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
