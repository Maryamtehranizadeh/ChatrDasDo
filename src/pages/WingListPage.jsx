import { getWings } from "../utils/getWings";
import { useQuery } from "@tanstack/react-query";

function WingListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wings"],
    queryFn: getWings,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div>
      <h1>Welcome to our Wings' Page!</h1>
      {data?.data.map((wing) => (
        <div key={wing.id}>
          <h3>{wing.name}</h3>
          <p>{wing.brand}</p>
          <span>{wing.price}</span>
        </div>
      ))}
    </div>
  );
}

export default WingListPage;
