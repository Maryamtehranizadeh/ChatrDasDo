import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [formData, setFormData] = useState({});
  const [queryObject, setQueryObject] = useState({});

  // const [queryObject, setQueryObject] = useState({
  //   name: "",
  //   gear_type: "",
  //   brand: "",
  //   model: "",
  //   location: "",
  //   sell_or_buy: "",
  // });

  return (
    <SearchContext.Provider
      value={{
        queryObject,
        setQueryObject,
        formData,
        setFormData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => useContext(SearchContext);

export { useSearch };
export default SearchProvider;
