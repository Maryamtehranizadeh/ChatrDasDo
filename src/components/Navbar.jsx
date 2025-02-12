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
    <nav
      className="bg-[var(--primary-color)] text-[var(--secondary-color)] p-4 relative"
      //  className={styles.navbar}
    >
      <div
        className="flex justify-between items-center"
        // className={styles.navbarBrand}
      >
        <button
          className="lg-md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          // className={styles.hamburger}
        >
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
        <NavLink
          style={{
            whiteSpace: "nowrap",
          }}
          to="/addgear"
          onClick={() => setIsOpen(false)}
        >
          Sell your items
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
          }}
          to="/requestgear"
          onClick={() => setIsOpen(false)}
        >
          Say what you need
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
          }}
          to="/About-us"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
          }}
          to="/security-and-safety"
          onClick={() => setIsOpen(false)}
        >
          Security and Safety
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
