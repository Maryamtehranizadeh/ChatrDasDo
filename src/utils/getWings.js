import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "./cookie";
const getWings = () => {
  return axios.get(`${baseURL}wings/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

export { getWings };
