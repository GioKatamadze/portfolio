import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const meSlice = createSlice({
  name: "mes",
  initialState,
  reducers: {
    fetchMes: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const meReducer = meSlice.reducer;
export const meActions = meSlice.actions;
