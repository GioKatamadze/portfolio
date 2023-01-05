import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProject: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const projectReducer = projectSlice.reducer;
export const projectActions = projectSlice.actions;
