import { createContext, useContext, useState } from "react";
import { setCookie, getCookie } from "../utils/cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loginToken, setLoginToken] = useState(getCookie());

  const login = (token) => {
    setCookie(token);
    setLoginToken(token);
  };
  const logout = () => {
    document.cookie = "airToken=; max-age=0";
    setLoginToken(null);
    // console.log(loginToken);
  };

  return (
    <AuthContext.Provider value={{ loginToken, setLoginToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);

export default AuthProvider;
export { useAuth };
