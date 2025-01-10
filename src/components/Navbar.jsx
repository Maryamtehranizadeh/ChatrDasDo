import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useQuery } from "@tanstack/react-query";
import { getGearTypes } from "../utils/getAll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
    refetchOnMount: true,
    staleTime: 0,
  });
  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  console.log(data?.data);

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
          }}
        >
          <option value="none" className={styles.category}>
            Category
          </option>
          {data?.data.map((type) => (
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
      </div>
    </nav>
  );
}

export default Navbar;
