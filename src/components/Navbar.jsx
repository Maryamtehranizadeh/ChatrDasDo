import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useType } from "../context/TypeProvider";

function Navbar({ isOpen, setIsOpen, toggleMenu }) {
  const navigate = useNavigate();
  const { allTypes } = useType();

  const navLinkClass =
    "px-3 py-3 rounded-lg text-left lg-md:flex flex-wrap justify-center lg-md:text-center  transition-colors duration-500 ease-in-out hover:scale-107 hover:text-[var(--primary-color)] hover:bg-[var(--secondary-color)]";

  return (
    <nav className="bg-[var(--primary-color)] text-[var(--secondary-color)] text-lg  p-4 ">
      <div
        className={`${isOpen ? "flex flex-col gap-4 absolute top-[80px] left-0 right-0 w-screen bg-[var(--primary-color)] p-4 shadow-md transition-all" : " hidden lg-md:flex flex-row lg-md:gap-4 justify-between align-baseline"}`}
      >
        <NavLink
          className={navLinkClass}
          to="/addgear"
          onClick={() => setIsOpen(false)}
        >
          Sell your items
        </NavLink>
        <NavLink
          className={navLinkClass}
          to="/requestgear"
          onClick={() => setIsOpen(false)}
        >
          Say what you need
        </NavLink>
        <NavLink
          className={navLinkClass}
          to="/About-us"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>
        <NavLink
          className={navLinkClass}
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
