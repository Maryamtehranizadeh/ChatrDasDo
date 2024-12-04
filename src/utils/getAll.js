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
  return axios.get(`${baseURL}gears/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

const getUsers = () => {
  return axios.get(`${baseURL}users/`, {
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

const getGearTypes = () => {
  return axios.get(`${baseURL}gear-types/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

const getGearPhotos = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/${id}/pictures`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};
// this function did not work

const getItemDetails = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

export {
  getWings,
  getCertifiers,
  getCertificates,
  getGearTypes,
  getGearPhotos,
  getItemDetails,
  getUsers,
};
