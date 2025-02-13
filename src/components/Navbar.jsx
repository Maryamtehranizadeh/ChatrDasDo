import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useType } from "../context/TypeProvider";

function Navbar({ isOpen, setIsOpen, toggleMenu }) {
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

  return (
    <nav
      className="bg-[var(--primary-color)] text-[var(--secondary-color)]  p-4 "
      //  className={styles.navbar}
    >
      <div className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <select
          className={styles.category}
          name="gear_type_id"
          id="category"
          onChange={typeHandler}
          style={{
            backgroundColor: "var(--primary-color)",
            border: "none",
            marginBottom: "0px",
            // textAlign: "center",
            // paddingLeft: "0px",
          }}
        >
          <option value="none">Category</option>
          {allTypes?.map((type) => (
            <option
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
            textAlign: "left",
          }}
          to="/addgear"
          onClick={() => setIsOpen(false)}
        >
          Sell your items
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
          to="/requestgear"
          onClick={() => setIsOpen(false)}
        >
          Say what you need
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
          to="/About-us"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>
        <NavLink
          style={{
            whiteSpace: "nowrap",
            textAlign: "left",
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
