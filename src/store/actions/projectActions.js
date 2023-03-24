import {
  getProjects,
  getSingleProject,
} from "../../services/projectServices.js";
import { projectActions } from "../slices/project-slice.js";
import { singleProjectActions } from "../slices/single-project-slice.js";

export const fetchProject = () => {
  return async (dispatch) => {
    const fetchProjectsInfo = async () => {
      const response = await getProjects();
      return response.data;
    };

    try {
      const projects = await fetchProjectsInfo();
      dispatch(projectActions.fetchProject(projects));
    } catch (error) {}
  };
};

export const fetchSingleProject = (id) => {
  return async (dispatch) => {
    const fetchSingleProjectInfo = async () => {
      const response = await getSingleProject(id);
      return response.data;
    };

    try {
      const project = await fetchSingleProjectInfo();
      dispatch(singleProjectActions.fetchSingleProject(project));
    } catch (error) {}
  };
};
