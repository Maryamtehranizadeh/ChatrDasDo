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
  const { isLoggedIn, userData } = useUser();

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
    <header
      className="bg-[var(--primary-color)] text-[var(--secondary-color)] flex justify-between items-center p-6 md:p-8"
      // className={styles.header}
    >
      <div>
        <Link to="/" className="text-xl md:text-2xl font-bold">
          <h2>
            Air Gear <span className="hidden md:inline">| All in One</span>
          </h2>
        </Link>
      </div>
      <nav
        className="flex items-center"
        // className={styles.navbar}
      >
        <Navbar />
      </nav>
      <div className="flex items-center space-x-3">
        {loginToken ? (
          <>
            <button
              onClick={dashboardHandler}
              className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-md hover:opacity-80"
            >
              Dashboard
            </button>
            <button
              onClick={logoutHandler}
              className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-md hover:opacity-80"
            >
              Logout
            </button>
            <Link
              to={`/user/${userData?.id}`}
              className="flex flex-col items-center"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="/src/public/user.png"
                alt="User"
                // style={{ height: "30px", width: "30px", margin: "auto" }}
              />
              {userData && <p>{userData?.first_name}</p>}
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth">
              <button className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-md hover:opacity-80">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-md hover:opacity-80">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
