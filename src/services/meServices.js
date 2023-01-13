import instance from "./axios.js";

const getMes = () => {
  return instance.get("/mes");
};

export default getMes;
