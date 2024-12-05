import axios from "axios";
import { getCookie } from "./cookie";
import { baseURL } from "../config/api";

const deleteGear = (id) => {
  return axios.delete(`${baseURL}gears/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getCookie()}`,
    },
  });
};

export { deleteGear };
