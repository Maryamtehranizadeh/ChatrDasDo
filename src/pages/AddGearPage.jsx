import { useState } from "react";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";
import axios from "axios";
import styles from "./AddGearPage.module.css";

function AddGearPage() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    explanation: "",
    price: 0,
    currency: "",
    photo: null,
    user: "",
  });
  const changeHandler = (event) => {
    if (event.target.name !== "photo") {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const requestData = {
      name: form.name,
      brand: form.brand,
      price: Number(form.price),
      currency: form.currency,
      user: form.user,
    };
    console.log(requestData);
    axios
      .post(`${baseURL}wings/`, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie()}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h1> Add your item here!</h1>
      <label htmlFor="name">Name of the wing, instrument, etc</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" />
      <label htmlFor="explanation">More about the item</label>
      <textarea type="text" id="explanation" name="explanation" />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />
      <label htmlFor="currency">Currency</label>
      <select name="currency" id="currency">
        <option value="none"></option>
        <option name="EUR">EUR</option>
        <option name="GBP">GBP</option>
        <option name="USD">USD</option>
      </select>
      <label htmlFor="photo">Photo</label>
      <input type="file" id="photo" name="photo" />
      <label htmlFor="user">User</label>
      <input type="text" id="user" name="user" />
      <button type="submit">Add Gear</button>
    </form>
  );
}

export default AddGearPage;
