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

  return (
    <UserContext.Provider
      value={{ isLoggedIn: isLoggedIn, userData: userData }}
    >
      {children}
    </UserContext.Provider>
  );
}

//   if (isError || !data?.data) {
//     // console.log(error);
//     return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
//   }

//   const {
//     email,
//     country,
//     date_joined,
//     first_name,
//     is_certified_seller,
//     last_name,
//     last_updated,
//     phone_number,
//     username,
//   } = data?.data;
//   const userId = data?.data?.id || false;

//   return (
//     <UserContext.Provider
//       value={{
//         email,
//         country,
//         date_joined,
//         first_name,
//         is_certified_seller,
//         last_name,
//         last_updated,
//         phone_number,
//         username,
//         userId,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );

const useUser = () => useContext(UserContext);

export default UserProvider;
export { useUser };
