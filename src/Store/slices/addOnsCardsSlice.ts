import { createSlice } from "@reduxjs/toolkit";
const initialState: any = [];
const addOnsSlice = createSlice({
  name: "addOnsData",
  initialState,
  reducers: {
    addOnsData(state, action) {
      const { id, title, text, total } = action.payload;
      state.push({ id, title, text, total });
    },
    addDeleteData(state, action) {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
  },
});
export const { addOnsData, addDeleteData } = addOnsSlice.actions;
export default addOnsSlice.reducer;
