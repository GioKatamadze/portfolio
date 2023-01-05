import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const techSlice = createSlice({
  name: "techs",
  initialState,
  reducers: {
    fetchTech: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const techReducer = techSlice.reducer;
export const techActions = techSlice.actions;
