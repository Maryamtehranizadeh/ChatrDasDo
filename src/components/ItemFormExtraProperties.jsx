import React from "react";

function ItemFormExtraProperties({ data, categoryId }) {
  console.log(categoryId);
  console.log(data?.data);
  const selectedCategory = data?.data.find(
    (category) => category.id === categoryId
  );
  console.log(selectedCategory.extra_properties);

  
  return <div>ItemFormExtraProperties</div>;
}

export default ItemFormExtraProperties;
