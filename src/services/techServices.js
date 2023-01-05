import instance from "./axios.js";

const getTechs = () => {
  return instance.get("/techs");
};

export default getTechs;
