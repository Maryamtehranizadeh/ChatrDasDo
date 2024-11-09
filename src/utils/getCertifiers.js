import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "./cookie";
const getCertifiers = () => {
  return axios.get(`${baseURL}certifiers/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

export { getCertifiers };