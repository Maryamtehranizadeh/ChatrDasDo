import { getUsers } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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

  console.log(data?.data);

  return (
    <div>
      <h3>Dashboard | Welcome "{data?.data.email}"</h3>
      <Link to="/addgear">Place and add and sell your item!</Link>
    </div>
  );
}

export default Dashboard;
