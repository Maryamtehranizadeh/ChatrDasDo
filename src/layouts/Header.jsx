import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <h2>Air Gear | All in One</h2>
        </Link>
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div>
        <Link to="/auth">
          <button>Login</button>
        </Link>
        <Link to="/auth">
          <button>Logout</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
