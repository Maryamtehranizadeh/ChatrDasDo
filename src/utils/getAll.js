import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "./cookie";

const getCertifiers = () => {
  return axios.get(`${baseURL}certifiers/`, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${getCookie()}`,
    },
  });
};

const getMyGears = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/?user=${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

const getAllGears = () => {
  return axios.get(`${baseURL}gears/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const searchedGears = (params) => {
  const objectToQueryParams = (queryObject) => {
    return Object.entries(queryObject)
      .filter(
        ([_, value]) => value !== undefined && value !== null && value !== "",
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");
  };
  const queryString = objectToQueryParams(params.queryKey[0]);
  return axios.get(`${baseURL}gears/?${queryString}`);
};

const getSpecificGear = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/?gear_type=${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getUser = () => {
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

const getCertificateDetails = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/${id}/certificates/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};
const getCertificatePhotos = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}certificates/${id}/pictures/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getGearTypes = () => {
  return axios.get(`${baseURL}gear-types/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getGearPhotos = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/${id}/pictures`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// this function did not work

const getItemDetails = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(`${baseURL}gears/${id}/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export {
  getMyGears,
  getCertifiers,
  getCertificates,
  getGearTypes,
  getGearPhotos,
  getItemDetails,
  getUser,
  getAllGears,
  getSpecificGear,
  searchedGears,
  getCertificateDetails,
  getCertificatePhotos,
};
