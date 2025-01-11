import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCookie } from "../utils/cookie";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { getUser } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";

function Header() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
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
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  // console.log(data?.data.id);
  // console.log(data?.data.first_name);

  const logoutHandler = () => {
    logout();
    navigate("/auth");
  };
  const dashboardHandler = () => {
    if (loginToken) {
      setRefresh((prev) => !prev);
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <h2>
            Air Gear <span className={styles.logo}>| All in One</span>
          </h2>
        </Link>
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {loginToken ? (
          <>
            <button onClick={dashboardHandler}>Dashboard</button>
            <button onClick={logoutHandler}>Logout</button>
            <div>
              <img
                src="/src/public/user.png"
                alt="User"
                style={{ height: "30px", width: "30px", margin: "auto" }}
              />
              <p>{data?.data.first_name}</p>
            </div>
          </>
        ) : (
          <>
            <Link to="/auth">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
