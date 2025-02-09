import styles from "./ItemForm.module.css";
import { useState, useEffect } from "react";
import ItemFormExtraProperties from "./ItemFormExtraProperties";
import { useType } from "../context/TypeProvider";
import { useAuth } from "../context/AuthProvider";

function ItemForm({ submitHandler, initialData = {}, initialProperties = {} }) {
  const [properties, setProperties] = useState({
    color: "",
    weight: "",
    // certificate: "",
    ...initialProperties,
  });
  const [form, setForm] = useState({
    gear_type_id: "",
    name: "",
    brand: "",
    model: "",
    price: 0,
    currency: "",
    properties: {
      color: "",
      weight: "",
      // certificate: "",
      ...initialProperties,
    },
    ...initialData,
  });
  const [categoryId, setCategoryId] = useState("");
  const { allTypes } = useType();
  const { loginToken } = useAuth();
  const gearTypeName = allTypes?.find((type) => type.id === form?.gear_type_id);
  const typeHandler = (event) => {
    const selectedCategory = event.target.value;
    setCategoryId(selectedCategory);
    setForm((prev) => ({ ...prev, gear_type_id: selectedCategory }));
  };
  useEffect(() => {
    setForm((prevForm) => {
      if (JSON.stringify(prevForm.properties) === JSON.stringify(properties)) {
        return prevForm; // Prevent unnecessary re-renders
      }
      return { ...prevForm, properties };
    });
    // console.log(properties);
    // console.log(form);
  }, [form, properties]);

  const changeHandler = (event) => {
    if (!loginToken)
      return toast.error("In order to place an add please login");
    setForm((prevForm) => ({
      ...prevForm,
      properties,
      [event.target.name]: event.target.value,
    }));
    setForm((form) => ({ ...form, properties }));
  };
  console.log(initialData);
  // console.log(initialProperties);

  // let typeToEdit;
  // if (initialData?.gear_type === "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c") {
  //   typeToEdit = "Wing";
  // } else if (
  //   initialData?.gear_type === "49e81219-2646-44e2-b36c-3316ff0d26d3"
  // ) {
  //   typeToEdit = "Instrument";
  // } else {
  //   typeToEdit = "Harness";
  // }

  return (
    <form
      onChange={changeHandler}
      onSubmit={(e) => submitHandler(e, form)}
      className={styles.form}
    >
      <h1>
        {" "}
        {Object.keys(initialData).length === 0
          ? "Add Your Item"
          : "Update Your Gear Details"}
      </h1>
      <label htmlFor="category">Category</label>
      <select name="gear_type" id="category" onChange={typeHandler}>
        <option value="none">Category</option>
        {allTypes?.map((type) => (
          <option key={type.id} value={initialData.gear_type_id || type.id}>
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
          setProperties={setProperties}
          allTypes={allTypes}
          categoryId={categoryId}
          initialProperties={initialProperties}
          properties={properties}
        />
      )}
      <button type="submit">
        {Object.keys(initialData).length === 0 ? "Add Gear" : "Update Gear"}
      </button>
    </form>
  );
}

export default ItemForm;
