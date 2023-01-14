import instance from "./axios.js";

const getSkills = () => {
  return instance.get("/skills");
};

export default getSkills;
