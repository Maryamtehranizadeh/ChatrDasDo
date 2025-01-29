import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGearTypes } from "../utils/getAll";

const TypeContext = createContext();

function TypeProvider({ children }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
    refetchOnMount: true,
    staleTime: 0,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  //   if (isError) {
  //     return <h3>Error: {error.message}</h3>;
  //   }
  //   console.log(data?.data);
  const allTypes = data?.data;
  //   console.log(allTypes);

  return (
    <TypeContext.Provider
      value={{
        allTypes,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
}

const useType = () => useContext(TypeContext);

export default TypeProvider;
export { useType };
