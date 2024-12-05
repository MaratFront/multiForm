import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isErrors: false,
};
const formSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError(state, action) {
      state.isErrors = action.payload;
    },
    resetState(state) {
      state.isErrors = false;
    },
  },
});
export const { addError, resetState } = formSlice.actions;
export default formSlice.reducer; //export reducer to store.js file
