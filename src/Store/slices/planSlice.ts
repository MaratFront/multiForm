import { createSlice } from "@reduxjs/toolkit";
import React from "react";
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
      const { title, total, time } = action.payload;
      state.plan = title;
      state.total = total;
      state.time = time;
    },
  },
});
export const { addPlan } = planSlice.actions;
export default planSlice.reducer;
