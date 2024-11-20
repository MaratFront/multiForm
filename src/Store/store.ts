import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";
export const store = configureStore({
  reducer: {
    step: stepSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
