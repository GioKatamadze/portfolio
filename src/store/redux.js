import { configureStore } from "@reduxjs/toolkit";
import { meReducer } from "./slices/me-slice.js";
import { techReducer } from "./slices/tech-slice.js";
import { skillReducer } from "./slices/skill-slice.js";
import { projectReducer } from "./slices/project-slice.js";
import { singleProjectReducer } from "./slices/single-project-slice.js";

const store = configureStore({
  reducer: {
    singleProject: singleProjectReducer,
    projects: projectReducer,
    techs: techReducer,
    skills: skillReducer,
    mes: meReducer,
  },
});

export default store;
