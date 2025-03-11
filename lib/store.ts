import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./redux/theme";
import tasksSlice from "@/lib/redux/tasksSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      tasks: tasksSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
