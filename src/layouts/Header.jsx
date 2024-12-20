import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCookie } from "../utils/cookie";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";

function Header() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const { loginToken, logout } = useAuth();

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
      <div>
        {loginToken ? (
          <>
            <button onClick={dashboardHandler}>Dashboard</button>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <Link to="/auth">
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
