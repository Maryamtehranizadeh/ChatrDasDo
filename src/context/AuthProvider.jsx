import { createContext, useContext, useState, useEffect } from "react";
import { getCookie } from "../utils/cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loginToken, setLoginToken] = useState(getCookie());
  //   console.log(loginToken);

  const login = (token) => {
    document.cookie = `airToken=${token}; max-age=86400`;
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
