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

const deleteGearPhoto = (gear_id, picture_id) => {
  return axios.delete(
    `${baseURL}gears/${gear_id}/pictures/${Number(picture_id)}/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie()}`,
      },
    },
  );
};

export { deleteGear, deleteGearPhoto };
