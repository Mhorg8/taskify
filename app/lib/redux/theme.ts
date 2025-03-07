import { createSlice } from "@reduxjs/toolkit";
interface InitialState {}

const initialState: InitialState = {};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;
