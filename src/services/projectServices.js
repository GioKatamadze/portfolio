import instance from "./axios.js";

export const getProjects = () => {
  return instance.get("/projects");
};

export const getSingleProject = (id) => {
  return instance.get("/projects/" + id);
};
