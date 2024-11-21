import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getWings } from "../utils/getAll";

function WingDetails() {
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
  const { id } = useParams();

  const thisWing = data?.data.find((wing) => wing.id === id);
  return (
    <div>
      <h1>More details about this wing:</h1>
      <Link to="/wings">
        <button>Back to the list</button>
      </Link>
      {isLoading ? (
        <h2>Loading ... Please Wait!</h2>
      ) : (
        <div>
          <h3>{thisWing?.name}</h3>
          <hr />
          <p>{thisWing.brand}</p>
          <hr />
          <span>{thisWing.price}</span>
        </div>
      )}
    </div>
  );
}

export default WingDetails;
