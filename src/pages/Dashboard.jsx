import { getUsers } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import WingList from "../components/WingList";

function Dashboard() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  // console.log(data?.data);

  return (
    <div style={{ margin: "20px" }}>
      <h3>Dashboard | Welcome "{data?.data.email}"</h3>
      <Link to="/addgear">
        <button
          style={{ border: "1px solid var( --primary-color)", margin: "20px" }}
        >
          Place an add and sell your item!
        </button>
      </Link>
      <div>
        <h1>My Gears</h1>
        <WingList />
      </div>
    </div>
  );
}

export default Dashboard;
