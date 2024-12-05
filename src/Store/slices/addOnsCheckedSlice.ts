import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedItems: [] as string[], // Массив для хранения всех активных чекбоксов
};

const addOnsCheckedSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    toggleChecked: (state, action) => {
      const id = action.payload;
      if (state.checkedItems.includes(id)) {
        // Если ID уже есть, удаляем его (снимаем галочку)
        state.checkedItems = state.checkedItems.filter((item) => item !== id);
      } else {
        // Иначе добавляем ID (ставим галочку)
        state.checkedItems.push(id);
      }
    },
  },
});

export default addOnsCheckedSlice.reducer;
export const { toggleChecked } = addOnsCheckedSlice.actions;
