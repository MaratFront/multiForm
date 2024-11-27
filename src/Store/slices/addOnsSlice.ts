import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isChecked: false,
};
const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    addChecked: (state, action) => {
      state.isChecked = action.payload;
    },
  },
});
export default addOnsSlice.reducer;
export const { addChecked } = addOnsSlice.actions;
