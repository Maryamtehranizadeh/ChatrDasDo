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

  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    properties: "",
    price: 0,
    currency: "",
  });

  const changeHandler = (event) => {
    setForm((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const { gear_type_id, name, brand, model, price, properties, currency } =
      form;

    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) {
        if (key === "gear_type_id") {
          toast.error("Please choose category!");
        } else {
          toast.error(`The field "${key}" is empty!`);
        }
      }
    });

    axios
      .post(
        `${baseURL}gears/`,
        {
          gear_type_id,
          name,
          brand,
          model,
          price,
          currency,
          properties,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${getCookie()}`,
          },
        }
      )
      .then((response) => {
        setIsModal(true);
        setItemId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   if (photos.length > 0) {
  //     console.log("Updated photos:", photos);
  //   }
  // }, [photos]);

  return (
    <div>
      <ItemForm
        form={form}
        setForm={setForm}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />

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
