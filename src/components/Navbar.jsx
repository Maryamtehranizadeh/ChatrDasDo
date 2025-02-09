import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useType } from "../context/TypeProvider";

function Navbar() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const { allTypes } = useType();

  const typeHandler = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory !== "none") {
      setCategoryId(selectedCategory);
      navigate(`/${selectedCategory}`);
    }
  };
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
      <div className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <select
          name="gear_type_id"
          id="category"
          onChange={typeHandler}
          style={{
            backgroundColor: "var(--primary-color)",
            border: "none",
            padding: "0",
            margin: "0 30px 0 0 ",
          }}
        >
          <option value="none" className={styles.category}>
            Category
          </option>
          {allTypes?.map((type) => (
            <option
              className={styles.category}
              key={type.id}
              value={type.name}
              onClick={() => setIsOpen(false)}
            >
              {type.name}
            </option>
          ))}
        </select>
        <NavLink to="/addgear" onClick={() => setIsOpen(false)}>
          Sell your items
        </NavLink>
        <NavLink to="/requestgear" onClick={() => setIsOpen(false)}>
          Tell us what you need
        </NavLink>
        <NavLink to="/About-us" onClick={() => setIsOpen(false)}>
          Contact Us
        </NavLink>
        <NavLink to="/security-and-safety" onClick={() => setIsOpen(false)}>
          Security and Safety
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
