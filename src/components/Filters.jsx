import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../context/SearchProvider";

function Filters() {
  const { queryObject, setQueryObject, formData, setFormData } = useSearch();
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
    <div className="shadow-md bg-[var(--secondary-color)] rounded-2xl hover:shadow-2xl hover:shadow-[var(--primary-color)] hover:scale-105 transition-all duration-500 ease-in-out">
      <form className="p-4 m-4" onSubmit={submitHandler}>
        <label htmlFor="sell_or_buy">Sell or Buy</label>
        <select
          onChange={changeHandler}
          name="sell_or_buy"
          id="sell_or_buy"
          style={{ width: "100%" }}
        >
          <option value="buy">I want to buy </option>
          <option value="sell">I want to sell </option>
        </select>

        <label htmlFor="country">Country</label>
        <select
          onChange={changeHandler}
          id="country"
          name="country"
          className="w-full md:w-[254px] xl:w-[280px]"
        >
          <option value="">Location</option>
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
        <hr />
        <label htmlFor="model"> Model</label>
        <input
          onChange={changeHandler}
          id="model"
          type="text"
          name="model"
          style={{ width: "100%" }}
        />
        <label htmlFor="brand">Brand</label>
        <input
          onChange={changeHandler}
          id="brand"
          type="text"
          name="brand"
          style={{ width: "100%" }}
        />
        <label htmlFor="max_price">Maximum Price</label>
        <input
          onChange={changeHandler}
          type="text"
          name="max_price"
          style={{ width: "100%" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            color: "var(--secondary-color)",
            backgroundColor: "var(--primary-color)",
          }}
        >
          Search With Filters
        </button>
      </form>
    </div>
  );
}

export default Filters;
