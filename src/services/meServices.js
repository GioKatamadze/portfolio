// import instance from "./axios.js";
import axios from "axios";

const getMes = () => {
  return axios.get(
    "https://portfolio-api-production-99be.up.railway.app/api/mes"
  );
};

export default getMes;
