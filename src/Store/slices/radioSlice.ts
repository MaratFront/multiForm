import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  radio: false,
};
const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    radioAction(state, action) {
      state.radio = action.payload;
    },
  },
});
export const { radioAction } = radioSlice.actions;
export default radioSlice.reducer;
