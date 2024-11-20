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

  console.log(data?.data);
  return (
    <div>
      <h1>Welcome to our Gears' Page!</h1>
      {data?.data.map((type) => (
        <Link to={`/${type.name}`}>
          <button key={type.id}>{type.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default GearListPage;
