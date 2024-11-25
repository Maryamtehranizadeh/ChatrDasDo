import { useState } from "react";
import { baseURL } from "../config/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm";

function AddGearPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    properties: "",
    price: 0,
    currency: "",
  });

  const changeHandler = (event) => {
    // console.log(event.target.value);
    setForm((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(form);
    const { gear_type_id, name, brand, model, price, properties, currency } =
      form;
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
        console.log(response);
        const itemId = response.data.id;
        console.log(itemId);
        navigate(`/itemdetails/${itemId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ItemForm
      form={form}
      setForm={setForm}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
}

export default AddGearPage;
