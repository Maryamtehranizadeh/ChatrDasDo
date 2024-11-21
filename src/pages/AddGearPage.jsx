import { useState } from "react";
import { baseURL } from "../config/api";
import axios from "axios";
import styles from "./AddGearPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { getGearTypes } from "../utils/getAll";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

function AddGearPage() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    properties: "",
    price: 0,
    currency: "",
    // photo: null,
  });
  const changeHandler = (event) => {
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
        console.log(response.data.id);
        const itemId = response.data.id;
        console.log(itemId);
        navigate(`/itemdetails/${itemId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h1> Add your item here!</h1>
      <label htmlFor="category">Category</label>
      <select name="gear_type_id" id="category">
        <option value="none">Category</option>
        {data?.data.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
      <label htmlFor="name">Name of the wing, instrument, etc</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" />
      <label htmlFor="model">Model</label>
      <input type="text" name="model" id="model" />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />
      <label htmlFor="currency">Currency</label>
      <select name="currency" id="currency">
        <option value="none"></option>
        <option name="EUR">EUR</option>
        <option name="GBP">GBP</option>
        <option name="IRR">IRR</option>
        <option name="USD">USD</option>
      </select>
      <label htmlFor="properties">More about the item</label>
      <textarea type="text" id="properties" name="properties" />
      {/* <label htmlFor="photo">Photo</label>
      <input type="file" id="photo" name="photo" /> */}
      <button type="submit">Add Gear</button>
    </form>
  );
}

export default AddGearPage;
