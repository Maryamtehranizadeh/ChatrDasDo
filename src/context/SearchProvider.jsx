import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [queryObject, setQueryObject] = useState({
    name: "",
    gear_type: "",
    brand: "",
    model: "",
    location: "",
    sell_or_buy: "",
  });

  return (
    <SearchContext.Provider value={{ queryObject, setQueryObject }}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => useContext(SearchContext);

export { useSearch };
export default SearchProvider;
