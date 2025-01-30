import { getUser } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MyGearList from "../components/MyGearList";
import { useUser } from "../context/UserProvider";

function Dashboard() {
  const {
    email,
    country,
    date_joined,
    first_name,
    userId,
    is_certified_seller,
    last_name,
    last_updated,
    phone_number,
    username,
  } = useUser();
  return (
    <div style={{ margin: "40px" }}>
      <div style={{ margin: "40px" }}>
        <h1>Dashboard | Welcome "{email}"</h1>
        <Link to="/addgear">
          <button style={{ marginRight: "30px" }}>
            Place an add and sell your item!
          </button>
        </Link>
        <Link to="/requestgear">
          <button>Tell us what you need!</button>
        </Link>
        <h1>My Gears</h1>
      </div>
      <div>
        <MyGearList id={userId} />
      </div>
    </div>
  );
}

export default Dashboard;
