import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <li>
          <NavLink to="/test" onClick={() => setIsOpen(false)}>
            Test
          </NavLink>
        </li>
        <li>
          <NavLink to="/wings" onClick={() => setIsOpen(false)}>
            Wings
          </NavLink>
        </li>
        <li>
          <NavLink to="/harness" onClick={() => setIsOpen(false)}>
            Harness
          </NavLink>
        </li>
        <li>
          <NavLink to="/instruments" onClick={() => setIsOpen(false)}>
            Flying Instruments
          </NavLink>
        </li>
        <li>
          <NavLink to="/addgear" onClick={() => setIsOpen(false)}>
            Sell your items
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
