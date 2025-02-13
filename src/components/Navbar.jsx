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
    <nav className="bg-[var(--primary-color)] text-[var(--secondary-color)] text-lg  p-4 ">
      <div
        className={`${isOpen ? "flex flex-col gap-4 absolute top-[80px] left-0 right-0 w-screen bg-[var(--primary-color)] p-4 shadow-md transition-all" : " hidden lg-md:flex flex-row gap-3.5 justify-between align-baseline"}`}
        // className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}
      >
        <select
          className="pl-0 pb-0 mb-0 border-none w-full lg-md:w-auto bg-[var(--primary-color)] p-0"
          name="gear_type_id"
          id="category"
          onChange={typeHandler}
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
