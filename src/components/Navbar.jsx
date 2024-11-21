import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <NavLink to="/wings">Wings</NavLink>
      <NavLink to="/harness">Harness</NavLink>
      <NavLink to="/instruments">Flying Instruments</NavLink>
      <NavLink to="/addgear">Sell your items</NavLink>
    </nav>
  );
}

export default Navbar;
