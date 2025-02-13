import { useType } from "../context/TypeProvider";
import { useSearch } from "../context/SearchProvider";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const { setQueryObject, formData, setFormData } = useSearch();
  const { allTypes } = useType();

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQueryObject(formData);
    navigate("/search");
  };

  return (
    <div className="w-full bg-[var(--primary-color)] flex flex-col md:flex-row items-baseline justify-between p-4 md:p-6">
      <form
        className="flex flex-col  md:flex-row items-center  md:space-x-3 w-full md:w-auto"
        onSubmit={submitHandler}
      >
        <input
          id="name"
          type="text"
          placeholder="Search"
          name="name"
          onChange={changeHandler}
          className=" text-sm px-4 py-2 m-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] w-full md:w-auto"
        />
        <p className="text-[var(--secondary-color)] md:mx-3">in</p>
        <select
          onChange={changeHandler}
          name="gear_type"
          id="category"
          className="text-sm text-[var(--p-color)] border border-[var(--border-color)] px-4 py-2 m-3  rounded-md w-full md:w-auto"
        >
          <option value="none">All Categories</option>
          {allTypes?.map((type) => (
            <option name="gear_type" key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <button
          className="text-lg bg-[var(--primary-color)] text-[var(--secondary-color)] px-4 py-2 rounded-md hover:opacity-80 w-full md:w-auto"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="mt-3 mr-4 md:mt-0 text-[var(--secondary-color)]">
        <select
          name="lang"
          id="lang"
          className="border-none bg-[var(--primary-color)]"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="pt">🇵🇹 PT</option>
          <option value="es">🇪🇸 ES</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBox;
