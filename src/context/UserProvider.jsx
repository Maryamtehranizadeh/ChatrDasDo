import { createContext, useContext } from "react";
import { getUser } from "../utils/getAll";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UserContext = createContext();

function UserProvider({ children }) {
  const { loginToken } = useAuth();
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
  let isLoggedIn = false;
  let userData = null;

  if (loginToken && !isError && data) {
    isLoggedIn = true;
    userData = data?.data;
  }
  //   if (isError) {
  //     console.log(error?.message);
  //   }

  return (
    <UserContext.Provider
      value={{ isLoggedIn: isLoggedIn, userData: userData }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export default UserProvider;
export { useUser };
