import { useState, useEffect } from "react";
import { baseURL } from "../config/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import ItemForm from "../components/ItemForm";
import styles from "./AddGearPage.module.css";
import toast from "react-hot-toast";
import PhotoModal from "../components/PhotoModal";

function AddGearPage() {
  const [isModal, setIsModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [photos, setPhotos] = useState([]);

  const submitHandler = (event, form) => {
    event.preventDefault();
    let isFormValid = true;
    console.log(form);
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        isFormValid = false;
        if (key === "gear_type_id") {
          toast.error("Please choose category!");
        } else {
          toast.error(`The field "${key}" is empty!`);
        }
      }
    });
    if (!isFormValid) return;

    axios
      .post(
        `${baseURL}gears/`,
        {
          ...form,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${getCookie()}`,
          },
        },
      )
      .then((response) => {
        setIsModal(true);
        setItemId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ItemForm submitHandler={submitHandler} />
      {isModal && (
        <PhotoModal
          setPhotos={setPhotos}
          itemId={itemId}
          photos={photos}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}

export default AddGearPage;
