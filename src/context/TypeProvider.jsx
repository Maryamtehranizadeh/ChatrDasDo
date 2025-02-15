import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGearTypes } from "../utils/getAll";
import Loader from "../components/Loader";

const TypeContext = createContext();

function TypeProvider({ children }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
    refetchOnMount: true,
    staleTime: 0,
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
    // return <h3>Error: {error.message}</h3>;
  }
  //   console.log(data?.data);
  const allTypes = data?.data;

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
