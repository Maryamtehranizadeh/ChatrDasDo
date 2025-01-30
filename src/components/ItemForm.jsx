import styles from "./ItemForm.module.css";
import { useState, useEffect } from "react";
import ItemFormExtraProperties from "./ItemFormExtraProperties";
import { useType } from "../context/TypeProvider";
import { useAuth } from "../context/AuthProvider";

function ItemForm({
  submitHandler,
  properties,
  setProperties,
  initialData = {},
}) {
  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    model: "",
    price: 0,
    currency: "",
    properties: {},
    ...initialData,
  });
  const [categoryId, setCategoryId] = useState("");
  const { allTypes } = useType();
  const { loginToken } = useAuth();

  const typeHandler = (event) => {
    const selectedCategory = event.target.value;
    setCategoryId(selectedCategory);
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, ...initialData })); // Update form when initialData changes
  }, [initialData]);

  const gearTypeName = allTypes?.find((type) => type.id === form?.gear_type);

  const changeHandler = (event) => {
    if (!loginToken)
      return toast.error("In order to place an add please login");
    setForm((prevForm) => ({
      ...prevForm,
      properties,
      [event.target.name]: event.target.value,
    }));
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
        <option value="none">{gearTypeName?.name || "Category"}</option>
        {allTypes?.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name} - {type.description}
          </option>
        ))}
      </select>
      <label htmlFor="name">Name of the wing, instrument, etc</label>
      <input type="text" id="name" name="name" value={form?.name || ""} />
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" value={form?.brand || ""} />
      <label htmlFor="model">Model</label>
      <input type="text" name="model" id="model" value={form?.model || ""} />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" value={form?.price || ""} />
      <label htmlFor="currency">Currency</label>
      <select name="currency" id="currency">
        <option value="none">{form?.currency || ""}</option>
        <option name="EUR">EUR</option>
        <option name="GBP">GBP</option>
        <option name="IRR">IRR</option>
        <option name="USD">USD</option>
      </select>
      {categoryId && (
        <ItemFormExtraProperties
          properties={properties}
          setProperties={setProperties}
          allTypes={allTypes}
          categoryId={categoryId}
          form={form}
        />
      )}
      <button type="submit">Add Gear</button>
    </form>
  );
}

export default ItemForm;
