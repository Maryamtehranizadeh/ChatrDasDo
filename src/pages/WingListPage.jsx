import { getWings } from "../utils/getWings";
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
      <Link to="/addwing">
        <button>Add your Wing</button>
      </Link>
      {data?.data.map((wing) => (
        <div key={wing.id} className={styles.wing}>
          <h3>{wing.name}</h3>
          <p>{wing.brand}</p>
          <span>{wing.price}</span>
        </div>
      ))}
    </div>
  );
}

export default WingListPage;
