import { getUser } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import WingList from "../components/WingList";
import { useUser } from "../context/UserProvider";

function Dashboard() {
  const { loggedUser, loggedEmail, loggedId } = useUser();
  return (
    <div style={{ margin: "40px" }}>
      <div style={{ margin: "40px" }}>
        <h1>Dashboard | Welcome "{loggedEmail}"</h1>
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
        <WingList id={loggedId} />
      </div>
    </div>
  );
}

export default Dashboard;
