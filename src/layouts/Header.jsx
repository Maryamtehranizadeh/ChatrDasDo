import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useUser } from "../context/UserProvider";

function Header() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const { loginToken, logout } = useAuth();
  const user = useUser();
  const {
    email,
    country,
    date_joined,
    first_name,
    userId,
    is_certified_seller,
    last_name,
    last_updated,
    phone_number,
    username,
  } = user || {};

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
    <div className={styles.header}>
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
            <Link to={`/user/${userId}`}>
              <div>
                <img
                  src="/src/public/user.png"
                  alt="User"
                  style={{ height: "30px", width: "30px", margin: "auto" }}
                />
                {first_name && <p>{first_name}</p>}
              </div>
            </Link>
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
    </div>
  );
}

export default Header;
