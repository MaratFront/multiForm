import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";
import planSlice from "./slices/planSlice";
import radioSlice from "./slices/radioSlice";
import addOnsSlice from "./slices/addOnsSlice";
export const store = configureStore({
  reducer: {
    step: stepSlice,
    plan: planSlice,
    radio: radioSlice,
    addOns: addOnsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
