import { getGearTypes } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function GearListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div style={{margin:"40px"}}>
      <h1>Welcome to our Gears' Page!</h1>
      <Link to="/addgear">
        <button>Add your Item, others may need it!</button>
      </Link>
      <div style={{display:"flex", justifyContent:"space-between", margin:"40px"}}>
      
      {data?.data.map((type) => (
        <Link key={type.id} to={`/${type.name}`}>
          <button >{type.name}</button>
        </Link>
      ))}
      </div>
      
    </div>
  );
}

export default GearListPage;
