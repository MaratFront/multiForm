import { createSlice } from "@reduxjs/toolkit";
const initialState: number = 1;
const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    addStep: (state: number, action) => {
      return (state += action.payload);
    },
    currentStep: (state: number, action) => {
      return (state -= action.payload);
    },
  },
});
export default stepSlice.reducer;
export const { addStep, currentStep } = stepSlice.actions;
