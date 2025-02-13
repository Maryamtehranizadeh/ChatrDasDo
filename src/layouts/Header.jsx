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
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[var(--primary-color)] text-[var(--secondary-color)] flex justify-between items-baseline p-6 md:p-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        // className={styles.navbarBrand}
      >
        <button
          className="block lg-md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div>
        <Link to="/" className="text-lg md:text-2xl font-bold">
          <h2 className="whitespace-nowrap">
            Air Gear <span className="hidden lg-md:inline">| All in One</span>
          </h2>
        </Link>
      </div>
      <nav className="flex items-center">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />
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
              <button className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-md hover:opacity-80 min-w-[100px] whitespace-nowrap">
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
