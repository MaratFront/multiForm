import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  inputValue: "",
};
const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInput(state, action) {
      state.inputValue = action.payload;
    },
  },
});
export const { addInput } = inputSlice.actions;
export default inputSlice.reducer;
