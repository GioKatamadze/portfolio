import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-api-production-99be.up.railway.app/api",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
