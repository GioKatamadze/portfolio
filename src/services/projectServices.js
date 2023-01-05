import instance from "./axios.js";

const getProjects = () => {
  return instance.get("/projects");
};

export default getProjects;
