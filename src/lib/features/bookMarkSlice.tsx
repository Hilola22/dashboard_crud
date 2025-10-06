import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../api/hooks/useStudent";

interface IUserSaves {
  value: IUser[];
}

const initialState: IUserSaves = {
  value: JSON.parse(localStorage.getItem("bookmark") || "[]") || [],
};

export const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleSave: (state, action: PayloadAction<IUser>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value.splice(index, 1);
      }
      localStorage.setItem("bookmark", JSON.stringify(state.value));
    },
  },
});

export const { toggleSave } = bookMarkSlice.actions;

export default bookMarkSlice.reducer;
