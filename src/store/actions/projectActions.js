import getProjects from "../../services/projectServices.js";
import { projectActions } from "../slices/project-slice.js";

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
