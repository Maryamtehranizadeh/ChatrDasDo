import { createContext, useContext, useState, useEffect } from "react";
import { getCookie } from "../utils/cookie";
import { getUser } from "../utils/getAll";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UserContext = createContext();

function UserProvider({ children }) {
  const { loginToken, logout } = useAuth();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnMount: true,
    staleTime: 0,
    enabled: !!loginToken,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  // if (isError) {
  //   return <h2>Error: {error.message}</h2>;
  // }
  //   console.log(data?.data.id);
  //   console.log(data?.data);

  const loggedUser = data?.data.username;
  const loggedEmail = data?.data.email;
  const loggedFirstName = data?.data.first_name;
  const loggedId = data?.data.id;

  return (
    <UserContext.Provider value={{ loggedEmail, loggedUser, loggedId }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export default UserProvider;
export { useUser };
