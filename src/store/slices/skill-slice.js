import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    fetchSkill: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const skillReducer = skillSlice.reducer;
export const skillActions = skillSlice.actions;
