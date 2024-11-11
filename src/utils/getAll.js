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

const getWings = () => {
  return axios.get(`${baseURL}wings/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

const getCertificates = () => {
  return axios.get(`${baseURL}certificates/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};
export { getWings, getCertifiers, getCertificates };
