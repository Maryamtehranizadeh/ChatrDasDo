import React, { useState, useEffect } from "react";

function ItemFormExtraProperties({
  allTypes,
  categoryId,
  setProperties,
  initialProperties = {},
}) {
  const selectedCategory = allTypes?.find(
    (category) => category.id === categoryId,
  );

  // Convert initialProperties into a state variable
  const [properties, setLocalProperties] = useState(initialProperties);

  // Sync state when initialProperties change
  useEffect(() => {
    setLocalProperties(initialProperties);
  }, [initialProperties]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);

    // Update local state for immediate UI response
    setLocalProperties((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update parent state to reflect changes globally
    setProperties((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
