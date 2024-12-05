import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";
import planSlice from "./slices/planSlice";
import radioSlice from "./slices/radioSlice";
import addOnsCheckedSlice from "./slices/addOnsCheckedSlice";
import addOnsCardSlice from "./slices/addOnsCardsSlice";
import addConfirmSlice from "./slices/addConfirmSlice";
import formSlice from "./slices/formSlice";
export const store = configureStore({
  reducer: {
    step: stepSlice,
    plan: planSlice,
    radio: radioSlice,
    addOnsChecked: addOnsCheckedSlice,
    addOns: addOnsCardSlice,
    addConfirm: addConfirmSlice,
    form: formSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
