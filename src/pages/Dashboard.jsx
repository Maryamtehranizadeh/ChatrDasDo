import { getUser } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import WingList from "../components/WingList";

function Dashboard() {
  // console.log("dashboard re rendered");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnMount: true,
    staleTime: 0,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  // console.log(data.data.id);
  // console.log(data.data.email);
  return (
    <div style={{ margin: "40px" }}>
      <div style={{ margin: "40px" }}>
        <h1>Dashboard | Welcome "{data?.data.email}"</h1>
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
        <WingList id={data.data.id} />
      </div>
    </div>
  );
}

export default Dashboard;
