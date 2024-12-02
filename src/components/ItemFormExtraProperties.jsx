import { Label } from "@headlessui/react";
import React from "react";

function ItemFormExtraProperties({ data, categoryId }) {
  console.log(categoryId);
  console.log(data?.data);
  const selectedCategory = data?.data.find(
    (category) => category.id === categoryId
  );
  console.log(selectedCategory.extra_properties);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      {selectedCategory.extra_properties.map((extra_property) => (
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
          />
        </div>
      ))}
    </div>
  );
}

export default ItemFormExtraProperties;
