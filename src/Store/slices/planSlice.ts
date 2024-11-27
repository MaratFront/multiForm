import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  plan: "Arcade",
  total: "$9/mo",
  time: "Monthly",
};
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    addPlan(state, action) {
      const { title, text, time } = action.payload;
      state.plan = title;
      state.total = text;
      state.time = time;
    },
  },
});
export const { addPlan } = planSlice.actions;
export default planSlice.reducer;
