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
      <h1>Welcome to our Wings' Page!</h1>
      <Link to="/addgear">
        <button>Add your Wing</button>
      </Link>
      {data?.data.map((wing) => (
        <Link to={`/wingdetails/${wing.id}`} key={wing.id}>
          <div className={styles.wing}>
            <h3>{wing.name}</h3>
            <p>{wing.brand}</p>
            <span>{wing.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WingListPage;
