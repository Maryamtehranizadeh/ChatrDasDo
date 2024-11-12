import { useState } from "react";

function AddWingPage() {
  const [form, setForm] = useState({
    wingName: "",
    brand: "",
    explanation: "",
    price: "",
    currency: null,
    photo: null,
  });
  const changeHandler = () => {
    console.log("change");
  };
  const submitHandler = () => {
    console.log("submit");
  };
  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1> Add your wing here!</h1>
      <label htmlFor="wingName">Name of the wing</label>
      <input type="text" id="wingName" va name="wingName" />
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" />
      <label htmlFor="explanation">More about the wing</label>
      <textarea type="text" id="explanation" name="explanation" />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />
      <select name="Currency" id="currency">
        <option value="EUR"></option>
        <option value="GBP"></option>
        <option value="USD"></option>
      </select>
      <label htmlFor="photo">Photo</label>
      <input type="file" id="photo" name="photo" />
      <button type="submit">Add Wing</button>
    </form>
  );
}

export default AddWingPage;
