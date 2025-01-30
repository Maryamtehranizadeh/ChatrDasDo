import { useState, useEffect } from "react";
import { baseURL } from "../config/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import ItemForm from "../components/ItemForm";
import styles from "./AddGearPage.module.css";
import toast from "react-hot-toast";
import PhotoModal from "../components/PhotoModal";
import { useAuth } from "../context/AuthProvider";

function AddGearPage() {
  const [isModal, setIsModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [properties, setProperties] = useState({});
  const { loginToken } = useAuth();

  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    price: 0,
    currency: "",
    properties: {},
  });

  useEffect(() => {
    // console.log("Form updated:", form);
    // console.log("Properties updated:", properties);
  }, [form, properties]);

  for (let key in properties) {
    if (key in form) {
      delete form[key];
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    const { gear_type_id, name, brand, model, price, currency } = form;
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
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
      <ItemForm
        submitHandler={submitHandler}
        properties={properties}
        setProperties={setProperties}
        form={form}
        setForm={setForm}
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
