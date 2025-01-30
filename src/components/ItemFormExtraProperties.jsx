function ItemFormExtraProperties({
  allTypes,
  categoryId,
  properties,
  setProperties,
  form,
}) {
  const selectedCategory = allTypes?.find(
    (category) => category.id === categoryId,
  );

  return (
    <form
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
            onChange={(event) => {
              setProperties((prevProperties) => ({
                ...prevProperties,
                [extra_property.name]: event.target.value,
              }));
            }}
          />
        </div>
      ))}
    </form>
  );
}

export default ItemFormExtraProperties;
