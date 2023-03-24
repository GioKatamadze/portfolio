import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      project_id: 0,
      title: "",
      live_link: "",
      front_link: "",
      back_link: "",
      tech_name: [],
      tech_icon: [],
      thumbnail: "",
      content: [],
    },
  ],
};

const singleProjectSlice = createSlice({
  name: "single project",
  initialState,
  reducers: {
    fetchSingleProject: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const singleProjectReducer = singleProjectSlice.reducer;
export const singleProjectActions = singleProjectSlice.actions;
