import { useQuery } from "@tanstack/react-query";
import { getGearTypes } from "../utils/getAll";
import styles from "./ItemForm.module.css";
import { useState } from "react";
import ItemFormExtraProperties from "./ItemFormExtraProperties";

function ItemForm({ changeHandler, submitHandler, properties, setProperties }) {
  const [categoryId, setCategoryId] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
    refetchOnMount: true,
    staleTime: 0,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data);

  const typeHandler = (event) => {
    const selectedCategory = event.target.value;
    setCategoryId(selectedCategory);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h1> Add your item here!</h1>
      <label htmlFor="category">Category</label>
      <select name="gear_type_id" id="category" onChange={typeHandler}>
        <option value="none">Category</option>
        {data?.data.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name} - {type.description}
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
      {categoryId && (
        <ItemFormExtraProperties
          properties={properties}
          setProperties={setProperties}
          data={data}
          categoryId={categoryId}
        />
      )}
      <button type="submit">Add Gear</button>
    </form>
  );
}

export default ItemForm;
