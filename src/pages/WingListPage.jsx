import { getWings } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import styles from "./WingListPage.module.css";
import { Link } from "react-router-dom";

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
    <div className={styles.container}>
      {/* <Link to="/addgear">
        <button>Add more Wings here</button>
      </Link> */}
      {data?.data.map((wing) => (
        <Link to={`/itemdetails/${wing.id}`} key={wing.id}>
          <div className={styles.wing}>
            <h3>{wing.name}</h3>
            <p>{wing.brand}</p>
            <p>{wing.id}</p>
            <span>{wing.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WingListPage;
