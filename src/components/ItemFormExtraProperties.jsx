import React, { useState, useEffect } from "react";

function ItemFormExtraProperties({
  allTypes,
  categoryId,
  setProperties,
  initialProperties = {},
  properties,
}) {
  // console.log(initialProperties);
  const selectedCategory = allTypes?.find(
    (category) => category.id === categoryId,
  );

  const changeHandler = (event) => {
    setProperties((prevProp) => ({
      ...prevProp,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    // console.log(properties);
  }, [properties]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      {selectedCategory?.extra_properties?.map((extra_property) => (
        <div
          key={extra_property.name}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <label htmlFor={extra_property.name} style={{ width: "20%" }}>
            {extra_property.name} {!extra_property.required && "(Optional)"}
          </label>
          <input
            type={extra_property.type}
            name={extra_property.name}
            id={extra_property.name}
            value={properties[extra_property.name]}
            onChange={changeHandler}
          />
        </div>
      ))}
    </form>
  );
}

export default ItemFormExtraProperties;
