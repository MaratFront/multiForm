import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isConfirm: false,
};
const addConfirmSlice = createSlice({
  name: "addConfirm",
  initialState,
  reducers: {
    addConfirm: (state, action) => {
      state.isConfirm = action.payload;
    },
  },
});
export const { addConfirm } = addConfirmSlice.actions;
export default addConfirmSlice.reducer;
