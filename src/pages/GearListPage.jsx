import { getGearTypes } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

//this has become a component

function GearListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear-types"],
    queryFn: getGearTypes,
    refetchOnMount: true,
    staleTime: 0,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div style={{ marginLeft: "40px" }}>
      <div>
        <Link to="/addgear">
          <button>Add your Item, others may need it!</button>
        </Link>
      </div>
      <h1>See all our gears!</h1>
      <div>
        {data?.data.map((type) => (
          <Link
            style={{ marginRight: "20px" }}
            key={type.id}
            to={`/${type.name}`}
          >
            <button>{type.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GearListPage;
