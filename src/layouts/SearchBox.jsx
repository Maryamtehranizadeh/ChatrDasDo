import { useType } from "../context/TypeProvider";
import { useSearch } from "../context/SearchProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const navigate = useNavigate();
  const { queryObject, setQueryObject } = useSearch();
  const [formData, setFormData] = useState({ name: "", gear_type: "" });

  const { allTypes } = useType();

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // setQueryObject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryObject(formData);
    navigate("/search");
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "var(--primary-color)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <form
        // onChange={changeHandler}
        onSubmit={submitHandler}
        style={{ display: "flex", alignItems: "baseline", marginLeft: "30px" }}
      >
        <input
          id="name"
          type="text"
          placeholder="Search"
          name="name"
          onChange={changeHandler}
        />
        <p
          style={{
            color: "var(--secondary-color)",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          in
        </p>
        <select
          onChange={changeHandler}
          name="gear_type"
          id="category"
          style={{ color: "var(--p-color)" }}
        >
          <option value="none">All Categories</option>
          {allTypes?.map((type) => (
            <option name="gear_type" key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <button type="submit" style={{ color: "var(--secondary-color)" }}>
          Search
        </button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "40px",
        }}
      >
        <select name="lang" id="lang">
          <option value="en">EN</option>
          <option value="pt">PT</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBox;
