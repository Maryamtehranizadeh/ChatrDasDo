import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../context/SearchProvider";

function Filters() {
  const { queryObject, setQueryObject, formData, setFormData } = useSearch();
  // console.log(queryObject);
  const fetchCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response?.data;
  };
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const changeHandler = (e) => {
    if (e.target.name === "country") {
      const selectedCountry = countries.find(
        (country) => country.cca2 === e.target.value,
      );
      setFormData((prev) => ({ ...prev, country: selectedCountry.cca3 }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryObject(formData);
    console.log(queryObject);
  };

  return (
    <div>
      <form className="p-4 m-4" onSubmit={submitHandler}>
        <select
          onChange={changeHandler}
          name="sell_or_buy"
          id="sell_or_buy"
          style={{ width: "100%" }}
        >
          <option value="buy">I want to buy </option>
          <option value="sell">I want to sell </option>
        </select>

        <select
          onChange={changeHandler}
          id="country"
          name="country"
          style={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <option value="">Country</option>
          {countries
            ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => (
              <option
                key={country.cca2}
                value={country.cca2}
                placeholder="Country"
              >
                {country.flag} {country.name.common}
              </option>
            ))}
        </select>
        <input
          onChange={changeHandler}
          type="text"
          name="model"
          placeholder="Model"
          style={{ width: "100%" }}
        />
        <input
          onChange={changeHandler}
          type="text"
          name="brand"
          placeholder="Brand"
          style={{ width: "100%" }}
        />
        <input
          onChange={changeHandler}
          type="text"
          name="price"
          placeholder="Price"
          style={{ width: "100%" }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Search With Filters
        </button>
      </form>
    </div>
  );
}

export default Filters;
